<script setup lang="ts">
defineProps<{
  name: string
  email: string
  id: number
}>()

const randomColor = Math.floor(Math.random() * 16777215).toString(16)
</script>

<template>
  <div class="flex text-sm border-t-[1px] py-[20px]">
    <div class="w-full max-w-[100px] flex justify-end">
      <div
        class="rounded-full w-8 h-8 mr-4 flex justify-center items-center text-lg font-semibold"
        :style="{ backgroundColor: '#' + randomColor }"
      >
        {{ name.substring(0, 1) }}
      </div>
    </div>
    <div class="w-full max-w-[375px] flex items-center">{{ name }}</div>
    <div class="w-full max-w-[800px] flex items-center">{{ email }}</div>
    <div class="w-full max-w-[100px] flex items-center text-sky-500 underline decoration-solid">
      <router-link :to="{ name: 'user', params: { id: id } }"> Detail </router-link>
    </div>
  </div>
</template>
