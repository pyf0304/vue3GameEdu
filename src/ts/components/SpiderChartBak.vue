<template>
  <canvas ref="radarChartCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

  export default defineComponent({
    name: 'SpiderChart',
    setup() {
      const radarChartCanvas = ref();
      const canvasWidth = 400;
      const canvasHeight = 400;
      const dimensions = [
        { name: '计算机软件', value: 80 },
        { name: '计算机组成', value: 60 },
        { name: '二进制', value: 55 },
        { name: '数字编码', value: 87 },
        { name: '文件夹', value: 45 },
      ];

      const drawRadarChart = () => {
        const canvas = radarChartCanvas.value as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        const radius = Math.min(centerX, centerY) * 0.8;

        // Clear canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);

        // Draw grid
        const levels = 5;
        const levelDistance = radius / levels;
        for (let level = 1; level <= levels; level++) {
          const currentRadius = level * levelDistance;
          ctx.beginPath();
          for (let i = 0; i < dimensions.length; i++) {
            const angle = ((Math.PI * 2) / dimensions.length) * i;
            const x = centerX + currentRadius * Math.cos(angle);
            const y = centerY + currentRadius * Math.sin(angle);
            if (i === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
          ctx.stroke();
        }

        // Draw data
        ctx.beginPath();
        for (let i = 0; i < dimensions.length; i++) {
          const angle = ((Math.PI * 2) / dimensions.length) * i;
          const value = dimensions[i].value;
          const x = centerX + radius * (value / 100) * Math.cos(angle);
          const y = centerY + radius * (value / 100) * Math.sin(angle);
          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
        ctx.fill();
      };

      onMounted(() => {
        drawRadarChart();
      });

      return {
        radarChartCanvas,
        canvasWidth,
        canvasHeight,
      };
    },
  });
</script>

<style scoped>
  canvas {
    border: 1px solid black;
  }
</style>
