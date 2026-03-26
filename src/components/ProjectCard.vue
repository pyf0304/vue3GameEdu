<script setup lang="ts">
import type { StudentProject } from '../types'
import { ref } from 'vue'

const props = defineProps<{
  project: StudentProject
}>()

const liked = ref(false)
const likeCount = ref(props.project.likes)

function toggleLike() {
  if (liked.value) {
    likeCount.value--
  } else {
    likeCount.value++
  }
  liked.value = !liked.value
}
</script>

<template>
  <div class="project-card">
    <div class="project-thumbnail">{{ project.thumbnail }}</div>
    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-desc">{{ project.description }}</p>
      <div class="project-meta">
        <span class="project-author">👤 {{ project.author }}</span>
        <span class="project-grade">{{ project.grade }}</span>
      </div>
      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
      </div>
      <div class="project-actions">
        <div class="project-links">
          <a v-if="project.demoUrl" :href="project.demoUrl" class="btn-link demo" target="_blank">
            🚀 演示
          </a>
          <a v-if="project.githubUrl" :href="project.githubUrl" class="btn-link github" target="_blank">
            📦 源码
          </a>
        </div>
        <button class="like-btn" :class="{ liked }" @click="toggleLike">
          {{ liked ? '❤️' : '🤍' }} {{ likeCount }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.4);
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.12);
}

.project-thumbnail {
  font-size: 4rem;
  text-align: center;
  padding: 2rem;
  background: rgba(99, 102, 241, 0.07);
  border-bottom: 1px solid rgba(99, 102, 241, 0.15);
}

.project-content {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.project-title {
  font-size: 1rem;
  font-weight: 700;
  color: #e2e8f0;
}

.project-desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
}

.project-author {
  color: #94a3b8;
}

.project-grade {
  color: #818cf8;
  font-size: 0.75rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.project-tag {
  font-size: 0.7rem;
  padding: 0.15rem 0.5rem;
  background: rgba(99, 102, 241, 0.12);
  color: #818cf8;
  border-radius: 20px;
}

.project-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
}

.project-links {
  display: flex;
  gap: 0.5rem;
}

.btn-link {
  font-size: 0.78rem;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s;
}

.btn-link.demo {
  background: rgba(99, 102, 241, 0.2);
  color: #818cf8;
}

.btn-link.demo:hover {
  background: rgba(99, 102, 241, 0.35);
}

.btn-link.github {
  background: rgba(52, 211, 153, 0.15);
  color: #34d399;
}

.btn-link.github:hover {
  background: rgba(52, 211, 153, 0.3);
}

.like-btn {
  background: none;
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  font-size: 0.8rem;
  color: #64748b;
  transition: all 0.2s;
}

.like-btn:hover {
  border-color: rgba(239, 68, 68, 0.4);
  color: #f87171;
}

.like-btn.liked {
  border-color: rgba(239, 68, 68, 0.5);
  color: #f87171;
  background: rgba(239, 68, 68, 0.08);
}
</style>
