<template>
  <canvas ref="radarChartCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>

<script lang="ts">
  import { clsDimensions } from '@/ts/FunClass/clsDimensions';
  import { defineComponent, onMounted, ref } from 'vue';

  export default defineComponent({
    name: 'SpiderChart',
    props: {
      dimensions: {
        type: Array<clsDimensions>,
        required: true,
      },
    },
    setup(props) {
      const radarChartCanvas = ref();
      const canvasWidth = 600;
      const canvasHeight = 600;
      const dimensions0 = [
        { name: '计算机软件', value: 80 },
        { name: '计算机组成', value: 60 },
        { name: '二进制', value: 55 },
        { name: '数字编码', value: 87 },
        { name: '文件夹', value: 45 },
      ];

      const drawRadarChart = () => {
        if (props.dimensions.length == 0) return;
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
          for (let i = 0; i < props.dimensions.length; i++) {
            const angle = ((Math.PI * 2) / props.dimensions.length) * i;
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

          // Draw value text
          ctx.font = '12px Arial';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const textPosition = currentRadius + 5;
          const dbl1: number = (100 / levels) * level;
          ctx.fillText(dbl1.toString(), centerX, centerY - textPosition);
        }

        // Draw dimension names
        ctx.fillStyle = 'black';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 0; i < props.dimensions.length; i++) {
          const angle = ((Math.PI * 2) / props.dimensions.length) * i;
          const x = centerX + (radius + 20) * Math.cos(angle);
          const y = centerY + (radius + 20) * Math.sin(angle);
          ctx.fillText(props.dimensions[i].name, x, y);
        }

        // Draw data
        ctx.beginPath();
        for (let i = 0; i < props.dimensions.length; i++) {
          const angle = ((Math.PI * 2) / props.dimensions.length) * i;
          const value = props.dimensions[i].value;
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

      function drawRadarChart0(dimensions1: Array<clsDimensions>) {
        const canvas = radarChartCanvas.value as HTMLCanvasElement;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const centerX = canvasWidth / 2;
        const centerY = canvasHeight / 2;
        const radius = Math.min(centerX, centerY) * 0.8;

        // Clear canvas
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        if (dimensions1.length == 0) {
          ctx.font = '15px Arial';
          ctx.fillText('没有雷达图的绘图数据！', 100, 40);
          return;
        }
        // Draw grid
        const levels = 5;
        const levelDistance = radius / levels;
        for (let level = 1; level <= levels; level++) {
          const currentRadius = level * levelDistance;
          ctx.beginPath();
          for (let i = 0; i < dimensions1.length; i++) {
            const angle = ((Math.PI * 2) / dimensions1.length) * i;
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

          // Draw value text
          ctx.font = '12px Arial';
          ctx.fillStyle = 'black';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const textPosition = currentRadius + 5;
          const dbl1: number = (100 / levels) * level;
          ctx.fillText(dbl1.toString(), centerX, centerY - textPosition);
        }

        // Draw dimension names
        ctx.fillStyle = 'black';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        for (let i = 0; i < dimensions1.length; i++) {
          const angle = ((Math.PI * 2) / dimensions1.length) * i;
          const x = centerX + (radius + 20) * Math.cos(angle);
          const y = centerY + (radius + 20) * Math.sin(angle);
          ctx.fillText(dimensions1[i].name, x, y);
        }

        // Draw data
        ctx.beginPath();
        for (let i = 0; i < dimensions1.length; i++) {
          const angle = ((Math.PI * 2) / dimensions1.length) * i;
          const value = dimensions1[i].value;
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
      }
      onMounted(() => {
        drawRadarChart();
      });

      return {
        radarChartCanvas,
        drawRadarChart0,
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
