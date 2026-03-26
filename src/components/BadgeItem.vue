<script setup lang="ts">
import type { Badge } from '../types'

defineProps<{
  badge: Badge
  unlocked: boolean
}>()
</script>

<template>
  <div class="badge-item" :class="{ locked: !unlocked }">
    <div class="badge-icon">{{ badge.icon }}</div>
    <div class="badge-info">
      <div class="badge-name">{{ badge.name }}</div>
      <div class="badge-desc">{{ badge.description }}</div>
    </div>
    <div class="badge-status">
      <span v-if="unlocked" class="status-unlocked">✓</span>
      <span v-else class="status-locked">🔒</span>
    </div>
  </div>
</template>

<style scoped>
.badge-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: rgba(30, 41, 59, 0.6);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 12px;
  transition: all 0.2s;
}

.badge-item:not(.locked) {
  border-color: rgba(52, 211, 153, 0.4);
  background: rgba(52, 211, 153, 0.05);
}

.badge-item.locked {
  opacity: 0.45;
  filter: grayscale(0.6);
}

.badge-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
}

.badge-info {
  flex: 1;
}

.badge-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: #e2e8f0;
}

.badge-desc {
  font-size: 0.78rem;
  color: #64748b;
  margin-top: 0.15rem;
}

.status-unlocked {
  color: #34d399;
  font-weight: 700;
}

.status-locked {
  font-size: 0.85rem;
}
</style>
