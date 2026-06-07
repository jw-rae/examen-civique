<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isDark = ref(false)
const currentTheme = ref('default')
const showMenu = ref(false)
const menuRef = ref<HTMLElement | null>(null)

const themes = [
  { value: 'default', label: 'Défaut', color: '#6b7280' },
  { value: 'warm', label: 'Warm', color: '#777674' },
  { value: 'cool', label: 'Cool', color: '#71747e' },
  { value: 'pink', label: 'Pink', color: '#937886' },
  { value: 'green', label: 'Green', color: '#7c7e7c' },
  { value: 'blue', label: 'Blue', color: '#757b87' },
]

function toggleDark() {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.setAttribute('data-color-scheme', 'dark')
    html.classList.add('dark')
  } else {
    html.setAttribute('data-color-scheme', 'light')
    html.classList.remove('dark')
  }
}

function selectTheme(value: string) {
  currentTheme.value = value
  const html = document.documentElement
  if (value === 'default') {
    html.removeAttribute('data-theme')
  } else {
    html.setAttribute('data-theme', value)
  }
  showMenu.value = false
}

function handleClickOutside(e: MouseEvent) {
  if (menuRef.value && !menuRef.value.contains(e.target as Node)) {
    showMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  const scheme = document.documentElement.getAttribute('data-color-scheme')
  isDark.value = scheme === 'dark'
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="theme-toggle">
    <button class="icon-btn" @click="toggleDark" :title="isDark ? 'Mode clair' : 'Mode sombre'">
      <svg v-if="!isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
      <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    </button>

    <div class="theme-selector" ref="menuRef">
      <button class="icon-btn" @click="showMenu = !showMenu" title="Thème">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
        </svg>
      </button>
      <div v-if="showMenu" class="theme-menu">
        <button
          v-for="t in themes"
          :key="t.value"
          class="theme-menu-item"
          :class="{ active: currentTheme === t.value }"
          @click="selectTheme(t.value)"
        >
          <span class="theme-dot" :style="{ background: t.color }"></span>
          <span class="theme-label">{{ t.label }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.theme-toggle {
  display: flex;
  gap: 2px;
}

.icon-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  color: var(--color-text-secondary);
  cursor: pointer;
  border-radius: var(--border-radius-md);
  transition: all 150ms;
}

.icon-btn:hover {
  background: var(--color-surface-secondary);
  color: var(--color-text-primary);
}

.theme-selector {
  position: relative;
}

.theme-menu {
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 140px;
  background: var(--color-surface-primary);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 4px;
  z-index: var(--z-index-50, 50);
}

.theme-menu-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  width: 100%;
  padding: 6px 10px;
  border: none;
  background: transparent;
  color: var(--color-text-primary);
  font-size: var(--font-size-sm);
  text-align: left;
  cursor: pointer;
  border-radius: var(--border-radius-md);
  transition: all 150ms;
}

.theme-menu-item:hover {
  background: var(--color-surface-secondary);
}

.theme-menu-item.active {
  background: var(--color-surface-secondary);
  color: var(--color-brand-primary-500);
}

.theme-dot {
  width: 14px;
  height: 14px;
  border-radius: var(--border-radius-full);
  border: 2px solid var(--color-border-primary);
  flex-shrink: 0;
}

.theme-label {
  flex: 1;
}
</style>
