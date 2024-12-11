<template>
  <div class="top-0 z-50">
    <div class="container mx-auto flex justify-center md:px-4 lg:px-16 py-4">
      <div class="flex items-center space-x-4 flex-shrink-0">
        <img src="/public/WildCatCoinLogo.png" alt="Logo" class="h-12 md:h-16 lg:h-20">
        <span class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">WILDCATCOIN</span>
      </div>
  </div>
</div>
  <div>
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2" />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        </div>
        <div class="text-center">
          <p class="mt-6 text-xl leading-8 text-gray-600">Welcome to</p>
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">WILDCATCOIN</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">Be part of the wild cats alliance.</p>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div 
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#a5d6e2] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>
</template>

<script>
import setup from './hook'

export default {
    name: "welcomeComponent",
    setup
}
</script>