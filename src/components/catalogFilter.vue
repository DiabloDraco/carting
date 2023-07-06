<script>
export default {
  data() {
    return {
      question: {
        id: 0,
        value: 'Выбрать'
      },
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
    toggleSelect(e) {
      let select = e.target.closest('.filter__select')
      if (select.style.overflow != 'inherit') {
        select.style.overflow = 'inherit'
      } else {
        select.style.overflow = 'hidden'
      }
      select.classList.toggle('opened')
    },
    setValue(text, model) {
      if (model == 'question') {
        this.question = text
      }
    },
    openFilter() {
      let filter = document.querySelector('.order__filter')
      filter.classList.toggle('openFilter')
    }
  }
}
</script>

<template>
  <section class="order__filter">
    <div class="flex-mobile">
      <p class="order__text-title">Фильтр</p>
      <img
        @click="openFilter"
        class="order__cross"
        width="30"
        height="30"
        src="/images/cross.svg"
        alt=""
      />
    </div>
    <div class="order__filter-top container">
      <h3 class="order__filter-title">Быстрый поиск</h3>
      <div class="order__filter-right">
        <button class="order__filter__right-btn">
          <img class="order__filter__btn-icon" src="/images/find-icon.png" alt="find" />
          Сохранить поиск
        </button>
        <button class="order__filter__btn-right">Найти заказ</button>
      </div>
    </div>
    <div class="order__filter-bottom container">
      <div class="order__filter__bottom-bottom">
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
          <p class="invitation__input-text">Тип машины</p>
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
      </div>
      <div class="order__filter__bottom-top">
        <label class="order__filter__bottom__top-label">
          <input
            checked
            class="order__filter__bottom__top-radio"
            value="1"
            type="radio"
            name="organsiation"
          />
          <p class="order__filter__bottom__top-text">Все</p>
        </label>
        <label class="order__filter__bottom__top-label">
          <input
            class="order__filter__bottom__top-radio"
            value="2"
            type="radio"
            name="organsiation"
          />
          <p class="order__filter__bottom__top-text">Частники</p>
        </label>
        <label class="order__filter__bottom__top-label">
          <input
            class="order__filter__bottom__top-radio"
            value="3"
            type="radio"
            name="organsiation"
          />
          <p class="order__filter__bottom__top-text">Компании</p>
        </label>
      </div>
    </div>
  </section>
</template>

<style>
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
  max-width: 272px;
  width: 100%;
}

.width {
  max-width: 122px;
  width: 100%;
}

.invitation__input-text {
  color: var(--google-typography-body, rgba(0, 0, 0, 0.68));
  font-size: 14px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}

.order__filter {
  background: #f8f8f8;
  padding: 27px 0 20px 0;
}
.order__filter-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.order__filter-title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.order__filter-right {
  display: flex;
  align-items: center;
  gap: 20px;
}
.order__filter__right-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  color: var(--blue, #007aff);
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: none;
  cursor: pointer;
  padding: 8px 14px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.order__filter__right-btn:hover {
  color: white;
  background: var(--blue, #007aff);
}
.order__filter__btn-icon {
  transition: all 0.3s ease;
  width: 20px;
  height: 20px;
  object-fit: cover;
}

.bord-right {
  border-radius: 0 6px 6px 0;
}

.bord-left {
  border-radius: 6px 0 0 6px;
}

.order__filter__right-btn:hover .order__filter__btn-icon {
  filter: brightness(0) invert(1);
}
.order__filter__btn-right {
  border: none;
  border-radius: 6px;
  background: var(--primary, #a0eb41);
  padding: 10px 16px;
  color: var(--white, #fff);
  font-family: Rubik;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
  line-height: normal;
  transition: all 0.3s ease;
}
.order__filter__btn-right:hover {
  background: var(--white, #fff);
  color: var(--primary, #a0eb41);
  box-shadow: inset 0 0 0 1px var(--primary, #a0eb41);
}
.order__filter-bottom {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
.order__filter__bottom-top {
  display: flex;
  align-items: center;
  gap: 24px;
}
.invitation__input-bottom {
  display: flex;
  align-items: center;
}
.filter__input {
  padding: 13px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: 1px solid #e8eaee;
  background: #fff;
  max-width: 36px;
  width: 100%;
  transition: all 0.3s ease;
}
.filter__input:focus {
  outline: none;
  border: 1px solid #1b7244;
}
.order__filter__bottom-bottom {
  display: flex;
  align-items: center;
  gap: 24px;
}

.flex-mobile {
  display: none;
}

.order__filter__bottom-bottom {
}
.invitation__input-wrapper {
}
.invitation__input-text {
}
.filter__select {
}
.current__selected {
}
.current__selected-text {
}
.current__arrow {
}
.select__list {
}
.select__item {
}
.order__filter__bottom-top {
}
.order__filter__bottom__top-label {
  display: flex;
  align-items: center;
  gap: 8px;
}
.order__filter__bottom__top-radio {
  width: 16px;
  height: 16px;
}
.order__filter__bottom__top-text {
  margin: 0;
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .order__filter {
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: scroll;
    z-index: 999;
    transform: translateX(-100%);
    transition: all 0.3s ease;
  }

  .openFilter {
    transform: translateX(0);
    width: 100%;
  }

  .order__filter__bottom-top {
    display: flex;
    flex-wrap: wrap;
  }
  .order__filter__bottom-bottom {
    display: flex;
    flex-direction: column;
  }

  .invitation__input-wrapper {
    max-width: 100%;
  }

  .width {
    display: inline-block;
    width: 45%;
  }
  .bord-left {
    max-width: 100%;
    width: 100%;
  }

  .bord-right {
    max-width: 100%;
    width: 100%;
  }
  .order__filter-top {
    order: 10;
  }
  .order__filter-title {
    display: none;
  }

  .order__filter__right-btn {
    display: none;
  }

  .order__filter-right {
    width: 100%;
    max-width: 100%;
    margin-bottom: 40px;
  }

  .order__filter-top {
    margin: 0;
  }

  .order__filter__btn-right {
    width: 100%;
    margin-top: 20px;
    max-width: 100%;
  }

  .flex-mobile {
    display: flex;
    padding: 0 10px;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
  }

  .flex-mobile img {
    cursor: pointer;
  }
}
</style>
