<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import PromptCard from '@/components/PromptCard.vue'

const prompts = [
  {
    subject: 'Sunset Landscape',
    mood: 'Calm and Peaceful',
    colors: [
      { name: 'Orange', hex: '#f97316' },
      { name: 'Pink', hex: '#f472b6' },
      { name: 'Lavender', hex: '#a78bfa' }
    ],
    difficulty: 'Beginner',
    style: 'Watercolor'
  },
  {
    subject: 'Fantasy Forest',
    mood: 'Magical and Whimsical',
    colors: [
      { name: 'Moss Green', hex: '#4d7c0f' },
      { name: 'Royal Purple', hex: '#7e22ce' },
      { name: 'Gold', hex: '#facc15' }
    ],
    difficulty: 'Intermediate',
    style: 'Digital Painting'
  },
  {
    subject: 'Ocean Waves',
    mood: 'Powerful and Dramatic',
    colors: [
      { name: 'Deep Blue', hex: '#1d4ed8' },
      { name: 'Teal', hex: '#14b8a6' },
      { name: 'White Foam', hex: '#f8fafc' }
    ],
    difficulty: 'Intermediate',
    style: 'Acrylic'
  },
  {
    subject: 'Portrait of a Dreamer',
    mood: 'Thoughtful and Emotional',
    colors: [
      { name: 'Cream', hex: '#f5f5dc' },
      { name: 'Soft Brown', hex: '#8b5e3c' },
      { name: 'Muted Rose', hex: '#d94675' }
    ],
    difficulty: 'Advanced',
    style: 'Oil Painting'
  },
  {
    subject: 'City at Night',
    mood: 'Energetic and Busy',
    colors: [
      { name: 'Neon Blue', hex: '#3b82f6' },
      { name: 'Electric Purple', hex: '#9333ea' },
      { name: 'Bright Yellow', hex: '#facc15' }
    ],
    difficulty: 'Intermediate',
    style: 'Digital Painting'
  },
  {
    subject: 'Floral Garden',
    mood: 'Joyful and Bright',
    colors: [
      { name: 'Hot Pink', hex: '#ec4899' },
      { name: 'Sunflower Yellow', hex: '#fde047' },
      { name: 'Light Green', hex: '#86efac' }
    ],
    difficulty: 'Beginner',
    style: 'Watercolor'
  },
  {
    subject: 'Galaxy Painting',
    mood: 'Dreamy and Infinite',
    colors: [
      { name: 'Midnight Blue', hex: '#1e1b4b' },
      { name: 'Cosmic Purple', hex: '#7e22ce' },
      { name: 'Star White', hex: '#ffffff' }
    ],
    difficulty: 'Intermediate',
    style: 'Digital Painting'
  },
  {
    subject: 'Rainy Window Scene',
    mood: 'Melancholy and Relaxing',
    colors: [
      { name: 'Gray', hex: '#6b7280' },
      { name: 'Soft Blue', hex: '#60a5fa' },
      { name: 'Silver', hex: '#d1d5db' }
    ],
    difficulty: 'Beginner',
    style: 'Watercolor'
  },
  {
    subject: 'Dragon in the Mountains',
    mood: 'Epic and Powerful',
    colors: [
      { name: 'Dark Red', hex: '#991b1b' },
      { name: 'Charcoal', hex: '#1f2937' },
      { name: 'Burnt Orange', hex: '#ea580c' }
    ],
    difficulty: 'Advanced',
    style: 'Oil Painting'
  },
  {
    subject: 'Cozy Coffee Shop',
    mood: 'Warm and Comfortable',
    colors: [
      { name: 'Coffee Brown', hex: '#7c2d12' },
      { name: 'Cream', hex: '#fef3c7' },
      { name: 'Warm Beige', hex: '#d6bfa7' }
    ],
    difficulty: 'Beginner',
    style: 'Acrylic'
  },
  {
    subject: 'Northern Lights',
    mood: 'Peaceful and Magical',
    colors: [
      { name: 'Emerald Green', hex: '#10b981' },
      { name: 'Sky Blue', hex: '#38bdf8' },
      { name: 'Dark Navy', hex: '#172554' }
    ],
    difficulty: 'Intermediate',
    style: 'Digital Painting'
  },
  {
    subject: 'Ancient Castle',
    mood: 'Mysterious and Historic',
    colors: [
      { name: 'Stone Gray', hex: '#78716c' },
      { name: 'Forest Green', hex: '#166534' },
      { name: 'Fog White', hex: '#f5f5f4' }
    ],
    difficulty: 'Advanced',
    style: 'Oil Painting'
  },
  {
    subject: 'Cute Animal Portrait',
    mood: 'Happy and Playful',
    colors: [
      { name: 'Soft Orange', hex: '#fb923c' },
      { name: 'Light Brown', hex: '#a16207' },
      { name: 'White', hex: '#ffffff' }
    ],
    difficulty: 'Beginner',
    style: 'Colored Pencil'
  },
  {
    subject: 'Abandoned Street',
    mood: 'Lonely and Quiet',
    colors: [
      { name: 'Dust Gray', hex: '#9ca3af' },
      { name: 'Dark Blue', hex: '#1e3a8a' },
      { name: 'Muted Green', hex: '#4b5563' }
    ],
    difficulty: 'Intermediate',
    style: 'Sketch'
  },
  {
    subject: 'Underwater World',
    mood: 'Adventurous and Mysterious',
    colors: [
      { name: 'Turquoise', hex: '#2dd4bf' },
      { name: 'Ocean Blue', hex: '#2563eb' },
      { name: 'Coral Pink', hex: '#fb7185' }
    ],
    difficulty: 'Advanced',
    style: 'Digital Painting'
  }
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

  savedPrompts.value.push(currentPrompt.value)
  localStorage.setItem('canvas-muse-prompts', JSON.stringify(savedPrompts.value))
}

const savedCount = computed(() => savedPrompts.value.length)

onMounted(loadSavedPrompts)
</script>

<template>
  <div class="min-h-screen bg-[#eeebf6]">
    <header class="border-b border-gray-200 bg-white">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        <h1
          class="bg-linear-to-r from-purple-600 to-pink-500 bg-clip-text text-3xl font-bold text-transparent"
        >
          🎨 Canvas Muse
        </h1>

        <RouterLink
          to="/saved"
          class="rounded-2xl border border-gray-300 bg-white px-5 py-3 font-medium shadow-sm hover:bg-gray-50"
        >
          Saved ({{ savedCount }})
        </RouterLink>
      </div>
    </header>

    <main class="mx-auto flex max-w-7xl flex-col items-center px-6 py-16 text-center">
      <h2
        class="max-w-5xl bg-linear-to-r from-indigo-500 via-pink-500 to-orange-500 bg-clip-text text-6xl font-extrabold text-transparent"
      >
        Find Your Next Masterpiece
      </h2>

      <p class="mt-8 max-w-3xl text-xl leading-relaxed text-slate-600">
        Overcome creative block with randomized painting prompts. Perfect for artists who want
        structure and inspiration without the overwhelm.
      </p>

      <button
        class="mt-12 rounded-2xl bg-linear-to-r from-purple-600 via-pink-500 to-fuchsia-600 px-10 py-5 text-xl font-semibold text-white shadow-lg transition hover:scale-105"
        @click="generatePrompt"
      >
        ✨ Generate New Prompt
      </button>

      <PromptCard
        :prompt="currentPrompt"
        @save="savePrompt"
      />
    </main>
  </div>
</template>
