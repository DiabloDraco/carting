<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      perScroll: 4
    }
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
  }
}
</script>

<template>
  <section class="advantages">
    <h2 class="advantages__title">Преимущества платформы</h2>
    <div class="advantages__slider swiper">
      <swiper
        :modules="modules"
        :slides-per-view="perScroll"
        :space-between="50"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">GPS Трекинг</h3>
            <p class="swiper__item-text">
              Отслеживайте перевозки на карте и автоматизируйте работу с водителем
            </p>
            <img class="swiper__item-img" src="/images/swiper2.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Онлайн страхования</h3>
            <p class="swiper__item-text">Какждый ваш договор может быть застрохован онлайн</p>
            <img class="swiper__item-img" src="/images/swiper3.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Аналитика и отчеты</h3>
            <p class="swiper__item-text">
              В нашей платформе вы можете просматривать аналитику и отчеты по вашим заказам
            </p>
            <img class="swiper__item-img" src="/images/swiper4.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="swiper__item">
            <img class="banner_circling" src="/images/back_circle.svg" alt="circling" />
            <h3 class="swiper__item-title">Удобный поиск</h3>
            <p class="swiper__item-text">
              Вы можете найти нужного перевозчика или машину с помощью нескольких кликов.
            </p>
            <img class="swiper__item-img" src="/images/swiper1.png" alt="img" />
          </div>
        </swiper-slide>
      </swiper>
      <button class="navigation right prev__slide">
        <img class="navigation__img" src="/images/arrow-left.svg" alt="" />
      </button>
      <button ref="next" class="navigation left next__slide">
        <img class="navigation__img" src="/images/arrow-right.svg" alt="" />
      </button>
    </div>
  </section>
</template>

<style>
.advantages {
  margin-top: 80px;
}
.advantages__title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 50px;
}
.advantages__slider {
  position: relative;
}
.swiper__item {
  border-radius: 16px;
  background: radial-gradient(
    68.73% 66.24% at 34.71% 76.52%,
    #61ae00 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background: #81d317;
  padding: 24px 28px 0 20px;
  position: relative;
  overflow: hidden;
  height: 305px;
  width: 206px;
}

.banner_circling {
  position: absolute;
  left: -20%;
  top: -15%;
  z-index: 1;
  animation: pulse-animation 7s infinite;
}
@keyframes pulse-animation {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
.swiper__item-title {
  color: var(--white, #fff);
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-bottom: 10px;
}
.swiper__item-text {
  color: var(--white, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: 0;
}
.swiper__item-img {
  position: absolute;
  right: 0;
  bottom: 0;
}
.navigation {
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: absolute;
  cursor: pointer;
  transition: all 0.3s ease;
}

.navigation:hover {
  background-color: #29a990;
}
.right {
  transform: translateY(-50%);
  right: 98%;
  top: 50%;
}
.navigation__img {
}

.advantages__list {
  height: 345px;
}
.left {
  left: 98%;
  top: 50%;
  transform: translateY(-50%);
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .advantages {
    overflow: hidden;
  }

  .swiper__item {
    width: 85%;
  }

  .left {
    left: 90%;
    top: 50%;
    transform: translateY(-50%);
  }

  .right {
    transform: translateY(-50%);
    right: 90%;
    top: 50%;
  }
}
</style>
