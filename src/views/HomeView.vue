<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import CourseCard from '../components/CourseCard.vue'
import ProgressBar from '../components/ProgressBar.vue'
import { useUserStore } from '../stores/user'
import { useCoursesStore } from '../stores/courses'

const router = useRouter()
const userStore = useUserStore()
const coursesStore = useCoursesStore()

const featuredCourses = computed(() => coursesStore.courses.slice(0, 3))

const stats = computed(() => [
  { label: '可学课程', value: coursesStore.courses.length, icon: '📚' },
  { label: '学生项目', value: coursesStore.studentProjects.length, icon: '🎨' },
  { label: '知识点', value: '50+', icon: '💡' },
  { label: '互动测验', value: '20+', icon: '🧠' },
])
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-inner">
        <div class="hero-text">
          <div class="hero-badge">🎮 游戏化学习平台</div>
          <h1 class="hero-title">
            让学习像<br />
            <span class="gradient-text">游戏</span>一样有趣
          </h1>
          <p class="hero-desc">
            基于 Vue3 + Vite + TypeScript 构建的现代化教学平台。
            通过 XP 经验值、徽章成就和互动测验，让每一次学习都充满成就感。
          </p>
          <div class="hero-actions">
            <button class="btn-primary" @click="router.push('/courses')">
              🚀 开始学习
            </button>
            <button class="btn-secondary" @click="router.push('/projects')">
              🎨 学生作品
            </button>
          </div>
        </div>

        <!-- User Status Card -->
        <div class="hero-card">
          <div class="status-card">
            <div class="status-header">
              <span class="status-avatar">🎓</span>
              <div>
                <div class="status-name">{{ userStore.name }}</div>
                <div class="status-level">等级 {{ userStore.level }} 学习者</div>
              </div>
            </div>
            <ProgressBar
              :value="userStore.xpInCurrentLevel"
              :max="userStore.xpToNextLevel"
              label="升级进度"
            />
            <div class="status-xp">
              <span>⭐ 总经验值</span>
              <span class="xp-val">{{ userStore.xp }} XP</span>
            </div>
            <div class="status-badges">
              <span class="badge-count">🏅 {{ userStore.badges.length }} 个徽章</span>
              <span class="lesson-count">📖 {{ userStore.completedLessons.length }} 节已完成</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <span class="stat-icon">{{ stat.icon }}</span>
          <span class="stat-value">{{ stat.value }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Featured Courses -->
    <section class="section">
      <div class="section-header">
        <h2 class="section-title">🔥 热门课程</h2>
        <RouterLink to="/courses" class="see-all">查看全部 →</RouterLink>
      </div>
      <div class="courses-grid">
        <CourseCard v-for="course in featuredCourses" :key="course.id" :course="course" />
      </div>
    </section>

    <!-- How it Works -->
    <section class="section">
      <h2 class="section-title">⚡ 如何运作</h2>
      <div class="steps-grid">
        <div class="step-card">
          <div class="step-num">01</div>
          <div class="step-icon">📚</div>
          <h3>选择课程</h3>
          <p>从我们精心设计的课程库中选择你感兴趣的主题。</p>
        </div>
        <div class="step-card">
          <div class="step-num">02</div>
          <div class="step-icon">🧠</div>
          <h3>互动学习</h3>
          <p>阅读课程内容，并完成每节课后的互动测验。</p>
        </div>
        <div class="step-card">
          <div class="step-num">03</div>
          <div class="step-icon">⭐</div>
          <h3>赢取奖励</h3>
          <p>每完成一节课或测验，即可获得 XP 经验值和特殊徽章。</p>
        </div>
        <div class="step-card">
          <div class="step-num">04</div>
          <div class="step-icon">🚀</div>
          <h3>展示成果</h3>
          <p>在学生项目展示区发布你的作品，与同学交流分享。</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero */
.hero {
  padding: 4rem 0 3rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-badge {
  display: inline-block;
  padding: 0.4rem 1rem;
  background: rgba(99, 102, 241, 0.15);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 20px;
  font-size: 0.85rem;
  color: #818cf8;
  margin-bottom: 1.25rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: #e2e8f0;
}

.gradient-text {
  background: linear-gradient(135deg, #818cf8, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-desc {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 2rem;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-primary {
  padding: 0.75rem 1.75rem;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
}

.btn-secondary {
  padding: 0.75rem 1.75rem;
  background: transparent;
  color: #94a3b8;
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background: rgba(99, 102, 241, 0.1);
  color: #e2e8f0;
}

/* Status Card */
.hero-card {
  display: flex;
  justify-content: center;
}

.status-card {
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 20px;
  padding: 1.75rem;
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.status-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.status-avatar {
  font-size: 2.5rem;
}

.status-name {
  font-weight: 700;
  color: #e2e8f0;
}

.status-level {
  font-size: 0.8rem;
  color: #818cf8;
}

.status-xp {
  display: flex;
  justify-content: space-between;
  font-size: 0.85rem;
  color: #64748b;
}

.xp-val {
  color: #fbbf24;
  font-weight: 700;
}

.status-badges {
  display: flex;
  gap: 1rem;
  font-size: 0.8rem;
  color: #475569;
}

/* Stats */
.stats-section {
  padding: 2rem 0;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  margin-bottom: 3rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.stat-icon {
  font-size: 1.75rem;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: #818cf8;
}

.stat-label {
  font-size: 0.8rem;
  color: #475569;
}

/* Section */
.section {
  margin-bottom: 4rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e2e8f0;
}

.see-all {
  font-size: 0.875rem;
  color: #818cf8;
  text-decoration: none;
}

.see-all:hover {
  color: #a5b4fc;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

/* Steps */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-top: 1.5rem;
}

.step-card {
  background: rgba(30, 41, 59, 0.5);
  border: 1px solid rgba(99, 102, 241, 0.15);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
}

.step-num {
  font-size: 0.75rem;
  font-weight: 800;
  color: rgba(99, 102, 241, 0.4);
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
}

.step-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.step-card h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.step-card p {
  font-size: 0.825rem;
  color: #64748b;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .hero-inner {
    grid-template-columns: 1fr;
  }

  .hero-title {
    font-size: 2rem;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .courses-grid {
    grid-template-columns: 1fr;
  }

  .steps-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
