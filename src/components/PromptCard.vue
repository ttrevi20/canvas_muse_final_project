<script setup>
defineProps({
  prompt: Object
})

const emit = defineEmits(['save'])

function savePrompt() {
  emit('save')
}
</script>

<template>
  <div class="mt-12 w-full max-w-4xl rounded-3xl border-2 border-dashed border-purple-200 bg-purple-50 p-10 text-center">
    <div v-if="!prompt" class="text-gray-500">
      <div class="mb-4 text-6xl">✨</div>
      <p class="text-xl">Click the button above to generate your first prompt!</p>
    </div>

    <div v-else class="text-left">
      <h3 class="mb-6 text-3xl font-bold text-gray-800">Your Painting Prompt</h3>

      <p class="mb-3"><strong>🎯 Subject:</strong> {{ prompt.subject }}</p>
      <p class="mb-3"><strong>🌈 Mood:</strong> {{ prompt.mood }}</p>
      <p class="mb-3"><strong>⭐ Difficulty:</strong> {{ prompt.difficulty }}</p>

      <div class="mb-6">
        <strong>🎨 Colors:</strong>
        <div class="mt-3 flex flex-wrap gap-4">
          <div v-for="color in prompt.colors" :key="color.name" class="flex items-center gap-2">
            <span
              class="h-7 w-7 rounded-full border border-gray-300"
              :style="{ backgroundColor: color.hex }"
            ></span>
            <span>{{ color.name }}</span>
          </div>
        </div>
      </div>

      <button
        class="rounded-xl bg-green-500 px-5 py-3 font-semibold text-white shadow hover:bg-green-600"
        @click="savePrompt"
      >
        Save Prompt
      </button>
    </div>
  </div>
</template>