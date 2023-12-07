<script setup lang="ts">
import UserList from '@/components/users/UserList.vue'
import Title from '@/components/common/TitleItem.vue'
import SearchInputItem from '@/components/common/SearchInputItem.vue'
import { ref } from 'vue'

const searchText = ref('')
</script>

<template>
  <main>
    <div class="flex justify-center my-10">
      <div class="rounded-2xl border-[1px] border-solid border-gray-300 w-full max-w-2xl py-6">
        <Title text="Users" />
        <SearchInputItem v-model="searchText" />
        <UserList :searchText="searchText" />
      </div>
    </div>
  </main>
</template>
