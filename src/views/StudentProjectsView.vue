<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'
import { useCoursesStore } from '../stores/courses'
import { useUserStore } from '../stores/user'

const coursesStore = useCoursesStore()
const userStore = useUserStore()

const search = ref('')
const selectedTag = ref('全部')

const allTags = ['全部', ...new Set(coursesStore.studentProjects.flatMap((p) => p.tags))]

const filteredProjects = computed(() => {
  return coursesStore.studentProjects.filter((p) => {
    const matchSearch =
      search.value === '' ||
      p.title.includes(search.value) ||
      p.description.includes(search.value) ||
      p.author.includes(search.value)
    const matchTag = selectedTag.value === '全部' || p.tags.includes(selectedTag.value)
    return matchSearch && matchTag
  })
})

onMounted(() => {
  userStore.unlockProjectFan()
})
</script>

<template>
  <div class="projects-view">
    <div class="page-header">
      <h1 class="page-title">🎨 学生创意项目</h1>
      <p class="page-desc">
        这里展示了同学们用 Vue3 + TypeScript 设计的创意教学项目。每一个都是令人印象深刻的想法！
      </p>
    </div>

    <!-- Filters -->
    <div class="filters">
      <input
        v-model="search"
        type="text"
        placeholder="🔍 搜索项目名称、描述或作者..."
        class="search-input"
      />
    </div>

    <div class="tag-filters">
      <button
        v-for="tag in allTags"
        :key="tag"
        class="tag-btn"
        :class="{ active: selectedTag === tag }"
        @click="selectedTag = tag"
      >
        {{ tag }}
      </button>
    </div>

    <!-- Stats -->
    <div class="projects-stats">
      <span>展示 {{ filteredProjects.length }} / {{ coursesStore.studentProjects.length }} 个项目</span>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid" v-if="filteredProjects.length > 0">
      <ProjectCard v-for="project in filteredProjects" :key="project.id" :project="project" />
    </div>

    <div class="empty-state" v-else>
      <div class="empty-icon">🔍</div>
      <p>没有找到匹配的项目</p>
    </div>

    <!-- CTA -->
    <div class="cta-section">
      <div class="cta-card">
        <div class="cta-icon">✨</div>
        <h3>想展示你的项目？</h3>
        <p>学完课程后，创建你自己的游戏化教学项目，与同学分享你的创意！</p>
        <RouterLink to="/courses" class="cta-btn">🚀 开始学习</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-view {
  max-width: 1200px;
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
  margin-bottom: 0.5rem;
}

.page-desc {
  color: #64748b;
  font-size: 0.95rem;
  max-width: 640px;
}

.filters {
  margin-bottom: 1rem;
}

.search-input {
  width: 100%;
  max-width: 480px;
  padding: 0.6rem 1rem;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
  box-sizing: border-box;
}

.search-input::placeholder {
  color: #475569;
}

.search-input:focus {
  border-color: rgba(99, 102, 241, 0.5);
}

.tag-filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.tag-btn {
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  background: transparent;
  color: #64748b;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;
}

.tag-btn:hover {
  background: rgba(99, 102, 241, 0.1);
  color: #94a3b8;
}

.tag-btn.active {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.5);
  color: #818cf8;
}

.projects-stats {
  font-size: 0.875rem;
  color: #475569;
  margin-bottom: 1.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: #475569;
}

.empty-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

/* CTA */
.cta-section {
  margin-top: 2rem;
}

.cta-card {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(52, 211, 153, 0.07));
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
}

.cta-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-card h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.cta-card p {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 1.5rem;
}

.cta-btn {
  display: inline-block;
  padding: 0.7rem 1.75rem;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
