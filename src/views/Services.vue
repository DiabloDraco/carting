<script>
import Header from '../layout/header.vue'
import Footer from '../layout/footer.vue'
import ServiceHero from '../components/serviceHero.vue'
import ServicesTop from '../components/servicesTop.vue'

export default {
  components: {
    Header,
    Footer,
    ServicesTop,
    ServiceHero
  }
}
</script>

<template>
  <div class="container">
    <Header />
  </div>
  <ServicesTop />
  <div class="container">
    <ServiceHero />
  </div>
  <Footer />
</template>

<style></style>
