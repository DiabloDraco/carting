<script>
import Header from '../layout/header.vue'
import Footer from '../layout/footer.vue'
import CatalogFilter from '../components/catalogFilter.vue'
import CatalogList from '../components/catalogList.vue'

export default {
  components: {
    Header,
    Footer,
    CatalogFilter,
    CatalogList
  }
}
</script>

<template>
  <div class="container"><Header /></div>
  <CatalogFilter />
  <div class="container">
    <CatalogList />
  </div>
  <Footer />
</template>

<style></style>
