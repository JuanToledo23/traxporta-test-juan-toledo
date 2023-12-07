<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <div class="flex justify-center">
    <h1 class="font-bold">{{ text }}</h1>
  </div>
</template>
