<template>
  <div class="mx-auto max-w-7xl py-24 px-6 lg:px-8 sm:py-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How to buy</h2>
    <ul role="list" class="divide-y divide-gray-100 sm:py-10">
      <li v-for="data in info" :key="data.info" class="flex start gap-x-6 py-10">
        <div class="flex min-w-0 gap-x-4">
          <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="data.imageUrl" />
          <div class="min-w-0 flex-auto">
            <p class="text-xl font-bold leading-6 text-gray-900 flex start">{{ data.title }}</p>
            <p class="text-sm mt-1 truncate leading-5 text-gray-500 flex start">{{ data.info }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import setup from './hook.js'
export default {
  name: 'BuyComponent',
  setup
}
</script>