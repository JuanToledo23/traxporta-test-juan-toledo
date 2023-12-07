<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useUserStore } from '@/stores/users'
import { GoogleMap, Marker } from 'vue3-google-map'
import { onMounted } from 'vue'

const userStore = useUserStore()
const route = useRoute()
const id = +route.params.id - 1
const randomColor = Math.floor(Math.random() * 16777215).toString(16)
const apiKey = import.meta.env.VITE_MAPS_API_KEY

onMounted(async () => {
  if (userStore.users.length === 0) {
    await userStore.dispatchGetUsers()
  }
})
</script>

<template>
  <div class="bg-white overflow-hidden shadow rounded-lg border">
    <div class="flex items-center pl-10">
      <div
        class="rounded-full w-14 h-14 mr-4 flex justify-center items-center text-3xl font-semibold"
        :style="{ backgroundColor: '#' + randomColor }"
      >
        {{ userStore.users[id]?.name.substring(0, 1) }}
      </div>
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          {{ userStore.users[id]?.name }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          {{ userStore.users[id]?.username }}
        </p>
      </div>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:p-0">
      <dl class="sm:divide-y sm:divide-gray-200">
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Email address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ userStore.users[id]?.email }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Phone number</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ userStore.users[id]?.phone }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Address</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ userStore.users[id]?.address.street }}, {{ userStore.users[id]?.address.suite
            }}<br />
            {{ userStore.users[id]?.address.city }}, {{ userStore.users[id]?.address.zipcode }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Website</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ userStore.users[id]?.website }}
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Company</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ userStore.users[id]?.company.name }} <br />
            <span class="text-gray-600">"{{ userStore.users[id]?.company.catchPhrase }}"</span>
          </dd>
        </div>
        <div class="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-gray-500">
            <span class="text-sm font-medium">Location</span><br />
            <span class="text-xs">
              {{ +userStore.users[id]?.address.geo.lat }},
              {{ +userStore.users[id]?.address.geo.lng }}
            </span>
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <GoogleMap
              :api-key="apiKey"
              style="width: 100%; height: 400px"
              :center="{
                lat: +userStore.users[id]?.address.geo.lat,
                lng: +userStore.users[id]?.address.geo.lng
              }"
              :zoom="3"
            >
              <Marker
                :options="{
                  position: {
                    lat: +userStore.users[id]?.address.geo.lat,
                    lng: +userStore.users[id]?.address.geo.lng
                  }
                }"
              />
            </GoogleMap>
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
