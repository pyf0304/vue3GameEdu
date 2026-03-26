<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCoursesStore } from '../stores/courses'
import { useUserStore } from '../stores/user'

const route = useRoute()
const coursesStore = useCoursesStore()
const userStore = useUserStore()

const courseId = computed(() => Number(route.params.courseId))
const lessonId = computed(() => Number(route.params.lessonId))

const course = computed(() => coursesStore.getCourseById(courseId.value))
const lesson = computed(() => course.value?.lessons.find((l) => l.id === lessonId.value))
const quiz = computed(() => lesson.value?.quiz)

const currentIndex = ref(0)
const selectedOption = ref<number | null>(null)
const showResult = ref(false)
const score = ref(0)
const quizCompleted = ref(false)
const xpEarned = ref(0)

const currentQuestion = computed(() => quiz.value?.questions[currentIndex.value])
const totalQuestions = computed(() => quiz.value?.questions.length ?? 0)

function selectOption(index: number) {
  if (showResult.value) return
  selectedOption.value = index
}

function submitAnswer() {
  if (selectedOption.value === null || !currentQuestion.value) return
  showResult.value = true
  if (selectedOption.value === currentQuestion.value.correctIndex) {
    score.value++
  }
}

function nextQuestion() {
  if (currentIndex.value < totalQuestions.value - 1) {
    currentIndex.value++
    selectedOption.value = null
    showResult.value = false
  } else {
    finishQuiz()
  }
}

function finishQuiz() {
  quizCompleted.value = true
  const earned = Math.floor((score.value / totalQuestions.value) * (lesson.value?.xpReward ?? 20))
  xpEarned.value = earned
  userStore.addXP(earned)
  // Track quiz completions for quiz master badge
  const quizCount = Number(localStorage.getItem('quiz_count') ?? '0') + 1
  localStorage.setItem('quiz_count', String(quizCount))
  userStore.unlockQuizMaster(quizCount)
}

function isCorrect(index: number) {
  return showResult.value && index === currentQuestion.value?.correctIndex
}

function isWrong(index: number) {
  return showResult.value && index === selectedOption.value && index !== currentQuestion.value?.correctIndex
}
</script>

<template>
  <div class="quiz-view">
    <div v-if="!quiz" class="not-found">
      <p>测验未找到</p>
      <RouterLink :to="`/courses/${courseId}`">← 返回课程</RouterLink>
    </div>

    <template v-else>
      <!-- Header -->
      <div class="quiz-header">
        <RouterLink :to="`/courses/${courseId}`" class="back-link">← 返回课程</RouterLink>
        <h1 class="quiz-title">🧠 {{ quiz.title }}</h1>
        <p class="quiz-lesson">课程：{{ lesson?.title }}</p>
      </div>

      <!-- Completed State -->
      <div v-if="quizCompleted" class="quiz-result">
        <div class="result-icon">
          {{ score === totalQuestions ? '🏆' : score >= totalQuestions / 2 ? '🌟' : '💪' }}
        </div>
        <h2 class="result-title">测验完成！</h2>
        <p class="result-score">
          你答对了 <strong>{{ score }}</strong> / {{ totalQuestions }} 题
        </p>
        <div class="xp-earned" v-if="xpEarned > 0">
          <span>⭐ 获得 {{ xpEarned }} XP</span>
        </div>
        <div class="result-actions">
          <RouterLink :to="`/courses/${courseId}`" class="btn-primary">返回课程</RouterLink>
          <RouterLink to="/courses" class="btn-secondary">浏览其他课程</RouterLink>
        </div>
      </div>

      <!-- Quiz Questions -->
      <div v-else class="quiz-body">
        <!-- Progress -->
        <div class="quiz-progress">
          <span class="q-count">第 {{ currentIndex + 1 }} / {{ totalQuestions }} 题</span>
          <div class="q-progress-dots">
            <span
              v-for="(_, i) in quiz.questions"
              :key="i"
              class="q-dot"
              :class="{ active: i === currentIndex, done: i < currentIndex }"
            />
          </div>
        </div>

        <!-- Question -->
        <div class="question-card">
          <p class="question-text">{{ currentQuestion?.text }}</p>

          <div class="options">
            <button
              v-for="(option, i) in currentQuestion?.options"
              :key="i"
              class="option-btn"
              :class="{
                selected: selectedOption === i && !showResult,
                correct: isCorrect(i),
                wrong: isWrong(i),
              }"
              @click="selectOption(i)"
            >
              <span class="option-letter">{{ String.fromCharCode(65 + i) }}</span>
              {{ option }}
            </button>
          </div>

          <!-- Explanation -->
          <div v-if="showResult" class="explanation">
            <div class="explanation-header">
              {{ selectedOption === currentQuestion?.correctIndex ? '✅ 回答正确！' : '❌ 回答错误' }}
            </div>
            <p class="explanation-text">{{ currentQuestion?.explanation }}</p>
          </div>

          <!-- Actions -->
          <div class="question-actions">
            <button
              v-if="!showResult"
              class="btn-submit"
              :disabled="selectedOption === null"
              @click="submitAnswer"
            >
              提交答案
            </button>
            <button v-else class="btn-next" @click="nextQuestion">
              {{ currentIndex < totalQuestions - 1 ? '下一题 →' : '查看结果 🏆' }}
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.quiz-view {
  max-width: 720px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

.not-found {
  text-align: center;
  padding: 4rem;
  color: #64748b;
}

.back-link {
  display: inline-block;
  color: #818cf8;
  text-decoration: none;
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
}

.quiz-header {
  margin-bottom: 2rem;
}

.quiz-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: #e2e8f0;
  margin-bottom: 0.35rem;
}

