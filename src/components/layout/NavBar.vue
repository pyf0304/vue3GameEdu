<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '../../stores/user'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const navLinks = [
  { name: '首页', path: '/' },
  { name: '课程', path: '/courses' },
  { name: '学生项目', path: '/projects' },
  { name: '我的档案', path: '/profile' },
]

const isActive = (path: string) => route.path === path
const levelBadge = computed(() => `Lv.${userStore.level}`)
</script>

<template>
  <nav class="navbar">
    <div class="navbar-inner">
      <RouterLink to="/" class="navbar-brand">
        <span class="brand-icon">🎮</span>
        <span class="brand-name">GameEdu</span>
      </RouterLink>

      <div class="navbar-links">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="nav-link"
          :class="{ active: isActive(link.path) }"
        >
          {{ link.name }}
        </RouterLink>
      </div>

      <div class="navbar-user" @click="router.push('/profile')">
        <div class="user-xp-bar">
          <div
            class="user-xp-fill"
            :style="{ width: userStore.progressPercent + '%' }"
          />
        </div>
        <span class="user-level">{{ levelBadge }}</span>
        <span class="user-xp-text">{{ userStore.xp }} XP</span>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(15, 20, 40, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.3);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 60px;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-icon {
  font-size: 1.5rem;
}

.brand-name {
  font-size: 1.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #818cf8, #34d399);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar-links {
  display: flex;
  gap: 0.25rem;
  flex: 1;
}

.nav-link {
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  text-decoration: none;
  color: #94a3b8;
  font-size: 0.9rem;
  transition: all 0.2s;
}

.nav-link:hover,
.nav-link.active {
  color: #e2e8f0;
  background: rgba(99, 102, 241, 0.2);
}

.nav-link.active {
  color: #818cf8;
}

.navbar-user {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  padding: 0.4rem 0.75rem;
  border-radius: 10px;
  border: 1px solid rgba(99, 102, 241, 0.25);
  transition: all 0.2s;
}

.navbar-user:hover {
  background: rgba(99, 102, 241, 0.1);
}

.user-xp-bar {
  width: 60px;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.user-xp-fill {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #34d399);
  border-radius: 3px;
  transition: width 0.5s ease;
}

.user-level {
  font-weight: 700;
  color: #818cf8;
  font-size: 0.85rem;
}

.user-xp-text {
  font-size: 0.8rem;
  color: #64748b;
}
</style>
