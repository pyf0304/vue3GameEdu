import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Badge, UserState } from '../types'

export const BADGES: Badge[] = [
  {
    id: 'first_lesson',
    name: '初学者',
    description: '完成第一节课',
    icon: '🌱',
    condition: '完成第一节课程',
  },
  {
    id: 'quiz_master',
    name: '问答达人',
    description: '完成5次测验',
    icon: '🧠',
    condition: '完成5次测验',
  },
  {
    id: 'level5',
    name: '冒险者',
    description: '达到5级',
    icon: '⚔️',
    condition: '达到5级',
  },
  {
    id: 'first_course',
    name: '课程完成者',
    description: '完成第一门课程',
    icon: '🏅',
    condition: '完成第一门课程',
  },
  {
    id: 'xp500',
    name: '学习精英',
    description: '累计获得500 XP',
    icon: '⭐',
    condition: '累计获得500 XP',
  },
  {
    id: 'project_fan',
    name: '项目爱好者',
    description: '查看所有学生项目',
    icon: '🎨',
    condition: '查看所有学生项目',
  },
]

const XP_PER_LEVEL = 100

function xpToLevel(xp: number): number {
  return Math.floor(xp / XP_PER_LEVEL) + 1
}

const STORAGE_KEY = 'vue3GameEdu_user'

function loadState(): UserState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch {
    // ignore
  }
  return {
    name: '学习者',
    xp: 0,
    level: 1,
    badges: [],
    completedLessons: [],
    completedCourses: [],
  }
}

export const useUserStore = defineStore('user', () => {
  const state = ref<UserState>(loadState())

  const xp = computed(() => state.value.xp)
  const level = computed(() => xpToLevel(state.value.xp))
  const name = computed(() => state.value.name)
  const badges = computed(() => state.value.badges)
  const completedLessons = computed(() => state.value.completedLessons)
  const completedCourses = computed(() => state.value.completedCourses)
  const xpInCurrentLevel = computed(() => state.value.xp % XP_PER_LEVEL)
  const xpToNextLevel = computed(() => XP_PER_LEVEL)
  const progressPercent = computed(() =>
    Math.floor((xpInCurrentLevel.value / xpToNextLevel.value) * 100)
  )

  function save() {
    state.value.level = xpToLevel(state.value.xp)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.value))
  }

  function addXP(amount: number) {
    state.value.xp += amount
    checkBadges()
    save()
  }

  function setName(newName: string) {
    state.value.name = newName
    save()
  }

  function completeLesson(lessonId: number, xpReward: number) {
    if (!state.value.completedLessons.includes(lessonId)) {
      state.value.completedLessons.push(lessonId)
      addXP(xpReward)
      if (state.value.completedLessons.length === 1) {
        unlockBadge('first_lesson')
      }
    }
    save()
  }

  function completeCourse(courseId: number) {
    if (!state.value.completedCourses.includes(courseId)) {
      state.value.completedCourses.push(courseId)
      if (state.value.completedCourses.length === 1) {
        unlockBadge('first_course')
      }
    }
    save()
  }

  function unlockBadge(badgeId: string) {
    if (!state.value.badges.includes(badgeId)) {
      state.value.badges.push(badgeId)
      save()
    }
  }

  function checkBadges() {
    if (state.value.xp >= 500) unlockBadge('xp500')
    if (xpToLevel(state.value.xp) >= 5) unlockBadge('level5')
  }

  function unlockProjectFan() {
    unlockBadge('project_fan')
  }

  function unlockQuizMaster(quizCount: number) {
    if (quizCount >= 5) unlockBadge('quiz_master')
  }

  return {
    xp,
    level,
    name,
    badges,
    completedLessons,
    completedCourses,
    xpInCurrentLevel,
    xpToNextLevel,
    progressPercent,
    addXP,
    setName,
    completeLesson,
    completeCourse,
    unlockBadge,
    unlockProjectFan,
    unlockQuizMaster,
  }
})
