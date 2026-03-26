<script setup lang="ts">
import type { Course } from '../types'

defineProps<{
  course: Course
}>()

const difficultyLabel: Record<string, string> = {
  beginner: '初级',
  intermediate: '中级',
  advanced: '高级',
}

const difficultyColor: Record<string, string> = {
  beginner: '#34d399',
  intermediate: '#fbbf24',
  advanced: '#f87171',
}
</script>

<template>
  <RouterLink :to="`/courses/${course.id}`" class="course-card">
    <div class="card-header">
      <span class="card-icon">{{ course.icon }}</span>
      <span
        class="card-difficulty"
        :style="{ color: difficultyColor[course.difficulty], borderColor: difficultyColor[course.difficulty] }"
      >
        {{ difficultyLabel[course.difficulty] }}
      </span>
    </div>
    <h3 class="card-title">{{ course.title }}</h3>
    <p class="card-desc">{{ course.description }}</p>
    <div class="card-footer">
      <div class="card-tags">
        <span v-for="tag in course.tags.slice(0, 3)" :key="tag" class="tag">{{ tag }}</span>
      </div>
      <div class="card-xp">
        <span class="xp-icon">⭐</span>
        <span>+{{ course.xpReward }} XP</span>
      </div>
    </div>
    <div class="card-lessons">
      <span>📖 {{ course.lessons.length }} 节课</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.course-card {
  display: block;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  padding: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
}

.course-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.5);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.card-icon {
  font-size: 2rem;
}

.card-difficulty {
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid;
  border-radius: 20px;
  padding: 0.2rem 0.6rem;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
}

.card-desc {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.card-tags {
  display: flex;
  gap: 0.35rem;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  background: rgba(99, 102, 241, 0.15);
  color: #818cf8;
  border-radius: 20px;
}

.card-xp {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: #fbbf24;
  font-weight: 600;
  white-space: nowrap;
}

.card-lessons {
  font-size: 0.8rem;
  color: #475569;
}
</style>
