<script setup lang="ts">
import { ref, computed } from 'vue'
import CourseCard from '../components/CourseCard.vue'
import { useCoursesStore } from '../stores/courses'

const coursesStore = useCoursesStore()

const search = ref('')
const selectedDifficulty = ref<string>('all')

const difficulties = [
  { value: 'all', label: '全部难度' },
  { value: 'beginner', label: '🟢 初级' },
  { value: 'intermediate', label: '🟡 中级' },
  { value: 'advanced', label: '🔴 高级' },
]

const filteredCourses = computed(() => {
  return coursesStore.courses.filter((c) => {
    const matchSearch =
      search.value === '' ||
      c.title.includes(search.value) ||
      c.description.includes(search.value) ||
      c.tags.some((t) => t.includes(search.value))

    const matchDifficulty =
      selectedDifficulty.value === 'all' || c.difficulty === selectedDifficulty.value

    return matchSearch && matchDifficulty
  })
})
</script>

<template>
  <div class="courses-view">
    <div class="page-header">
      <h1 class="page-title">📚 课程列表</h1>
      <p class="page-desc">探索丰富的学习内容，每完成一节课都能获得 XP 经验值和成就徽章。</p>
    </div>

    <!-- Filters -->
    <div class="filters">
      <input
        v-model="search"
        type="text"
        placeholder="🔍 搜索课程名称、描述或标签..."
        class="search-input"
      />
      <div class="difficulty-tabs">
        <button
          v-for="d in difficulties"
          :key="d.value"
          class="diff-tab"
          :class="{ active: selectedDifficulty === d.value }"
          @click="selectedDifficulty = d.value"
        >
          {{ d.label }}
        </button>
      </div>
    </div>

    <!-- Results count -->
    <div class="results-info">
      共 <strong>{{ filteredCourses.length }}</strong> 门课程
    </div>

    <!-- Courses Grid -->
    <div class="courses-grid" v-if="filteredCourses.length > 0">
      <CourseCard v-for="course in filteredCourses" :key="course.id" :course="course" />
    </div>

    <div class="empty-state" v-else>
      <div class="empty-icon">🔍</div>
      <p>没有找到匹配的课程，请尝试其他关键词。</p>
    </div>
  </div>
</template>

<style scoped>
.courses-view {
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
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.search-input {
  flex: 1;
  min-width: 200px;
  padding: 0.6rem 1rem;
  background: rgba(30, 41, 59, 0.8);
  border: 1px solid rgba(99, 102, 241, 0.25);
  border-radius: 10px;
  color: #e2e8f0;
  font-size: 0.9rem;
  outline: none;
  transition: border-color 0.2s;
}

.search-input::placeholder {
  color: #475569;
}

.search-input:focus {
  border-color: rgba(99, 102, 241, 0.5);
}

.difficulty-tabs {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.diff-tab {
  padding: 0.45rem 1rem;
  border-radius: 20px;
  border: 1px solid rgba(99, 102, 241, 0.2);
  background: transparent;
  color: #64748b;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.diff-tab:hover {
  background: rgba(99, 102, 241, 0.1);
  color: #94a3b8;
}

.diff-tab.active {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.5);
  color: #818cf8;
}

.results-info {
  font-size: 0.875rem;
  color: #475569;
  margin-bottom: 1.25rem;
}

.results-info strong {
  color: #818cf8;
}

.courses-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.25rem;
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
</style>
