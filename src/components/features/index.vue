<template>
  <div>
    <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl md:py-5">TOKENOMICS</h2>
  </div>
  <div class="flex flex-col justify-center gap-6 sm:flex-row transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
    <div class="grid grid-cols-1 sm:grid-cols-3 text-center items-center mx-auto max-w-7xl px-6 lg:px-8 sm:px-6 sm:py-10 lg:max-w-5xl">
      <!-- Card 1 -->
      <div class="lg:w-full lg:max-w-md lg:flex-shrink-0 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
        <div class="mx-auto max-w-xs px-8">
          <img src="/public/Wild3.png" alt="">
          <p class="mt-6 flex items-baseline justify-center gap-x-2">
            <span class="text-3xl font-bold tracking-tight text-gray-900">Objetive</span>
          </p>
          <p class="mt-6 text-xs leading-5 text-gray-600">
            As an initial project WildCatCoin plans to launch a Play2Earn game with the nostalgia factor based on retro web games to make it fun and nostalgic when playing. WildCatCoin is committed that our contract will be designed to be safe and secure within our royal alliance. The goal of WildCatCoin is to create an alliance with the community of trust and prosperity.
          </p>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="lg:w-full lg:max-w-md lg:flex-shrink-0 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
        <div class="mx-auto max-w-xs px-8">
          <p class="mt-6 flex items-baseline justify-center gap-x-2">
            <span class="text-3xl font-bold tracking-tight text-gray-900">Staking and Reflection</span>
          </p>
          <p class="mt-6 text-xs leading-5 text-gray-600">
            WildCatCoin holders will earn 20% APY for keeping their $WILDCATS tokens on the APP. the alliance offers an airdrop of 1% for each transaction made in the currency, that means that each holder will be able to have this percentage for the simple fact of holding the currency in their wallet
          </p>
          <img src="/public/spaceship.png" alt="">
        </div>
      </div>
      <!-- Card 3 -->
      <div class="lg:w-full lg:max-w-md lg:flex-shrink-0 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-100">
        <div class="mx-auto max-w-xs px-8">
          <img src="/public/wink cat.png" alt="">
          <p class="mt-6 flex items-baseline justify-center gap-x-2">
            <span class="text-3xl font-bold tracking-tight text-gray-900">Gaming and NFTs</span>
          </p>
          <p class="mt-6 text-xs leading-5 text-gray-600">
            Play the WILD CATS ROYALE Play to Earn game to have fun and earn $WILDCATS. Buy and trade pets NFTs in the WildCat Marketplace.
          </p>
        </div>
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