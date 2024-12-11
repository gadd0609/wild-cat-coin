<template>
  <div>
    <welcome-component/>
    <hr class="my-12 h-0.5 border-t-0 bg-coin dark:bg-coin" />
    <feature-component/> 
    <hr class="my-12 h-0.5 border-t-0 bg-coin dark:bg-coin" />
    <!-- <tokenomics-component/> 
    <hr class="my-12 h-0.5 border-t-0 bg-coin dark:bg-coin" /> -->
    <!-- <buy-component/> 
    <hr class="my-12 h-0.5 border-t-0 bg-coin dark:bg-coin" /> -->
    <roadmap-component/> 
    <hr class="my-12 h-0.5 border-t-0 bg-coin dark:bg-coin" />
    <footer-component/> 
  </div>
</template>
<script>
  import WelcomeComponent from './components/welcome/index.vue'
  import FeatureComponent from './components/features/index.vue'
  import TokenomicsComponent from './components/tokenomics/index.vue'
  import BuyComponent from './components/buy/index.vue'
  import RoadmapComponent from './components/roadmap/index.vue'
  import FooterComponent from './components/footer/index.vue'

  export default {
    name: 'App',
    components: {
      WelcomeComponent,
      FeatureComponent,
      TokenomicsComponent,
      RoadmapComponent,
      BuyComponent,
      FooterComponent
    },
    mounted() {
    document.documentElement.style.fontFamily = 'MiFuente, sans-serif';
  }
  }
</script>
