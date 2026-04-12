<script setup>
defineProps({
  prompt: {
    type: Object,
    default: null,
  },
  empty: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['save'])

function handleSave() {
  emit('save')
}
</script>

<template>
  <div
    class="mt-12 flex min-h-70 w-full max-w-5xl items-center justify-center rounded-3xl border-2 border-dashed border-purple-200 bg-[#f7f3fb] p-10"
  >
    <div
      v-if="empty || !prompt"
      class="text-center text-gray-500"
    >
      <div class="mb-4 text-6xl">✨</div>
      <p class="text-2xl">Click the button above to generate your first prompt!</p>
    </div>

    <div
      v-else
      class="w-full max-w-2xl text-left"
    >
      <h3 class="mb-6 text-3xl font-bold text-gray-800">Your Prompt</h3>

      <div class="space-y-4 text-lg text-gray-700">
        <p><span class="font-semibold">🎯 Subject:</span> {{ prompt.subject }}</p>
        <p><span class="font-semibold">🌈 Mood:</span> {{ prompt.mood }}</p>

        <div>
          <p class="mb-2 font-semibold">🎨 Colors:</p>
          <div class="flex flex-wrap gap-3">
            <div
              v-for="(color, index) in prompt.colors"
              :key="index"
              class="flex items-center gap-2"
            >
              <span
                class="h-7 w-7 rounded-full border border-gray-300"
                :style="{ backgroundColor: color.hex }"
              ></span>
              <span>{{ color.name }}</span>
            </div>
          </div>
        </div>

        <p><span class="font-semibold">⭐ Difficulty:</span> {{ prompt.difficulty }}</p>
      </div>

      <button
        @click="handleSave"
        class="mt-8 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white shadow transition hover:bg-green-600"
      >
        Save Prompt
      </button>
    </div>
  </div>
</template>
