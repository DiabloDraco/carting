<script>
import Header from '../layout/header.vue'
import Footer from '../layout/footer.vue'
import OrderFilter from '../components/orderFilter.vue'
import OrderList from '../components/orderList.vue'

export default {
  components: {
    Header,
    Footer,
    OrderFilter,
    OrderList
  }
}
</script>

<template>
  <div class="container">
    <Header />
  </div>
  <OrderFilter />
  <OrderList />
  <Footer />
</template>

<style></style>
