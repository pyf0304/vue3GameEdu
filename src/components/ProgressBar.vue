<script setup lang="ts">
defineProps<{
  value: number
  max?: number
  label?: string
  color?: string
}>()
</script>

<template>
  <div class="progress-wrapper">
    <div class="progress-label" v-if="label">
      <span>{{ label }}</span>
      <span>{{ value }}{{ max ? ` / ${max}` : '%' }}</span>
    </div>
    <div class="progress-track">
      <div
        class="progress-fill"
        :style="{
          width: (max ? Math.min((value / max) * 100, 100) : Math.min(value, 100)) + '%',
          background: color || 'linear-gradient(90deg, #6366f1, #34d399)',
        }"
      />
    </div>
  </div>
</template>

<style scoped>
.progress-wrapper {
  width: 100%;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  color: #64748b;
  margin-bottom: 0.4rem;
}

.progress-track {
  height: 8px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 0.6s ease;
}
</style>
