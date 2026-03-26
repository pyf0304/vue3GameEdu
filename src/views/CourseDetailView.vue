<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProgressBar from '../components/ProgressBar.vue'
import { useCoursesStore } from '../stores/courses'
import { useUserStore } from '../stores/user'

const route = useRoute()
const router = useRouter()
const coursesStore = useCoursesStore()
const userStore = useUserStore()

const courseId = computed(() => Number(route.params.id))
const course = computed(() => coursesStore.getCourseById(courseId.value))

const completedCount = computed(() => {
  if (!course.value) return 0
  return course.value.lessons.filter((l) => userStore.completedLessons.includes(l.id)).length
})


function isLessonCompleted(lessonId: number) {
  return userStore.completedLessons.includes(lessonId)
}

function goToQuiz(lessonId: number) {
  if (!course.value) return
  const lesson = course.value.lessons.find((l) => l.id === lessonId)
  if (lesson?.quiz) {
    router.push(`/quiz/${course.value.id}/${lessonId}`)
  }
}

function markCompleted(lessonId: number) {
  if (!course.value) return
  const lesson = course.value.lessons.find((l) => l.id === lessonId)
  if (lesson && !isLessonCompleted(lessonId)) {
    userStore.completeLesson(lessonId, lesson.xpReward)
    // Check if all lessons completed
    const allDone = course.value.lessons.every((l) =>
      userStore.completedLessons.includes(l.id)
    )
    if (allDone) {
      userStore.completeCourse(course.value.id)
    }
  }
}

const difficultyLabel: Record<string, string> = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级',
}
</script>

<template>
  <div class="course-detail-view">
    <div v-if="!course" class="not-found">
      <p>课程未找到</p>
      <RouterLink to="/courses">← 返回课程列表</RouterLink>
    </div>

    <template v-else>
      <!-- Header -->
      <div class="course-header">
        <RouterLink to="/courses" class="back-link">← 课程列表</RouterLink>
        <div class="course-meta">
          <span class="course-icon">{{ course.icon }}</span>
          <div>
            <h1 class="course-title">{{ course.title }}</h1>
            <div class="course-info">
              <span class="difficulty">{{ difficultyLabel[course.difficulty] }}</span>
              <span class="separator">·</span>
              <span>{{ course.lessons.length }} 节课</span>
              <span class="separator">·</span>
              <span class="xp-reward">⭐ +{{ course.xpReward }} XP</span>
            </div>
          </div>
        </div>
        <p class="course-desc">{{ course.description }}</p>

        <div class="course-progress">
          <ProgressBar
            :value="completedCount"
            :max="course.lessons.length"
            :label="`完成进度：${completedCount} / ${course.lessons.length} 节`"
            color="linear-gradient(90deg, #6366f1, #34d399)"
          />
        </div>

        <div class="course-tags">
          <span v-for="tag in course.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>

      <!-- Lessons List -->
      <div class="lessons-section">
        <h2 class="lessons-title">📖 课程内容</h2>
        <div class="lessons-list">
          <div
            v-for="(lesson, index) in course.lessons"
            :key="lesson.id"
            class="lesson-card"
            :class="{ completed: isLessonCompleted(lesson.id) }"
          >
            <div class="lesson-header">
              <div class="lesson-num">
                <span v-if="isLessonCompleted(lesson.id)" class="check">✓</span>
                <span v-else>{{ index + 1 }}</span>
              </div>
              <div class="lesson-info">
                <h3 class="lesson-title">{{ lesson.title }}</h3>
                <span class="lesson-xp">⭐ +{{ lesson.xpReward }} XP</span>
              </div>
            </div>

            <!-- Content -->
            <div class="lesson-content">
              <pre class="content-text">{{ lesson.content }}</pre>
            </div>

            <!-- Actions -->
            <div class="lesson-actions">
              <button
                v-if="!isLessonCompleted(lesson.id)"
                class="btn-complete"
                @click="markCompleted(lesson.id)"
              >
                ✅ 标记完成，获得 {{ lesson.xpReward }} XP
              </button>
              <span v-else class="completed-label">✓ 已完成</span>

              <button
                v-if="lesson.quiz"
                class="btn-quiz"
                @click="goToQuiz(lesson.id)"
              >
                🧠 开始测验
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.course-detail-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.not-found {
  text-align: center;
  padding: 4rem;
  color: #64748b;
}

.back-link {
  display: inline-block;
  color: #818cf8;
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.course-header {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
}

.course-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.course-icon {
  font-size: 3rem;
}

.course-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #e2e8f0;
  margin-bottom: 0.35rem;
}

.course-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #64748b;
}

.difficulty {
  color: #fbbf24;
  font-weight: 600;
}

.xp-reward {
  color: #fbbf24;
}

.separator {
  color: #334155;
}

.course-desc {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
}

.course-progress {
  margin-bottom: 1rem;
}

.course-tags {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.tag {
  font-size: 0.75rem;
  padding: 0.2rem 0.65rem;
  background: rgba(99, 102, 241, 0.12);
  color: #818cf8;
  border-radius: 20px;
}

/* Lessons */
.lessons-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 1rem;
}

.lessons-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.lesson-card {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(99, 102, 241, 0.18);
  border-radius: 16px;
  padding: 1.5rem;
  transition: border-color 0.2s;
}

.lesson-card.completed {
  border-color: rgba(52, 211, 153, 0.35);
  background: rgba(52, 211, 153, 0.04);
}

.lesson-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
}

.lesson-num {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 700;
  color: #818cf8;
  flex-shrink: 0;
}

.lesson-card.completed .lesson-num {
  background: rgba(52, 211, 153, 0.2);
  color: #34d399;
}

.check {
  font-size: 0.9rem;
}

.lesson-info {
  flex: 1;
}

.lesson-title {
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 0.25rem;
}

.lesson-xp {
  font-size: 0.8rem;
  color: #fbbf24;
}

.lesson-content {
  margin-bottom: 1rem;
  padding: 1rem;
  background: rgba(15, 20, 40, 0.5);
  border-radius: 10px;
  border: 1px solid rgba(99, 102, 241, 0.1);
}

.content-text {
  white-space: pre-wrap;
  font-family: inherit;
  font-size: 0.875rem;
  color: #94a3b8;
  line-height: 1.7;
  margin: 0;
}

.lesson-actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
}

.btn-complete {
  padding: 0.5rem 1.25rem;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-complete:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
}

.btn-quiz {
  padding: 0.5rem 1.25rem;
  background: rgba(52, 211, 153, 0.15);
  color: #34d399;
  border: 1px solid rgba(52, 211, 153, 0.3);
  border-radius: 10px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-quiz:hover {
  background: rgba(52, 211, 153, 0.25);
}

.completed-label {
  font-size: 0.875rem;
  color: #34d399;
  font-weight: 600;
}
</style>
