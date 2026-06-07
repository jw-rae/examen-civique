<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import type { LivretSection } from '../data/livretSections'

const props = defineProps<{ section: LivretSection }>()
const emit = defineEmits<{ close: [] }>()

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="livret-overlay" @click.self="emit('close')">
    <div class="livret-modal">
      <button class="livret-close" @click="emit('close')" aria-label="Fermer">&times;</button>
      <div class="livret-badge">Livret du citoyen</div>
      <h2 class="livret-title">{{ section.title }}</h2>
      <div class="livret-content">{{ section.content }}</div>
    </div>
  </div>
</template>
