<script setup lang="ts">
import { ref, computed } from 'vue'
import type { AnswerRecord, Question } from './data/types'
import { getQuestionsFromCategories } from './data/questions'
import StartPage from './components/StartPage.vue'
import GamePage from './components/GamePage.vue'
import SummaryPage from './components/SummaryPage.vue'
import ThemeToggle from './components/ThemeToggle.vue'

type Page = 'start' | 'game' | 'summary'
const page = ref<Page>('start')
const selectedCategories = ref<string[]>([])
const lastAnswers = ref<AnswerRecord[]>([])
const correctMap = ref<Record<string, true>>({})
const currentQuestions = ref<Question[]>([])

const remainingCount = computed(() => {
  if (!selectedCategories.value.length) return 0
  const all = getQuestionsFromCategories(selectedCategories.value)
  return all.filter(q => !correctMap.value[`${q.categorie}::${q.id}`]).length
})

const allMastered = computed(() => remainingCount.value === 0)

function onStart(categories: string[]) {
  selectedCategories.value = categories
  lastAnswers.value = []
  currentQuestions.value = getQuestionsFromCategories(categories)
  page.value = 'game'
}

function onFinish(records: AnswerRecord[]) {
  for (const r of records) {
    if (r.correct) {
      correctMap.value[`${r.category}::${r.questionId}`] = true
    }
  }
  lastAnswers.value = records
  page.value = 'summary'
}

function onContinue() {
  const all = getQuestionsFromCategories(selectedCategories.value)
  currentQuestions.value = all.filter(q => !correctMap.value[`${q.categorie}::${q.id}`])
  page.value = 'game'
}

function onRestart() {
  lastAnswers.value = []
  page.value = 'start'
}

function goHome() {
  lastAnswers.value = []
  page.value = 'start'
}
</script>

<template>
  <div class="app">
    <div class="france-bar"></div>
    <div class="top-row">
      <button v-if="page !== 'start'" class="home-btn" @click="goHome">← Accueil</button>
      <ThemeToggle />
    </div>
    <StartPage v-if="page === 'start'" @start="onStart" />
    <GamePage
      v-else-if="page === 'game'"
      :questions="currentQuestions"
      @finish="onFinish"
    />
    <SummaryPage
      v-else-if="page === 'summary'"
      :answers="lastAnswers"
      :selected-categories="selectedCategories"
      :remaining-count="remainingCount"
      :all-mastered="allMastered"
      @restart="onRestart"
      @continue="onContinue"
    />
  </div>
</template>
