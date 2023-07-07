<script>
import ServiceCard from '../components/serviceCard.vue'

export default {
  props: {
    items: Array
  },
  data() {
    return {
      isDrop: false,
      openFilterr: false,
      question: {
        id: 0,
        value: 'Выбрать'
      },
      catalog: [
        {
          text: 'Аренда $10 в день',
          title: 'Экскаватор',
          img: '/images/catalog1.png',
          link: '/'
        },
        {
          text: 'Аренда $10 в день',
          title: 'Экскаватор',
          img: '/images/catalog1.png',
          link: '/'
        },
        {
          text: 'Аренда $10 в день',
          title: 'Экскаватор',
          img: '/images/catalog1.png',
          link: '/'
        },
        {
          text: 'Аренда $10 в день',
          title: 'Экскаватор',
          img: '/images/catalog1.png',
          link: '/'
        },
        {
          text: 'Аренда $10 в день',
          title: 'Экскаватор',
          img: '/images/catalog1.png',
          link: '/'
        },
        {
          text: 'Аренда $10 в день',
          title: 'Экскаватор',
          img: '/images/catalog1.png',
          link: '/'
        }
      ],
      questions: [
        {
          id: 1,
          value: 'Выберите вопрос'
        },
        {
          id: 2,
          value: 'Выберите вопрос'
        },
        {
          id: 3,
          value: 'Выберите вопрос'
        },
        {
          id: 4,
          value: 'Выберите вопрос'
        }
      ]
    }
  },
  methods: {
    setDrop() {
      this.isDrop = !this.isDrop
    },
    openFilter() {
      let filter = document.querySelector('.order__filter')
      filter.classList.toggle('openFilter')
    },
    toggleSelect(e) {
      let select = e.target.closest('.filter__select')
      if (select.style.overflow != 'inherit') {
        select.classList.add('opened')
        select.style.overflow = 'inherit'
        this.waitTouch()
      } else {
        select.classList.remove('opened')
        select.style.overflow = 'hidden'
      }
    },
    waitTouch() {
      let second = document.querySelector('.filter__select.opened')
      if (second) {
        window.addEventListener(
          'mousedown',
          (e) => {
            if (e.target.closest('.filter__select') != second) {
              second.classList.remove('opened')
              if (second.style.overflow != 'inherit') {
                second.style.overflow = 'inherit'
              } else {
                second.style.overflow = 'hidden'
              }
            }
          },
          { once: true }
        )
      }
    },
    setValue(text, model) {
      if (model == 'question') {
        this.question = text
      }
    },
    openFilter() {
      this.openFilterr = !this.openFilterr
    }
  },
  components: {
    ServiceCard
  }
}
</script>

