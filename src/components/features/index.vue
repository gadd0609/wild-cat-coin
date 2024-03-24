<template>
  <div class="">
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Features</h2>
        <dl class="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
      <div class=" grid-cols-1 grid-rows-3 gap-4 sm:gap-6 sm:gap-8">
        <img src="/public/RocketCat.png" alt="" class="rounded-lg" height="" />
      </div>
    </div>
  </div>
</template>

<script>
import setup from './hook.js'
export default {
  name: 'FeatureComponent',
  setup
}

</script>