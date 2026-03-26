import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/CoursesView.vue'),
    },
    {
      path: '/courses/:id',
      name: 'course-detail',
      component: () => import('../views/CourseDetailView.vue'),
    },
    {
      path: '/quiz/:courseId/:lessonId',
      name: 'quiz',
      component: () => import('../views/QuizView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/StudentProjectsView.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