<template>
  <section class="service__hero">
    <div :class="{ opened__service: openFilterr }" class="service__hero-left">
      <h2 class="service__hero__left-title">Фильтр по параметрам</h2>
      <img
        @click="openFilter"
        class="service__hero__cross"
        width="30"
        height="30"
        src="/images/cross.svg"
        alt=""
      />
      <div class="service__hero__left-wrapper">
        <div class="invitation__input-wrapper">
          <p class="invitation__input-text">Тип услуги</p>
          <div @click="toggleSelect" style="width: 100%" class="filter__select">
            <div class="current__selected">
              <p class="current__selected-text">{{ question.value }}</p>
              <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
            </div>
            <ul class="select__list">
              <li
                v-for="(item, index) in questions"
                @click="setValue(item, 'queston')"
                :key="item.id"
                v-show="question.id != item.id"
                class="select__item"
              >
                {{ item.value }}
              </li>
            </ul>
          </div>
        </div>
        <div class="invitation__input-wrapper">
          <p class="invitation__input-text">Тип транспорта</p>
          <div @click="toggleSelect" style="width: 100%" class="filter__select">
            <div class="current__selected">
              <p class="current__selected-text">{{ question.value }}</p>
              <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
            </div>
            <ul class="select__list">
              <li
                v-for="(item, index) in questions"
                @click="setValue(item, 'queston')"
                :key="item.id"
                v-show="question.id != item.id"
                class="select__item"
              >
                {{ item.value }}
              </li>
            </ul>
          </div>
        </div>
        <div class="invitation__input-wrapper">
          <p class="invitation__input-text">Область</p>
          <div @click="toggleSelect" style="width: 100%" class="filter__select">
            <div class="current__selected">
              <p class="current__selected-text">{{ question.value }}</p>
              <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
            </div>
            <ul class="select__list">
              <li
                v-for="(item, index) in questions"
                @click="setValue(item, 'queston')"
                :key="item.id"
                v-show="question.id != item.id"
                class="select__item"
              >
                {{ item.value }}
              </li>
            </ul>
          </div>
        </div>
        <div class="invitation__input-wrapper">
          <p class="invitation__input-text">Город</p>
          <div @click="toggleSelect" style="width: 100%" class="filter__select">
            <div class="current__selected">
              <p class="current__selected-text">{{ question.value }}</p>
              <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
            </div>
            <ul class="select__list">
              <li
                v-for="(item, index) in questions"
                @click="setValue(item, 'queston')"
                :key="item.id"
                v-show="question.id != item.id"
                class="select__item"
              >
                {{ item.value }}
              </li>
            </ul>
          </div>
        </div>
        <div class="invitation__input-wrapper">
          <p class="invitation__input-text">Виды перевозок</p>
          <div @click="toggleSelect" style="width: 100%" class="filter__select">
            <div class="current__selected">
              <p class="current__selected-text">{{ question.value }}</p>
              <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
            </div>
            <ul class="select__list">
              <li
                v-for="(item, index) in questions"
                @click="setValue(item, 'queston')"
                :key="item.id"
                v-show="question.id != item.id"
                class="select__item"
              >
                {{ item.value }}
              </li>
            </ul>
          </div>
        </div>
        <div class="invitation__input-wrapper">
          <p class="invitation__input-text">Груз</p>
          <div @click="toggleSelect" style="width: 100%" class="filter__select">
            <div class="current__selected">
              <p class="current__selected-text">{{ question.value }}</p>
              <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
            </div>
            <ul class="select__list">
              <li
                v-for="(item, index) in questions"
                @click="setValue(item, 'queston')"
                :key="item.id"
                v-show="question.id != item.id"
                class="select__item"
              >
                {{ item.value }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="service__hero-right">
      <div class="order__list">
        <div class="order__list-top">
          <div class="order__lists__top-left">
            <h2 class="order__list-title">Каталог машин</h2>
            <p class="order__lists-text">Найдено 523,000 машин</p>
          </div>
          <div class="order__lists__top-right">
            <div class="order__lists__top-right-filter">
              <img
                class="order__lists__top__right__filter-icon"
                src="/images/filter.svg"
                alt="filter"
              />
              <p @click="openFilter" class="order__lists__top__right__filter-text">Фильтр</p>
            </div>
            <div @click="setDrop" class="order__lists__top-right-sort">
              <img src="/images/sort.svg" alt="" />
              <p class="order__lists__top__right-text">Сортировать</p>
              <div :class="{ dropped: isDrop }" class="order__lists__dropdown">
                <div class="order__lists-item">Новые</div>
                <div class="order__lists-item">Актуальные</div>
                <div class="order__lists-item">Популярные</div>
              </div>
            </div>
          </div>
        </div>
        <div class="order__lists-list">
          <ServiceCard
            v-for="(item, index) in catalog"
            :text="item.text"
            :title="item.title"
            :img="item.img"
            :link="item.link"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.service__hero {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
}

.filter__select {
  display: flex;
  flex-direction: column;
  max-height: 44px;
  overflow: hidden;
  cursor: pointer;
}
.current__selected {
  display: flex;
  align-items: center;
  padding: 11px 15px;
  border-radius: 6px;
  border: 1px solid #e8eaee;
  background: #fff;
  justify-content: space-between;
  gap: 5px;
}
.current__selected-text {
  margin: 0;
  overflow: hidden;
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-size: 15px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  user-select: none;
}
.current__arrow {
  width: 18px;
  height: 18px;
  object-fit: contain;
  transition: all 0.3s ease;
}
.select__list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  width: 100%;
  padding: 0;
  z-index: 2;
  transition: all 0.3s ease;
  gap: 10px;
  margin: 0;
  border-radius: 0 0 8px 8px;
  background: #fbfcff;
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.048);
}

