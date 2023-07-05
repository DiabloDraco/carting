<script>
import PopularCoursesCard from './popularCoursesCard.vue'
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
  <section class="services">
    <div class="services__top">
      <h3 class="services__top-title">Популярные услуги</h3>
      <div class="services__top-right hidden-mobile">
        <p class="services__top__right-text">Смотреть все</p>
        <img class="services__top__right-icon" src="/images/right-arrow-all.svg" alt="" />
      </div>
    </div>
    <div class="services__bottom">
      <PopularCoursesCard
        v-for="(item, index) in courses"
        :link="item.link"
        :bg="item.bg"
        :title="item.title"
      />
    </div>
    <button class="display-mobile">Смотреть все</button>
  </section>
</template>

<style>
.services {
  margin-top: 67px;
}

.display-mobile {
  display: none;
}
.services__top {
  display: flex;
  justify-content: end;
  margin-bottom: 35px;
}
.services__top-title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  text-align: center;
  font-size: 18px;
  font-style: normal;
  margin: 0;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-right: 346px;
}
.services__top-right {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 6px;
}
.services__top__right-text {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.services__top__right-icon {
  width: 20px;
  height: 20px;
  object-fit: cover;
}
.services__bottom {
  display: flex;
  align-items: center;
  gap: 24px;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .services__bottom {
    flex-direction: column;
  }

  .hidden-mobile {
    display: none;
  }

  .display-mobile {
    display: flex;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white, #fff);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border: none;
    padding: 10px;
    border-radius: 6px;
    background: var(--primary, #a0eb41);
    width: 100%;
    text-align: center;
    transition: all 0.3s ease;
  }

  .display-mobile:hover {
    color: var(--primary, #a0eb41);
    background: var(--white, #fff);
    box-shadow: inset 0 0 0 1px var(--primary, #a0eb41);
  }

  .services__top-title {
    margin: 0 auto;
  }

  .services {
    overflow-x: hidden;
  }
}
</style>
