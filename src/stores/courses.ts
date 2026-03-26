import { defineStore } from 'pinia'
import type { Course, StudentProject } from '../types'

export const COURSES: Course[] = [
  {
    id: 1,
    title: 'Vue3 基础入门',
    description: '从零开始学习 Vue3，掌握响应式原理、组合式 API 和模板语法。',
    icon: '🟢',
    xpReward: 50,
    difficulty: 'beginner',
    tags: ['Vue3', '响应式', '组合式API'],
    lessons: [
      {
        id: 101,
        title: '什么是 Vue3？',
        content: `Vue3 是一个用于构建用户界面的渐进式 JavaScript 框架。与 Vue2 相比，Vue3 具有更快的速度、更小的包体积，并且引入了 Composition API，使得代码组织更加灵活。

**核心特性：**
- ⚡ 更快的渲染速度（比 Vue2 快 2 倍）
- 📦 更小的打包体积
- 🔧 Composition API（组合式 API）
- 🌳 更好的 TypeScript 支持
- 🎯 Teleport、Fragments 等新特性`,
        xpReward: 20,
        quiz: {
          id: 1001,
          title: 'Vue3 基础测验',
          questions: [
            {
              id: 10001,
              text: 'Vue3 引入了哪个新的 API 来组织组件逻辑？',
              options: ['Options API', 'Composition API', 'Class API', 'Functional API'],
              correctIndex: 1,
              explanation:
                'Vue3 引入了 Composition API（组合式 API），使得逻辑复用和代码组织更加灵活。',
            },
            {
              id: 10002,
              text: '以下哪个不是 Vue3 的核心特性？',
              options: ['更快的渲染速度', '更小的包体积', '内置 Redux', '更好的 TypeScript 支持'],
              correctIndex: 2,
              explanation: 'Vue3 没有内置 Redux，Redux 是 React 的状态管理库。Vue 使用 Pinia 或 Vuex。',
            },
          ],
        },
      },
      {
        id: 102,
        title: '响应式基础：ref 与 reactive',
        content: `Vue3 中有两种创建响应式数据的方式：\`ref\` 和 \`reactive\`。

**ref** 用于基本类型：
\`\`\`typescript
import { ref } from 'vue'
const count = ref(0)
count.value++ // 通过 .value 访问
\`\`\`

**reactive** 用于对象：
\`\`\`typescript
import { reactive } from 'vue'
const state = reactive({ count: 0, name: '学生' })
state.count++ // 直接访问属性
\`\`\`

**选择建议：**
- 基本类型（number、string、boolean）→ 用 \`ref\`
- 对象和数组 → 可以用 \`reactive\` 或 \`ref\``,
        xpReward: 25,
        quiz: {
          id: 1002,
          title: 'ref 与 reactive 测验',
          questions: [
            {
              id: 10003,
              text: '在 setup 函数中，如何访问 ref 创建的响应式变量的值？',
              options: ['直接访问', '通过 .value 属性', '通过 .get() 方法', '通过 getValue()'],
              correctIndex: 1,
              explanation: 'ref 创建的响应式变量需要通过 .value 属性访问其值，但在模板中会自动解包。',
            },
            {
              id: 10004,
              text: 'reactive() 适合用于哪种类型的数据？',
              options: ['数字和字符串', '布尔值', '对象和数组', '函数'],
              correctIndex: 2,
              explanation: 'reactive() 适合用于对象和数组类型的数据，可以深度追踪其内部属性的变化。',
            },
          ],
        },
      },
      {
        id: 103,
        title: '模板语法与指令',
        content: `Vue3 提供了丰富的模板语法和指令，用于声明式渲染 UI。

**插值语法：**
\`\`\`html
<p>{{ message }}</p>
<p>{{ count * 2 }}</p>
\`\`\`

**常用指令：**
| 指令 | 作用 |
|------|------|
| \`v-bind\` / \`:attr\` | 绑定属性 |
| \`v-on\` / \`@event\` | 绑定事件 |
| \`v-if\` / \`v-else\` | 条件渲染 |
| \`v-for\` | 列表渲染 |
| \`v-model\` | 双向绑定 |

**示例：**
\`\`\`html
<button @click="count++" :class="{ active: isActive }">
  点击次数：{{ count }}
</button>
<ul>
  <li v-for="item in list" :key="item.id">{{ item.name }}</li>
</ul>
\`\`\``,
        xpReward: 20,
        quiz: {
          id: 1003,
          title: '模板语法测验',
          questions: [
            {
              id: 10005,
              text: '以下哪个指令用于条件性地显示/隐藏元素？',
              options: ['v-show 和 v-if', 'v-bind', 'v-model', 'v-for'],
              correctIndex: 0,
              explanation:
                'v-show 和 v-if 都用于条件性显示元素。v-if 是真正的条件渲染（从 DOM 移除），v-show 只是切换 CSS display 属性。',
            },
          ],
        },
      },
    ],
  },
  {
    id: 2,
    title: 'TypeScript 与 Vue3',
    description: '学习如何在 Vue3 项目中使用 TypeScript 进行类型安全的开发。',
    icon: '🔵',
    xpReward: 80,
    difficulty: 'intermediate',
    tags: ['TypeScript', '类型安全', '接口'],
    lessons: [
      {
        id: 201,
        title: 'TypeScript 基础类型',
        content: `TypeScript 是 JavaScript 的超集，添加了静态类型检查。

**基础类型：**
\`\`\`typescript
let name: string = '学生'
let age: number = 18
let isStudent: boolean = true
let scores: number[] = [90, 85, 92]
\`\`\`

**接口（Interface）：**
\`\`\`typescript
interface Student {
  id: number
  name: string
  grade: string
  score?: number // 可选属性
}

const student: Student = {
  id: 1,
  name: '张三',
  grade: '高三',
}
\`\`\`

**类型别名（Type）：**
\`\`\`typescript
type Difficulty = 'beginner' | 'intermediate' | 'advanced'
type Point = { x: number; y: number }
\`\`\``,
        xpReward: 30,
        quiz: {
          id: 2001,
          title: 'TypeScript 类型测验',
          questions: [
            {
              id: 20001,
              text: '在 TypeScript 中，如何声明一个字符串数组？',
              options: ['string[]', 'Array<string>', '以上两种都对', 'str[]'],
              correctIndex: 2,
              explanation:
                'TypeScript 中可以用 string[] 或 Array<string> 两种方式声明字符串数组，两者等价。',
            },
            {
              id: 20002,
              text: '接口中用 ? 标记的属性表示什么？',
              options: ['必填属性', '可选属性', '只读属性', '私有属性'],
              correctIndex: 1,
              explanation: '在 TypeScript 接口中，属性名后加 ? 表示该属性是可选的，可以不传。',
            },
          ],
        },
      },
      {
        id: 202,
        title: '在 Vue3 中使用 TypeScript',
        content: `Vue3 对 TypeScript 有原生支持，让我们来学习如何结合使用。

**defineProps 类型定义：**
\`\`\`typescript
// 方法一：运行时声明
const props = defineProps({
  title: String,
  count: { type: Number, required: true }
})

// 方法二（推荐）：基于类型的声明
interface Props {
  title: string
  count: number
}
const props = defineProps<Props>()
\`\`\`

**ref 的类型：**
\`\`\`typescript
import { ref } from 'vue'
const count = ref<number>(0)
const user = ref<{ name: string; age: number } | null>(null)
\`\`\`

**computed 的类型：**
\`\`\`typescript
import { computed } from 'vue'
const double = computed<number>(() => count.value * 2)
\`\`\``,
        xpReward: 35,
        quiz: {
          id: 2002,
          title: 'Vue3 + TypeScript 测验',
          questions: [
            {
              id: 20003,
              text: '在 Vue3 组件中定义 props 的 TypeScript 类型，推荐使用哪种方式？',
              options: [
                '运行时声明（defineProps({ title: String })）',
                '基于类型的声明（defineProps<Props>()）',
                '两种方式都不推荐',
                '直接在 template 中声明',
              ],
              correctIndex: 1,
              explanation:
                '推荐使用基于类型的声明（defineProps<Props>()），这样可以充分利用 TypeScript 的类型推断和检查能力。',
            },
          ],
        },
      },
    ],
  },
  {
    id: 3,
    title: 'Vite 构建工具实战',
    description: '掌握 Vite 的核心功能，打造高效的前端开发工作流。',
    icon: '⚡',
    xpReward: 60,
    difficulty: 'intermediate',
    tags: ['Vite', '构建工具', '热更新'],
    lessons: [
      {
        id: 301,
        title: 'Vite 核心概念',
        content: `Vite 是新一代的前端构建工具，利用浏览器原生 ES 模块实现极速开发体验。

**为什么选择 Vite？**
- 🚀 **极速冷启动**：无需打包，按需加载
- ⚡ **即时热更新（HMR）**：毫秒级响应
- 📦 **生产构建优化**：基于 Rollup 的优化构建

**项目结构：**
\`\`\`
my-project/
  ├── public/          # 静态资源
  ├── src/
  │   ├── assets/      # 处理的静态资源
  │   ├── components/  # Vue 组件
  │   ├── views/       # 页面视图
  │   └── main.ts      # 入口文件
  ├── index.html       # HTML 入口
  ├── vite.config.ts   # Vite 配置
  └── package.json
\`\`\`

**vite.config.ts 配置：**
\`\`\`typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@': '/src' }
  }
})
\`\`\``,
        xpReward: 25,
        quiz: {
          id: 3001,
          title: 'Vite 核心测验',
          questions: [
            {
              id: 30001,
              text: 'Vite 在开发模式下的核心优势是什么？',
              options: [
                '使用 Webpack 打包',
                '利用浏览器原生 ES 模块，无需打包',
                '自动压缩代码',
                '内置 CSS 预处理器',
              ],
              correctIndex: 1,
              explanation:
                'Vite 在开发模式下利用浏览器原生 ES 模块实现按需加载，无需预先打包，因此启动速度极快。',
            },
          ],
        },
      },
    ],
  },
  {
    id: 4,
    title: '游戏化 UI 设计',
    description: '学习如何设计有趣、吸引人的游戏化教学界面，包括进度条、徽章和积分系统。',
    icon: '🎮',
    xpReward: 100,
    difficulty: 'advanced',
    tags: ['UI设计', '游戏化', '用户体验'],
    lessons: [
      {
        id: 401,
        title: '游戏化设计原则',
        content: `游戏化（Gamification）是将游戏元素应用到非游戏场景中，提升用户参与度和学习动力。

**核心游戏化元素：**

🏆 **积分（Points）**
- XP（经验值）：衡量学习进度
- 即时反馈：完成任务立即获得奖励

📊 **排行榜（Leaderboards）**
- 激励竞争
- 社交比较

🏅 **徽章（Badges）**
- 成就系统
- 收集欲望
- 身份标识

📈 **进度条（Progress Bars）**
- 可视化目标完成度
- 接近完成时的心理激励效应

🎯 **任务与挑战（Quests & Challenges）**
- 明确目标
- 分步骤完成
- 阶段性奖励

**心流体验（Flow）：**
难度应随技能提升而增加，保持挑战性与成就感的平衡。`,
        xpReward: 40,
        quiz: {
          id: 4001,
          title: '游戏化设计测验',
          questions: [
            {
              id: 40001,
              text: '以下哪个不是常见的游戏化元素？',
              options: ['积分系统', '徽章成就', '数据库设计', '排行榜'],
              correctIndex: 2,
              explanation: '数据库设计是后端技术，不是游戏化设计的核心元素。游戏化元素包括积分、徽章、排行榜等。',
            },
            {
              id: 40002,
              text: '心流体验（Flow）在游戏化设计中指的是什么？',
              options: [
                '流畅的动画效果',
                '挑战难度与用户技能相匹配的状态',
                '流媒体视频播放',
                '数据流处理',
              ],
              correctIndex: 1,
              explanation:
                '心流（Flow）是指当任务难度与用户技能相匹配时，用户进入的高度专注和愉悦状态。游戏化设计应保持适当挑战性。',
            },
          ],
        },
      },
    ],
  },
]

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: 1,
    title: '数学冒险游戏',
    description:
      '一个以 RPG 风格设计的数学学习游戏，玩家通过解答数学题击败怪物。支持加减乘除四则运算，适合小学生使用。',
    author: '张明辉',
    grade: '高三 · 计算机班',
    tags: ['游戏化', 'Vue3', '数学', 'RPG'],
    thumbnail: '🐉',
    likes: 42,
    githubUrl: '#',
  },
  {
    id: 2,
    title: '英语单词记忆卡',
    description:
      '采用间隔重复算法（Spaced Repetition）的英语单词学习应用。使用翻卡动画和进度追踪，让背单词变得有趣。',
    author: '李晓雪',
    grade: '高二 · 理科班',
    tags: ['英语学习', '记忆算法', '动画'],
    thumbnail: '📚',
    likes: 38,
    demoUrl: '#',
  },
  {
    id: 3,
    title: '编程概念可视化工具',
    description:
      '将抽象的编程概念（如排序算法、数据结构）通过动画可视化展示，帮助同学直观理解算法原理。',
    author: '王志远',
    grade: '高三 · 竞赛班',
    tags: ['算法可视化', 'TypeScript', '动画'],
    thumbnail: '🔄',
    likes: 65,
    githubUrl: '#',
    demoUrl: '#',
  },
  {
    id: 4,
    title: '历史时间轴探索',
    description:
      '交互式中国历史时间轴，点击历史事件可以查看详细介绍、图片和相关人物。支持朝代筛选和搜索功能。',
    author: '陈思颖',
    grade: '高一 · 文科班',
    tags: ['历史', '交互设计', 'Vue3'],
    thumbnail: '🏛️',
    likes: 29,
  },
  {
    id: 5,
    title: '化学元素周期表游戏',
    description:
      '将元素周期表做成记忆游戏，通过连连看、填空题等方式帮助记忆元素符号和性质。包含3D旋转分子模型展示。',
    author: '刘宇航',
    grade: '高二 · 理科班',
    tags: ['化学', '3D展示', '游戏化'],
    thumbnail: '⚗️',
    likes: 51,
    demoUrl: '#',
  },
  {
    id: 6,
    title: '地理答题竞赛平台',
    description:
      '多人实时地理知识竞赛平台，支持班级间对战。包含世界地图、气候、地形等知识模块，排行榜实时更新。',
    author: '赵雨桐',
    grade: '高三 · 文科班',
    tags: ['地理', '多人竞赛', '实时', 'WebSocket'],
    thumbnail: '🌍',
    likes: 73,
    githubUrl: '#',
  },
]

export const useCoursesStore = defineStore('courses', () => {
  const courses = COURSES
  const studentProjects = STUDENT_PROJECTS

  function getCourseById(id: number): Course | undefined {
    return courses.find((c) => c.id === id)
  }

  return {
    courses,
    studentProjects,
    getCourseById,
  }
})