.service__hero__left-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.select__item {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  padding: 8px 10px;
  line-height: 28px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  transition: all 0.3s ease;
  user-select: none;
}

.select__item:hover {
  background: #f1f2f7;
}

.filter__select {
  position: relative;
}

.filter__select.opened {
  max-height: 100%;
}

.filter__select.opened .current__arrow {
  transform: rotate(180deg);
}

.invitation__input-wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 100%;
  width: 100%;
}

.order__list {
  margin-top: 0;
}
.service__hero__cross-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.order__lists__dropdown {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 120%;
  left: 20%;
  max-height: 0;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: 3;
}
.order__lists__dropdown.dropped {
  max-height: 100%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.055);
  overflow: visible;
  background-color: white;
}
.container {
}

.order__lists-item {
  margin: 0;
  transition: all 0.3s ease;
  padding: 10px 5px;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.089);
}

.order__lists-item:first-child {
  border-radius: 10px 10px 0 0;
}

.order__lists-item:last-child {
  border-radius: 0 0 10px 10px;
}

.order__lists-item:hover {
  background-color: rgb(224, 222, 222);
}
.order__list {
  margin-top: 0;
  max-width: 765px;
}
.order__list-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}
.service__hero-left {
  max-width: 341px;
  width: 100%;
  padding-right: 30px;
  border-right: 1px solid #e8eaee;
}
.order__list-title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-right: 20px;
  border-right: 2px solid #d4d4d4;
  margin: 0;
  margin-right: 20px;
}
.order__lists-text {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.order__lists__top-left {
  display: flex;
  align-items: center;
}

.order__lists__top-right-sort {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
  user-select: none;
}
.order__lists__top__right-text {
  color: var(--blue, #007aff);
  margin: 0;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.order__lists-list {
}
.order__lists__top-right-filter {
  display: none;
}

.service__hero__left-title {
  color: #333;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  padding-bottom: 20px;
  position: relative;
  margin-bottom: 20px;
}

.service__hero__left-title::after {
  content: '';
  width: 109%;
  height: 2px;
  background-color: #e8eaee;
  position: absolute;
  top: 100%;
  left: 0;
}

.service__hero__cross {
  display: none;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .order__list-top {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .service__hero__cross {
    display: flex;
    position: fixed;
    top: 15px;
    right: 15px;
    cursor: pointer;
    z-index: 2;
  }

  .order__list-title {
    border-right: none;
  }
  .order__lists__top-right {
    display: flex;
    width: 100%;
    margin-top: 20px;
    padding-right: 10px;
    justify-content: space-between;
  }

  .order__lists__top-left {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    justify-content: start;
  }

  .order__lists__top-right-filter {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 13px 41px;
    border-radius: 6px;
    border: 1px solid var(--border-line-color, #e3e3e3);
  }

  .order__lists__top__right__filter-text {
    color: var(--light-mode-colors-h-1, rgba(0, 0, 0, 0.87));
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }

  .service__hero-left {
    max-width: 341px;
    width: 100%;
    position: fixed;
    top: 0px;
    bottom: 0;
    padding-top: 15px;
    background: white;
    overflow: hidden;
    overflow: scroll;
    padding-right: 30px;
    border-right: 1px solid #e8eaee;
    transform: translateX(-120%);
    transition: all 0.3s ease;
    z-index: 9;
  }

  .opened__service {
    transform: translateX(0);
  }
}
</style>
