<script>
import PerfomersCard from './perfomersCard.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

export default {
  components: {
    Swiper,
    SwiperSlide,
    PerfomersCard
  },
  mounted() {
    if (window.innerWidth < 800) {
      console.log(window.innerWidth)
      this.perScroll = 1
    }
  },
  setup() {
    const onSwiper = (swiper) => {}
    const onSlideChange = () => {}
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation]
    }
  },
  data() {
    return {
      perScroll: 4,
      perfomers: [
        {
          rating: '5,0',
          name: 'Iminov Dilmurod',
          job: 'Водитель',
          bg: '/images/performers1.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Ismoilov Muhammad',
          job: 'Водитель',
          bg: '/images/performers2.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Murodillayev Ulug`bek',
          job: 'Водитель',
          bg: '/images/performers3.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Usmonov Dilshod',
          job: 'Водитель',
          bg: '/images/performers4.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Usmonov Dilshod',
          job: 'Водитель',
          bg: '/images/performers4.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Usmonov Dilshod',
          job: 'Водитель',
          bg: '/images/performers4.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Usmonov Dilshod',
          job: 'Водитель',
          bg: '/images/performers4.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Usmonov Dilshod',
          job: 'Водитель',
          bg: '/images/performers4.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Usmonov Dilshod',
          job: 'Водитель',
          bg: '/images/performers4.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Usmonov Dilshod',
          job: 'Водитель',
          bg: '/images/performers4.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Usmonov Dilshod',
          job: 'Водитель',
          bg: '/images/performers4.png',
          link: '#'
        },
        {
          rating: '5,0',
          name: 'Usmonov Dilshod',
          job: 'Водитель',
          bg: '/images/performers4.png',
          link: '#'
        }
      ]
    }
  }
}
</script>

<template>
  <section class="perfomers">
    <h2 class="perfomers__title">Топ исполнители</h2>
    <div class="perfomers__list">
      <swiper
        :modules="modules"
        :slides-per-view="perScroll"
        :space-between="50"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="(item, index) in perfomers">
          <PerfomersCard
            :rating="item.rating"
            :name="item.name"
            :job="item.job"
            :bg="item.bg"
            :link="item.link"
            :key="index"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<style>
.perfomers {
}
.perfomers__title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 18px;
  margin: 66px 0 50px 0;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  text-transform: uppercase;
}
.perfomers__list {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .perfomers {
  }
  .perfomers__title {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 18px;
    margin: 66px 0 50px 0;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    text-transform: uppercase;
  }

  .performers__top-bg {
    max-width: 100%;
    width: 90vw;
  }
  .perfomers__list {
    gap: 20px;
    overflow: hidden;
    justify-content: space-between;
  }
}
</style>
