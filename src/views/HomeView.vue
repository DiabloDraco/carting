<script>
import Header from '../layout/header.vue'
import MainHero from '../components/mainHero.vue'
import MainFilter from '../components/mainFilter.vue'
import MainAdvantages from '../components/mainAdvantages.vue'
import MainNumbers from '../components/mainNumbers.vue'
import MainServices from '../components/mainServices.vue'
import MainPerfomers from '../components/mainPerfomers.vue'
import MainPartners from '../components/mainPartners.vue'
import MainAdvantagesFor from '../components/mainAdvantagesFor.vue'
import MainInvitation from '../components/mainInvitation.vue'
import MainFaq from '../components/mainFaq.vue'
import Footer from '../layout/footer.vue'

export default {
  components: {
    Header,
    MainHero,
    MainFilter,
    MainAdvantages,
    MainNumbers,
    MainServices,
    MainPerfomers,
    MainPartners,
    MainAdvantagesFor,
    MainInvitation,
    MainFaq,
    Footer
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
    <MainPerfomers />
  </div>
  <MainPartners />
  <div class="container">
    <MainAdvantagesFor />
  </div>
  <MainInvitation />
  <div class="container">
    <MainFaq />
  </div>
  <Footer />
</template>

<style>
body {
  padding: 0;
  margin: 0;
}
</style>
