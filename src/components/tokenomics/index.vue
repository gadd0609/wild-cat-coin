<template>
  <div class="py-24 sm:py-10 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
    <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl md:py-5">
        TOKENOMICS
    </h2>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
        <div v-for="stat in stats" :key="stat.id" class="mx-auto flex max-w-xs flex-col gap-y-4">
          <dt class="text-base font-bold leading-7 text-gray-900">{{ stat.title }}</dt>
          <dd class="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ stat.value }}</dd>
          <dt class="text-base leading-7 text-gray-400">{{ stat.subTitles }}</dt>
        </div>
      </dl>
    </div>
  </div>
</template>

<script>
import setup from './hook.js'
export default {
  name: 'TokenomicsComponent',
  setup
}
</script>