.quiz-lesson {
  font-size: 0.875rem;
  color: #64748b;
}

/* Result */
.quiz-result {
  text-align: center;
  padding: 3rem 2rem;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
}

.result-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.result-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: #e2e8f0;
  margin-bottom: 0.75rem;
}

.result-score {
  color: #64748b;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.result-score strong {
  color: #818cf8;
  font-size: 1.25rem;
}

.xp-earned {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: rgba(251, 191, 36, 0.15);
  border: 1px solid rgba(251, 191, 36, 0.3);
  border-radius: 20px;
  color: #fbbf24;
  font-weight: 700;
  margin-bottom: 2rem;
}

.result-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-primary {
  padding: 0.65rem 1.5rem;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary:hover {
  transform: translateY(-2px);
}

.btn-secondary {
  padding: 0.65rem 1.5rem;
  background: transparent;
  color: #818cf8;
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;
}

/* Progress */
.quiz-progress {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.q-count {
  font-size: 0.875rem;
  color: #64748b;
}

.q-progress-dots {
  display: flex;
  gap: 0.4rem;
}

.q-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.2);
  transition: all 0.2s;
}

.q-dot.active {
  background: #6366f1;
  transform: scale(1.2);
}

.q-dot.done {
  background: #34d399;
}

/* Question Card */
.question-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 20px;
  padding: 2rem;
}

.question-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #e2e8f0;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.options {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.85rem 1.25rem;
  background: rgba(15, 20, 40, 0.5);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  color: #94a3b8;
  font-size: 0.9rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s;
}

.option-btn:hover:not(:disabled) {
  background: rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.4);
  color: #e2e8f0;
}

.option-btn.selected {
  background: rgba(99, 102, 241, 0.15);
  border-color: rgba(99, 102, 241, 0.5);
  color: #e2e8f0;
}

.option-btn.correct {
  background: rgba(52, 211, 153, 0.15);
  border-color: rgba(52, 211, 153, 0.5);
  color: #34d399;
}

.option-btn.wrong {
  background: rgba(248, 113, 113, 0.12);
  border-color: rgba(248, 113, 113, 0.4);
  color: #f87171;
}

.option-letter {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(99, 102, 241, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
}

/* Explanation */
.explanation {
  padding: 1rem;
  background: rgba(15, 20, 40, 0.5);
  border-radius: 10px;
  border: 1px solid rgba(99, 102, 241, 0.15);
  margin-bottom: 1.5rem;
}

.explanation-header {
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.explanation-text {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.6;
}

/* Actions */
.question-actions {
  display: flex;
  justify-content: flex-end;
}

.btn-submit {
  padding: 0.65rem 1.75rem;
  background: linear-gradient(135deg, #6366f1, #4f46e5);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-submit:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.btn-submit:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.4);
}

.btn-next {
  padding: 0.65rem 1.75rem;
  background: linear-gradient(135deg, #34d399, #059669);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-next:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(52, 211, 153, 0.4);
}
</style>
