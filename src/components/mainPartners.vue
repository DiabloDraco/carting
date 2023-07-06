<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css/navigation'

import 'swiper/css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      activeTab: 1
    }
  },
  methods: {
    setTab(e) {
      this.activeTab = e
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
  }
}
</script>

<template>
  <section class="partners">
    <div class="partners__top">
      <p :class="{ activeTab: activeTab == 1 }" @click="setTab(1)" class="partners__top-left">
        Страховые партнеры
      </p>
      <p :class="{ activeTab: activeTab == 2 }" @click="setTab(2)" class="partners__top-right">
        Бизнес партнеры
      </p>
    </div>
    <div class="partners__bottom">
      <div :class="{ active: activeTab == 1 }" class="partners__tab">
        <swiper
          :slides-per-view="5"
          :space-between="50"
          navigation
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <img class="partners__img" src="/images/partner1.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img class="partners__img" src="/images/partner2.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img class="partners__img" src="/images/partner3.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img class="partners__img" src="/images/partner4.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img class="partners__img" src="/images/partner5.png" alt="" />
          </swiper-slide>
        </swiper>
      </div>
      <div :class="{ active: activeTab == 2 }" class="partners__tab">
        <swiper
          :slides-per-view="5"
          :space-between="50"
          navigation
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <img class="partners__img" src="/images/partner1.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img class="partners__img" src="/images/partner2.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img class="partners__img" src="/images/partner3.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img class="partners__img" src="/images/partner4.png" alt="" />
          </swiper-slide>
          <swiper-slide>
            <img class="partners__img" src="/images/partner5.png" alt="" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
  <section class="partners-mobile">
    <div class="partners__top">
      <p :class="{ activeTab: activeTab == 1 }" @click="setTab(1)" class="partners__top-left">
        Страховые партнеры
      </p>
      <p :class="{ activeTab: activeTab == 2 }" @click="setTab(2)" class="partners__top-right">
        Бизнес партнеры
      </p>
    </div>
    <div class="partners__bottom">
      <div :class="{ active: activeTab == 1 }" class="partners__tab">
        <img class="partners__img" src="/images/partner1.png" alt="" />
        <img class="partners__img" src="/images/partner2.png" alt="" />
        <img class="partners__img" src="/images/partner3.png" alt="" />
        <img class="partners__img" src="/images/partner4.png" alt="" />
        <img class="partners__img" src="/images/partner5.png" alt="" />
      </div>
      <div :class="{ active: activeTab == 2 }" class="partners__tab">
        <img class="partners__img" src="/images/partner1.png" alt="" />
        <img class="partners__img" src="/images/partner2.png" alt="" />
        <img class="partners__img" src="/images/partner3.png" alt="" />
        <img class="partners__img" src="/images/partner4.png" alt="" />
        <img class="partners__img" src="/images/partner5.png" alt="" />
      </div>
    </div>
  </section>
</template>

<style>
.partners {
  margin-top: 116px;
  padding: 40px 0;
  background: var(--cscs, linear-gradient(152deg, #f7f9fc 0%, rgba(187, 201, 224, 0) 100%));
}
.partners__top {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.partners__top-left {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
  cursor: pointer;
  position: relative;
}
.activeTab::after {
  content: '';
  display: inline-block;
  width: 100%;
  height: 1px;
  background: #c0c0c0;
  position: absolute;
  top: 150%;
  left: 0;
}
.partners__top-right {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
  position: relative;
  cursor: pointer;
}
.partners__bottom {
  display: flex;
  margin-top: 54px;
}
.partners__tab {
  display: none;
  max-width: 1400px;
  margin: 0 auto;
}
.partners__img {
}

.active {
  display: block;
}

.partners-mobile {
  display: none;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .partners {
    margin-top: 116px;
    padding: 40px 0;
    background: var(--cscs, linear-gradient(152deg, #f7f9fc 0%, rgba(187, 201, 224, 0) 100%));
  }
  .partners__top {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 0 10px;
  }
  .partners__top-left {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin: 0;
    cursor: pointer;
    position: relative;
  }
  .activeTab::after {
    content: '';
    display: inline-block;
    width: 80%;
    height: 1px;
    background: #c0c0c0;
    position: absolute;
    top: 150%;
    left: 0;
  }
  .partners__top-right {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin: 0;
    position: relative;
    cursor: pointer;
  }
  .partners__bottom {
    display: flex;
    margin-top: 54px;
  }
  .partners__tab {
    display: none;
    max-width: 1400px;
    margin: 0 auto;
  }
  .partners__img {
    max-width: 169px;
    width: 100%;
    height: 94px;
    object-fit: contain;
  }

  .active {
    display: flex;
    flex-wrap: wrap;
    gap: 37px;
  }

  .partners {
    display: none;
  }

  .partners-mobile {
    display: block;
    margin-top: 116px;
    padding: 40px 0;
    background: var(--cscs, linear-gradient(152deg, #f7f9fc 0%, rgba(187, 201, 224, 0) 100%));
  }
}
</style>
