<script setup lang="ts">
import { computed } from 'vue'
import type { AnswerRecord } from '../data/types'
import { categories } from '../data/questions'

const props = defineProps<{
  answers: AnswerRecord[]
  selectedCategories: string[]
  remainingCount: number
  allMastered: boolean
}>()

const emit = defineEmits<{ restart: []; continue: [] }>()

const total = computed(() => props.answers.length)
const correct = computed(() => props.answers.filter(a => a.correct).length)
const pct = computed(() => total.value ? Math.round((correct.value / total.value) * 100) : 0)

const multiCategory = computed(() => props.selectedCategories.length > 1)

const perCategory = computed(() => {
  return categories
    .filter(cat => props.selectedCategories.includes(cat.categorie))
    .map(cat => {
      const catAnswers = props.answers.filter(a => a.category === cat.categorie)
      const correctCount = catAnswers.filter(a => a.correct).length
      return {
        name: cat.categorie,
        total: catAnswers.length,
        correct: correctCount,
        pct: catAnswers.length ? Math.round((correctCount / catAnswers.length) * 100) : 0,
      }
    })
})
</script>

<template>
  <div class="summary-page">
    <header class="summary-header">
      <h1>Résultats</h1>
      <div v-if="!allMastered" class="remaining-info">
        <span class="remaining-text">{{ remainingCount }} question{{ remainingCount > 1 ? 's' : '' }} restante{{ remainingCount > 1 ? 's' : '' }} à maîtriser</span>
      </div>
      <div class="score-circle" :class="{ pass: pct >= 75, fail: pct < 75 }">
        <span class="score-value">{{ pct }}%</span>
        <span class="score-label">
          {{ correct }}/{{ total }} correctes
        </span>
      </div>
    </header>

    <div v-if="allMastered" class="all-mastered">
      <span class="mastered-icon">✓</span>
      <span class="mastered-text">Toutes les questions maîtrisées</span>
    </div>

    <div v-if="multiCategory && perCategory.some(c => c.total > 0)" class="category-breakdown">
      <h2>Par catégorie</h2>
      <div class="breakdown-list">
        <div v-for="cat in perCategory" :key="cat.name" class="breakdown-item">
          <div class="breakdown-header">
            <span class="breakdown-name">{{ cat.name }}</span>
            <span class="breakdown-score" :class="{ good: cat.pct >= 75, mid: cat.pct >= 50 && cat.pct < 75, low: cat.pct < 50 }">
              {{ cat.correct }}/{{ cat.total }}
            </span>
          </div>
          <div class="breakdown-bar">
            <div class="breakdown-fill" :style="{ width: cat.pct + '%' }" :class="{ good: cat.pct >= 75, mid: cat.pct >= 50 && cat.pct < 75, low: cat.pct < 50 }"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="summary-actions">
      <button
        v-if="!allMastered && remainingCount > 0"
        class="btn-secondary"
        @click="emit('continue')"
      >
        Continuer ({{ remainingCount }})
      </button>
      <button class="btn-primary" @click="emit('restart')">
        {{ allMastered ? 'Nouvelle séance' : 'Recommencer' }}
      </button>
    </div>
  </div>
</template>
