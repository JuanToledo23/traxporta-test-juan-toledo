<script setup lang="ts">
import UserItem from './UserItem.vue'
import { onMounted, watch } from 'vue'
import { useUserStore } from '@/stores/users'
import { toast } from 'vue3-toastify'

const props = defineProps<{
  searchText: string
}>()

const userStore = useUserStore()

watch(props, (change) => {
  userStore.dispatchFilterUsers(change.searchText)
})

onMounted(async () => {
  const { success } = await userStore.dispatchGetUsers()

  if (!success) {
    toast.error('Something happened when trying to load users!')
  } 
  else {
    toast.success('Users loaded successfully!')
  }
})
</script>

<template>
  <div class="flex text-slate-500 text-sm mb-3">
    <div class="w-full max-w-[100px]"></div>
    <div class="w-full max-w-[375px]">Name</div>
    <div class="w-full max-w-[800px]">E-mail</div>
    <div class="w-full max-w-[100px]">Details</div>
  </div>
  <template v-for="user in userStore.filteredUsers" :key="user.id">
    <UserItem :name="user.name" :email="user.email" :id="user.id" />
  </template>
</template>
