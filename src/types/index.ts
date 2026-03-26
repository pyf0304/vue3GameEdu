export interface Course {
  id: number
  title: string
  description: string
  icon: string
  xpReward: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  lessons: Lesson[]
  tags: string[]
}

export interface Lesson {
  id: number
  title: string
  content: string
  xpReward: number
  quiz?: Quiz
}

export interface Quiz {
  id: number
  title: string
  questions: Question[]
}

export interface Question {
  id: number
  text: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface Badge {
  id: string
  name: string
  description: string
  icon: string
  condition: string
}

export interface StudentProject {
  id: number
  title: string
  description: string
  author: string
  grade: string
  tags: string[]
  thumbnail: string
  demoUrl?: string
  githubUrl?: string
  likes: number
}

export interface UserState {
  name: string
  xp: number
  level: number
  badges: string[]
  completedLessons: number[]
  completedCourses: number[]
}
