<script setup lang="ts">
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <div class="flex justify-center my-4">
    <input
      type="text"
      class="rounded-3xl border-[1px] border-solid border-gray-300 text-slate-500 w-full max-w-xs px-4 py-2 text-sm"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
