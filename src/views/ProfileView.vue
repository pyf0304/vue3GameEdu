<script setup lang="ts">
import { ref, computed } from 'vue'
import ProgressBar from '../components/ProgressBar.vue'
import BadgeItem from '../components/BadgeItem.vue'
import { useUserStore } from '../stores/user'
import { useCoursesStore } from '../stores/courses'
import { BADGES } from '../stores/user'

const userStore = useUserStore()
const coursesStore = useCoursesStore()

const editingName = ref(false)
const newName = ref(userStore.name)

function saveName() {
  if (newName.value.trim()) {
    userStore.setName(newName.value.trim())
  }
  editingName.value = false
}

function resetProgress() {
  if (confirm('确定要重置所有学习进度吗？此操作不可撤销。')) {
    localStorage.clear()
    window.location.reload()
  }
}

const completedCourseTitles = computed(() =>
  userStore.completedCourses.map((id) => {
    const course = coursesStore.getCourseById(id)
    return course?.title ?? `课程 ${id}`
  })
)

const levelTitle = computed(() => {
  const lvl = userStore.level
  if (lvl < 3) return '初学者 🌱'
  if (lvl < 5) return '学习者 📚'
  if (lvl < 8) return '冒险者 ⚔️'
  if (lvl < 12) return '精英 ⭐'
  return '大师 🏆'
})
</script>

<template>
  <div class="profile-view">
    <div class="page-header">
      <h1 class="page-title">🎓 我的档案</h1>
    </div>

    <div class="profile-grid">
      <!-- User Card -->
      <div class="profile-card">
        <div class="avatar">🎓</div>
        <div v-if="editingName" class="name-edit">
          <input v-model="newName" class="name-input" @keyup.enter="saveName" autofocus />
          <button class="btn-save" @click="saveName">保存</button>
        </div>
        <div v-else class="name-display">
          <h2 class="user-name">{{ userStore.name }}</h2>
          <button class="btn-edit" @click="editingName = true">✏️</button>
        </div>
        <div class="user-level-title">{{ levelTitle }}</div>

        <div class="xp-display">
          <span class="xp-num">{{ userStore.xp }}</span>
          <span class="xp-label">总经验值</span>
        </div>

        <ProgressBar
          :value="userStore.xpInCurrentLevel"
          :max="userStore.xpToNextLevel"
          :label="`Lv.${userStore.level} → Lv.${userStore.level + 1}`"
        />

        <div class="stats-row">
          <div class="stat">
            <span class="stat-val">{{ userStore.level }}</span>
            <span class="stat-lbl">当前等级</span>
          </div>
          <div class="stat">
            <span class="stat-val">{{ userStore.completedLessons.length }}</span>
            <span class="stat-lbl">已完成课节</span>
          </div>
          <div class="stat">
            <span class="stat-val">{{ userStore.badges.length }}</span>
            <span class="stat-lbl">徽章数量</span>
          </div>
        </div>

        <button class="btn-reset" @click="resetProgress">🔄 重置进度</button>
      </div>

      <!-- Right Column -->
      <div class="right-column">
        <!-- Badges -->
        <div class="section-card">
          <h3 class="section-heading">🏅 成就徽章</h3>
          <div class="badges-list">
            <BadgeItem
              v-for="badge in BADGES"
              :key="badge.id"
              :badge="badge"
              :unlocked="userStore.badges.includes(badge.id)"
            />
          </div>
        </div>

        <!-- Completed Courses -->
        <div class="section-card">
          <h3 class="section-heading">📚 已完成课程</h3>
          <div v-if="completedCourseTitles.length > 0" class="completed-list">
            <div v-for="title in completedCourseTitles" :key="title" class="completed-item">
              <span class="done-icon">✅</span>
              <span>{{ title }}</span>
            </div>
          </div>
          <p v-else class="empty-hint">还没有完成任何课程，快去学习吧！</p>
          <RouterLink to="/courses" class="go-learn">→ 去学习</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-view {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.page-header {
  margin-bottom: 2rem;
}

.page-title {
  font-size: 2rem;
  font-weight: 800;
  color: #e2e8f0;
}

.profile-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 1.5rem;
  align-items: start;
}

/* Profile Card */
.profile-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
}

.avatar {
  font-size: 4rem;
}

.name-display {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: #e2e8f0;
}

.btn-edit {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
}

.name-edit {
  display: flex;
  gap: 0.5rem;
}

.name-input {
  padding: 0.4rem 0.75rem;
  background: rgba(15, 20, 40, 0.6);
  border: 1px solid rgba(99, 102, 241, 0.4);
  border-radius: 8px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
}

.btn-save {
  padding: 0.4rem 0.85rem;
  background: rgba(99, 102, 241, 0.25);
  border: 1px solid rgba(99, 102, 241, 0.4);
  border-radius: 8px;
  color: #818cf8;
  font-size: 0.85rem;
  cursor: pointer;
}

.user-level-title {
  font-size: 0.875rem;
  color: #818cf8;
  font-weight: 600;
}

.xp-display {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.xp-num {
  font-size: 2.5rem;
  font-weight: 800;
  color: #fbbf24;
}

.xp-label {
  font-size: 0.75rem;
  color: #475569;
}

.stats-row {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  justify-content: center;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
}

.stat-val {
  font-size: 1.25rem;
  font-weight: 800;
  color: #818cf8;
}

.stat-lbl {
  font-size: 0.7rem;
  color: #475569;
}

.btn-reset {
  margin-top: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: rgba(248, 113, 113, 0.1);
  border: 1px solid rgba(248, 113, 113, 0.25);
  border-radius: 10px;
  color: #f87171;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
}

.btn-reset:hover {
  background: rgba(248, 113, 113, 0.2);
}

/* Right Column */
.right-column {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-card {
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(99, 102, 241, 0.18);
  border-radius: 16px;
  padding: 1.5rem;
}

.section-heading {
  font-size: 1.05rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 1rem;
}

.badges-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.completed-list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-bottom: 1rem;
}

.completed-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.875rem;
  color: #94a3b8;
}

.done-icon {
  font-size: 1rem;
}

.empty-hint {
  font-size: 0.875rem;
  color: #475569;
  margin-bottom: 1rem;
}

.go-learn {
  display: inline-block;
  font-size: 0.875rem;
  color: #818cf8;
  text-decoration: none;
}

.go-learn:hover {
  color: #a5b4fc;
}

@media (max-width: 768px) {
  .profile-grid {
    grid-template-columns: 1fr;
  }
}
</style>
