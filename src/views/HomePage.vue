<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import PromptCard from '../components/PromptCard.vue'

const prompts = [
  {
    subject: 'Sunset Landscape',
    mood: 'Calm and Peaceful',
    colors: [
      { name: 'Warm Orange', hex: '#f97316' },
      { name: 'Soft Pink', hex: '#f472b6' },
      { name: 'Lavender', hex: '#a78bfa' },
    ],
    difficulty: 'Beginner',
  },
  {
    subject: 'Fantasy Forest',
    mood: 'Magical and Whimsical',
    colors: [
      { name: 'Moss Green', hex: '#4d7c0f' },
      { name: 'Royal Purple', hex: '#7e22ce' },
      { name: 'Gold', hex: '#facc15' },
    ],
    difficulty: 'Intermediate',
  },
  {
    subject: 'Ocean Waves',
    mood: 'Powerful and Dramatic',
    colors: [
      { name: 'Deep Blue', hex: '#1d4ed8' },
      { name: 'Teal', hex: '#14b8a6' },
      { name: 'White Foam', hex: '#f8fafc' },
    ],
    difficulty: 'Intermediate',
  },
  {
    subject: 'Portrait of a Dreamer',
    mood: 'Thoughtful and Emotional',
    colors: [
      { name: 'Cream', hex: '#f5f5dc' },
      { name: 'Soft Brown', hex: '#8b5e3c' },
      { name: 'Muted Rose', hex: '#d94675' },
    ],
    difficulty: 'Advanced',
  },
  {
    subject: 'City at Night',
    mood: 'Energetic and Busy',
    colors: [
      { name: 'Neon Blue', hex: '#3b82f6' },
      { name: 'Electric Purple', hex: '#9333ea' },
      { name: 'Bright Yellow', hex: '#facc15' },
    ],
    difficulty: 'Intermediate',
  },
  {
    subject: 'Floral Garden',
    mood: 'Joyful and Bright',
    colors: [
      { name: 'Pink', hex: '#ec4899' },
      { name: 'Yellow', hex: '#fde047' },
      { name: 'Light Green', hex: '#86efac' },
    ],
    difficulty: 'Beginner',
  },
]

const currentPrompt = ref(null)
const savedPrompts = ref([])

function loadSavedPrompts() {
  savedPrompts.value = JSON.parse(localStorage.getItem('canvas-muse-prompts')) || []
}

function generatePrompt() {
  const randomIndex = Math.floor(Math.random() * prompts.length)
  currentPrompt.value = prompts[randomIndex]
}

function savePrompt() {
  if (!currentPrompt.value) return

  const alreadySaved = savedPrompts.value.some((item) => {
    return (
      item.subject === currentPrompt.value.subject &&
      item.mood === currentPrompt.value.mood &&
      item.difficulty === currentPrompt.value.difficulty
    )
  })

  if (!alreadySaved) {
    savedPrompts.value.push(currentPrompt.value)
    localStorage.setItem('canvas-muse-prompts', JSON.stringify(savedPrompts.value))
  }
}

const savedCount = computed(() => savedPrompts.value.length)

onMounted(() => {
  loadSavedPrompts()
})
</script>

<template>
  <div class="min-h-screen bg-[#eeebf6]">
    <header class="border-b border-gray-200 bg-[#f4f4f4]">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <div class="flex items-center gap-3">
          <span class="text-4xl">🎨</span>
          <h1
            class="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
          >
            Canvas Muse
          </h1>
        </div>

        <RouterLink
          to="/saved"
          class="rounded-2xl border border-gray-300 bg-white px-6 py-3 text-xl font-medium text-gray-800 shadow-sm transition hover:bg-gray-50"
        >
          Saved ({{ savedCount }})
        </RouterLink>
      </div>
    </header>

    <main class="mx-auto max-w-7xl px-6 py-16 text-center">
      <h2
        class="mx-auto max-w-5xl bg-linear-to-r from-indigo-500 via-pink-500 to-orange-500 bg-clip-text text-6xl leading-tight font-extrabold text-transparent"
      >
        Find Your Next Masterpiece
      </h2>

      <p class="mx-auto mt-8 max-w-4xl text-2xl leading-relaxed text-slate-600">
        Overcome creative block with randomized painting prompts. Perfect for artists who want
        structure and inspiration without the overwhelm.
      </p>

      <button
        @click="generatePrompt"
        class="mt-14 rounded-2xl bg-linear-to-r from-purple-600 via-pink-500 to-fuchsia-600 px-10 py-5 text-2xl font-semibold text-white shadow-lg transition hover:scale-105"
      >
        ✨ Generate New Prompt
      </button>

      <PromptCard
        :prompt="currentPrompt"
        :empty="!currentPrompt"
        @save="savePrompt"
      />
    </main>
  </div>
</template>
