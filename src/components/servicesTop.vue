<script>
import PopularCoursesCard from '../components/popularCoursesCard.vue'

export default {
  components: {
    PopularCoursesCard
  },
  data() {
    return {
      courses: [
        {
          link: '#',
          title: 'Квартирный переезд',
          bg: '/images/bg-cart1.png'
        },
        {
          link: '#',
          title: 'Габаритная техника',
          bg: '/images/bg-cart2.png'
        },
        {
          link: '#',
          title: 'Грузовое такси',
          bg: '/images/bg-cart3.png'
        },
        {
          link: '#',
          title: 'Перевозка мебели',
          bg: '/images/bg-cart4.png'
        }
      ]
    }
  }
}
</script>

<template>
  <section class="services__topcontainer">
    <div class="container">
      <div class="services__top">
        <h3 class="services__top-title">Услуги</h3>
      </div>
      <div class="services__bottom">
        <PopularCoursesCard
          v-for="(item, index) in courses"
          :link="item.link"
          :title="item.title"
          :bg="item.bg"
          :key="index"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.services__topcontainer {
  display: flex;
  background: #fafafa;
  flex-direction: column;
  padding: 30px 0;
}
.services__top {
  display: flex;
  flex-direction: column;
}
.services__top-title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
  padding-left: 24px;
  margin: 0;
  margin-bottom: 20px;
}
.services__bottom {
  display: flex;
  align-items: center;
  gap: 24px;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .services__topcontainer {
    display: none;
    background: #fafafa;
    flex-direction: column;
    padding: 30px 0;
  }
  .services__top {
    display: flex;
    flex-direction: column;
  }
  .services__top-title {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-align: start;
    padding-left: 24px;
    margin: 0;
    margin-bottom: 20px;
  }
  .services__bottom {
    display: flex;
    align-items: center;
    gap: 24px;
  }
}
</style>
