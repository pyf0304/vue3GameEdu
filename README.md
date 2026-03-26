# vue3GameEdu

Vue3 + Vite + TypeScript 游戏化教学平台

![GameEdu 截图](https://github.com/user-attachments/assets/ca79182b-472c-4898-baaf-60001623bf68)

## 项目简介

**GameEdu** 是一个基于 Vue3、Vite 和 TypeScript 构建的**游戏化教学平台**。通过将游戏元素（XP 经验值、等级、徽章成就、互动测验）融入学习流程，让学习变得更有趣、更有动力。

平台同时包含**学生创意项目展示区**，同学们可以在这里分享自己用所学技术设计的教学应用——每一个都是令人印象深刻的想法！

## 功能特性

### 🎮 游戏化机制
- **XP 经验值**：完成课节和测验可获得 XP
- **等级系统**：每 100 XP 升一级，导航栏实时显示等级和进度
- **徽章成就**：6 种成就徽章（初学者、问答达人、冒险者等）
- **进度追踪**：每门课程的完成进度可视化展示
- **持久化存储**：学习进度通过 `localStorage` 保存

### 📚 课程系统
- 4 门课程，涵盖 Vue3 基础、TypeScript、Vite 构建工具、游戏化 UI 设计
- 课程难度分级：初级 / 中级 / 高级
- 支持按名称、描述、标签搜索和按难度筛选
- 每节课包含详细内容说明和互动测验

### 🧠 互动测验
- 多选题，答题后立即显示正误和知识点解析
- 根据答题得分按比例发放 XP
- 测验进度可视化

### 🎨 学生项目展示
- 6 个学生设计的创意教学项目（数学 RPG、英语单词卡、算法可视化等）
- 支持按标签和关键词筛选
- 点赞功能

### 👤 个人档案
- 查看 XP、等级、已获徽章、已完成课程
- 可编辑昵称

## 技术栈

| 技术 | 版本 | 用途 |
|------|------|------|
| Vue3 | ^3.5 | 核心框架，Composition API |
| Vite | ^8.0 | 构建工具 |
| TypeScript | ~5.9 | 类型安全 |
| Vue Router | ^4 | 客户端路由（Hash 模式）|
| Pinia | ^3 | 全局状态管理 |

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 类型检查 + 生产构建
npm run build

# 预览生产构建
npm run preview
```

## 项目结构

```
src/
├── components/
│   ├── layout/
│   │   ├── NavBar.vue        # 导航栏（含 XP/等级显示）
│   │   └── FooterBar.vue     # 页脚
│   ├── BadgeItem.vue         # 徽章组件
│   ├── CourseCard.vue        # 课程卡片
│   ├── ProgressBar.vue       # 进度条
│   └── ProjectCard.vue       # 学生项目卡片
├── router/
│   └── index.ts              # 路由配置
├── stores/
│   ├── courses.ts            # 课程与项目数据
│   └── user.ts               # 用户状态（XP、徽章等）
├── types/
│   └── index.ts              # TypeScript 类型定义
├── views/
│   ├── HomeView.vue          # 首页
│   ├── CoursesView.vue       # 课程列表
│   ├── CourseDetailView.vue  # 课程详情
│   ├── QuizView.vue          # 互动测验
│   ├── StudentProjectsView.vue # 学生项目展示
│   └── ProfileView.vue       # 个人档案
├── App.vue
├── main.ts
└── style.css
```
