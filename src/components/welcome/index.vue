<template>
  <div class="bg-gradient-to-t from-transparent via-violet-300 to-violet-300">
    <div class="container mx-auto flex justify-between items-center px-4 md:px-8 lg:px-16 py-4">
      <!-- Logo y nombre -->
      <div class="flex items-center space-x-4">
        <img src="/public/WildCatCoin.png" alt="Logo" class="h-12 md:h-16 lg:h-20">
        <span class="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900">WILDCATCOIN</span>
      </div>

      <!-- Menú Sandwich -->
      <div class="lg:hidden">
        <button @click="toggleMenu" class="text-gray-800">
          <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      <!-- Opciones del navbar -->
      <nav :class="menuOpen ? 'block' : 'hidden' " class="hidden lg:flex lg:space-x-4">
        <a href="#" class="text-gray-600 hover:text-gray-800 transition duration-300">Features</a>
        <a href="#" class="text-gray-600 hover:text-gray-800 transition duration-300">How to buy</a>
        <a href="#" class="text-gray-600 hover:text-gray-800 transition duration-300">Roadmap</a>
      </nav>
    </div>
  </div>
  <div class="">
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
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get started</a>
            <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
      <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
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