<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const savedPrompts = ref([])

function loadSavedPrompts() {
  savedPrompts.value = JSON.parse(localStorage.getItem('canvas-muse-prompts')) || []
}

function deletePrompt(index) {
  savedPrompts.value.splice(index, 1)
  localStorage.setItem('canvas-muse-prompts', JSON.stringify(savedPrompts.value))
}

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
          to="/"
          class="rounded-2xl border border-gray-300 bg-white px-5 py-3 font-medium shadow-sm hover:bg-gray-50"
        >
          Back Home
        </RouterLink>
      </div>
    </header>

    <main class="mx-auto max-w-6xl px-6 py-14">
      <h2 class="mb-10 text-center text-5xl font-bold text-gray-800">Saved Prompts</h2>

      <div
        v-if="savedPrompts.length === 0"
        class="rounded-3xl border-2 border-dashed border-purple-200 bg-purple-50 p-12 text-center text-xl text-gray-500"
      >
        You have not saved any prompts yet.
      </div>

      <div
        v-else
        class="grid gap-6 md:grid-cols-2"
      >
        <div
          v-for="(prompt, index) in savedPrompts"
          :key="index"
          class="rounded-3xl bg-white p-6 shadow-md"
        >
          <h3 class="mb-4 text-2xl font-bold text-gray-800">{{ prompt.subject }}</h3>

          <p class="mb-2"><strong>Mood:</strong> {{ prompt.mood }}</p>
          <p class="mb-3"><strong>⭐ Difficulty:</strong> {{ prompt.difficulty }}</p>
          <p class="mb-3"><strong>🖌️ Style:</strong> {{ prompt.style }}</p>

          <div class="mb-4">
            <strong>Colors:</strong>
            <div class="mt-2 flex flex-wrap gap-3">
              <div
                v-for="color in prompt.colors"
                :key="color.name"
                class="flex items-center gap-2"
              >
                <span
                  class="h-6 w-6 rounded-full border border-gray-300"
                  :style="{ backgroundColor: color.hex }"
                ></span>
                <span>{{ color.name }}</span>
              </div>
            </div>
          </div>

          <button
            class="rounded-xl bg-red-500 px-4 py-2 font-medium text-white hover:bg-red-600"
            @click="deletePrompt(index)"
          >
            Delete
          </button>
        </div>
      </div>
    </main>
  </div>
</template>
