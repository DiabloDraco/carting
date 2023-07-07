<script>
import Header from '../layout/header.vue'
import Footer from '../layout/footer.vue'
import DeclarationFilter from '../components/declarationFilter.vue'
import DeclarationList from '../components/declarationList.vue'

export default {
  components: {
    Header,
    Footer,
    DeclarationFilter,
    DeclarationList
  }
}
</script>

<template>
  <div class="container">
    <Header />
  </div>
  <DeclarationFilter />
  <DeclarationList />
  <Footer />
</template>

<style></style>
