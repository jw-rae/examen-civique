<script setup lang="ts">
import { ref, computed, watch, onUnmounted, nextTick } from 'vue'
import type { Question, AnswerRecord } from '../data/types'
import { shuffleArray } from '../data/questions'
import { livretSections } from '../data/livretSections'
import type { LivretSection } from '../data/livretSections'
import LivretPopup from './LivretPopup.vue'

const props = defineProps<{ questions: Question[] }>()
const emit = defineEmits<{ finish: [answers: AnswerRecord[]] }>()

const questionList = ref<Question[]>([])
const index = ref(0)
const selected = ref<string | null>(null)
const confirmed = ref(false)
const answers = ref<AnswerRecord[]>([])
const speedMode = ref(false)
const timeLeft = ref(15)
const TIMER_DURATION = 15
const CIRCUMFERENCE = 2 * Math.PI * 20
let timerHandle: ReturnType<typeof setInterval> | null = null

watch(
  () => props.questions,
  (qs) => {
    questionList.value = shuffleArray([...qs])
    index.value = 0
    selected.value = null
    confirmed.value = false
    answers.value = []
    stopTimer()
    timeLeft.value = TIMER_DURATION
  },
  { immediate: true },
)

const current = computed(() => questionList.value[index.value])
const total = computed(() => questionList.value.length)
const isLast = computed(() => index.value === total.value - 1)
const timeout = computed(() => confirmed.value && timeLeft.value === 0)

const choices = computed(() => {
  if (!current.value) return []
  const correct = current.value.bonne_reponse
  return shuffleArray([
    { text: correct, correct: true },
    ...current.value.mauvais_choix.map(c => ({ text: c, correct: false })),
  ])
})

function select(answer: string) {
  if (confirmed.value) return
  selected.value = answer
}

function confirm() {
  if (!selected.value || !current.value || confirmed.value) return
  confirmed.value = true
  stopTimer()
}

function stopTimer() {
  if (timerHandle) { clearInterval(timerHandle); timerHandle = null }
}

function startTimer() {
  timeLeft.value = TIMER_DURATION
  stopTimer()
  timerHandle = setInterval(() => {
    timeLeft.value = Math.round((timeLeft.value - 0.1) * 10) / 10
    if (timeLeft.value <= 0) {
      timeLeft.value = 0
      handleTimeout()
    }
  }, 100)
}

function recordCurrent(): AnswerRecord | null {
  if (!current.value) return null
  return {
    questionId: current.value.id,
    category: current.value.categorie ?? '',
    selected: selected.value ?? '',
    correct: selected.value === current.value.bonne_reponse,
  }
}

function advance() {
  const rec = recordCurrent()
  if (rec) answers.value.push(rec)
  confirmed.value = false
  selected.value = null
  if (isLast.value) {
    emit('finish', answers.value)
  } else {
    index.value++
    nextTick(() => { if (speedMode.value) startTimer() })
  }
}

function handleTimeout() {
  stopTimer()
  if (confirmed.value) return
  confirmed.value = true
}

function nextQuestion() {
  stopTimer()
  advance()
}

function toggleSpeed() {
  speedMode.value = !speedMode.value
  if (speedMode.value && !confirmed.value) startTimer()
  else stopTimer()
}

watch(index, () => {
  if (speedMode.value && !confirmed.value) startTimer()
})

const popupSection = ref<LivretSection | null>(null)

function getLivretSection(): LivretSection | null {
  if (!current.value?.topics?.length) return null
  const firstTopic = current.value.topics[0]
  return livretSections.find(s => s.id === firstTopic) ?? null
}

function openLivret() {
  popupSection.value = getLivretSection()
}

onUnmounted(() => stopTimer())
</script>

<template>
  <div class="game-page" v-if="current">
    <header class="game-header">
      <div class="game-meta">
        <span class="question-num">{{ index + 1 }} / {{ total }}</span>
        <div class="meta-right">
          <span class="progress-pct">{{ Math.round(((index + 1) / total) * 100) }}%</span>
          <button
            class="timer-btn"
            :class="{ active: speedMode, urgent: speedMode && timeLeft <= 5 }"
            @click="toggleSpeed"
            :title="speedMode ? 'Désactiver le mode rapide' : 'Activer le mode rapide (15s)'"
          >
          <svg viewBox="0 0 48 48" width="32" height="32">
            <circle
              cx="24" cy="24" r="20"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              :opacity="speedMode ? 0.15 : 1"
            />
            <circle
              v-if="speedMode"
              cx="24" cy="24" r="20"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
              stroke-linecap="round"
              :stroke-dasharray="CIRCUMFERENCE"
              :stroke-dashoffset="CIRCUMFERENCE * (timeLeft / TIMER_DURATION)"
              transform="rotate(-90 24 24)"
            />
            <text
              v-if="speedMode"
              x="24" y="29" text-anchor="middle" font-size="18" font-weight="700" fill="currentColor"
            >
              {{ Math.ceil(timeLeft) }}
            </text>
            <text
              v-else
              x="24" y="29" text-anchor="middle" font-size="18" font-weight="400" fill="currentColor"
            >
              ∞
            </text>
          </svg>
          </button>
        </div>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: ((index + 1) / total) * 100 + '%' }"></div>
      </div>
    </header>

    <div class="question-card">
      <p class="question-text">{{ current.question }}</p>

      <div class="choices">
        <button
          v-for="(choice, i) in choices"
          :key="i"
          class="choice"
          :class="{
            selected: selected === choice.text,
            confirmed,
            correct: confirmed && choice.correct,
            incorrect: confirmed && selected === choice.text && !choice.correct,
            dimmed: confirmed && selected !== choice.text && !choice.correct,
          }"
          @click="select(choice.text)"
          :disabled="confirmed"
        >
          {{ choice.text }}
        </button>
      </div>

      <div v-if="confirmed" class="explanation">
        <div v-if="selected" class="explanation-header" :class="selected === current.bonne_reponse ? 'correct' : 'incorrect'">
          {{ selected === current.bonne_reponse ? 'Correct' : 'Incorrect' }}
        </div>
        <div v-else class="explanation-header timeout">Temps écoulé</div>
        <p v-if="selected">{{ current.description_bonne_reponse }}</p>
        <p v-else>La bonne réponse était : <strong>{{ current.bonne_reponse }}</strong></p>
        <button
          v-if="current.topics?.length"
          class="livret-btn"
          @click="openLivret"
        >
          En savoir plus dans le livret
        </button>
      </div>
      <LivretPopup
        v-if="popupSection"
        :section="popupSection"
        @close="popupSection = null"
      />
    </div>

    <div class="game-actions">
      <button v-if="!confirmed && selected" class="btn-primary" @click="confirm">Confirmer</button>
      <button v-if="confirmed" class="btn-primary" @click="nextQuestion">
        {{ isLast ? 'Voir les résultats' : 'Question suivante' }}
      </button>
    </div>
  </div>
</template>
