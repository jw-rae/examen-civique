<script setup lang="ts">
import { ref } from 'vue'
import { categories } from '../data/questions'

const emit = defineEmits<{ start: [categories: string[]] }>()

const selected = ref<string[]>([])
const selectAll = ref(false)

function toggleAll() {
  selectAll.value = !selectAll.value
  selected.value = selectAll.value ? categories.map(c => c.categorie) : []
}

function toggle(cat: string) {
  const i = selected.value.indexOf(cat)
  if (i === -1) selected.value.push(cat)
  else selected.value.splice(i, 1)
  selectAll.value = selected.value.length === categories.length
}

const count = (): number => {
  if (selected.value.length === 0) return categories.reduce((s, c) => s + c.questions.length, 0)
  return categories
    .filter(c => selected.value.includes(c.categorie))
    .reduce((s, c) => s + c.questions.length, 0)
}

function start() {
  const cats = selected.value.length ? selected.value : categories.map(c => c.categorie)
  emit('start', cats)
}
</script>

<template>
  <div class="start-page">
    <header class="start-header">
      <h1>Entretien d'Assimilation</h1>
      <p>Sélectionnez les catégories à réviser</p>
    </header>

    <div class="category-list">
      <label class="category-card all-card">
        <input type="checkbox" :checked="selectAll" @change="toggleAll" />
        <div class="card-body">
          <span class="card-title">Toutes les catégories</span>
          <span class="card-count">{{ categories.reduce((s, c) => s + c.questions.length, 0) }} questions</span>
        </div>
      </label>

      <label
        v-for="cat in categories"
        :key="cat.categorie"
        class="category-card"
        :class="{ checked: selected.includes(cat.categorie) }"
      >
        <input
          type="checkbox"
          :checked="selected.includes(cat.categorie)"
          @change="toggle(cat.categorie)"
        />
        <div class="card-body">
          <span class="card-title">{{ cat.categorie }}</span>
          <span class="card-count">{{ cat.questions.length }} questions</span>
        </div>
      </label>
    </div>

    <div class="start-footer">
      <span class="question-count">{{ count() }} questions</span>
      <button class="start-btn" @click="start">
        Commencer le quiz
      </button>
    </div>
  </div>
</template>
