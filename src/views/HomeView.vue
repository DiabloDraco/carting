<script>
import Header from '../layout/header.vue'
import MainHero from '../components/mainHero.vue'
import MainFilter from '../components/mainFilter.vue'
import MainAdvantages from '../components/mainAdvantages.vue'
import MainNumbers from '../components/mainNumbers.vue'
import MainServices from '../components/mainServices.vue'

export default {
  components: {
    Header,
    MainHero,
    MainFilter,
    MainAdvantages,
    MainNumbers,
    MainServices
  },
  mounted() {}
}
</script>

<template>
  <div class="container">
    <Header />
    <MainHero />
    <MainFilter />
    <MainAdvantages />
  </div>
  <MainNumbers />
  <div class="container">
    <MainServices />
  </div>
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
