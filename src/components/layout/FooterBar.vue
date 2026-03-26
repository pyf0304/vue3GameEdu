<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span>🎮 GameEdu</span>
        <p>Vue3 · Vite · TypeScript 游戏化教学平台</p>
      </div>
      <div class="footer-info">
        <p>让学习像游戏一样有趣 🚀</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid rgba(99, 102, 241, 0.2);
  padding: 2rem 1.5rem;
  margin-top: 4rem;
  background: rgba(15, 20, 40, 0.8);
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer-brand span {
  font-size: 1.1rem;
  font-weight: 700;
  color: #818cf8;
}

.footer-brand p,
.footer-info p {
  font-size: 0.85rem;
  color: #475569;
  margin-top: 0.25rem;
}
</style>
