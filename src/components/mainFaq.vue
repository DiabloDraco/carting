<script>
export default {
  data() {
    return {
      openedFaq: null
    }
  },
  methods: {
    openFaq(item) {
      if (this.openedFaq != item) {
        this.openedFaq = item
      } else {
        this.openedFaq = null
      }
    }
  }
}
</script>

<template>
  <section class="faq">
    <h2 class="faq__title">Часто задаваемые вопросы</h2>
    <div class="faq__list">
      <div :class="{ opened: openedFaq == 1 }" @click="openFaq(1)" class="faq__item">
        <div class="faq__item-top">
          <p class="faq__item__top-num">01</p>
          <p class="faq__item__top-text">Как подготовить посылку</p>
          <img class="faq__item__top-arrow" src="/images/chevron-down.png" alt="arrow" />
        </div>
        <div :class="{ opened: openedFaq == 1 }" class="faq__item-bottom">
          <p class="faq__item-text">
            Для скорейшей отправки ваших документов и посылок мы пользуемся услугами
            авиаперевозчиков, поэтому документы и посылки мы доставляем от 1 до 3 дней. Сроки
            доставки указаны в рабочих днях. Просим обратить внимание, что день приезда курьера не
            входит в сроки доставки.
          </p>
          <p class="faq__item-text">
            Для отправки письма или груза заполните форму для отправки во вкладке "Отправка почты"
            либо "Отправка посылок"
          </p>
        </div>
        <span class="faq__item-line"></span>
      </div>
      <div :class="{ opened: openedFaq == 2 }" @click="openFaq(2)" class="faq__item">
        <div class="faq__item-top">
          <p class="faq__item__top-num">02</p>
          <p class="faq__item__top-text">Сроки доставки по Казахстану</p>
          <img class="faq__item__top-arrow" src="/images/chevron-down.png" alt="arrow" />
        </div>
        <div :class="{ opened: openedFaq == 2 }" class="faq__item-bottom">
          <p class="faq__item-text">
            Для скорейшей отправки ваших документов и посылок мы пользуемся услугами
            авиаперевозчиков, поэтому документы и посылки мы доставляем от 1 до 3 дней. Сроки
            доставки указаны в рабочих днях. Просим обратить внимание, что день приезда курьера не
            входит в сроки доставки.
          </p>
          <p class="faq__item-text">
            Для отправки письма или груза заполните форму для отправки во вкладке "Отправка почты"
            либо "Отправка посылок"
          </p>
        </div>
        <span class="faq__item-line"></span>
      </div>
      <div :class="{ opened: openedFaq == 3 }" @click="openFaq(3)" class="faq__item">
        <div class="faq__item-top">
          <p class="faq__item__top-num">03</p>
          <p class="faq__item__top-text">Запрещенные к перевозке посылки</p>
          <img class="faq__item__top-arrow" src="/images/chevron-down.png" alt="arrow" />
        </div>
        <div :class="{ opened: openedFaq == 3 }" class="faq__item-bottom">
          <p class="faq__item-text">
            Для скорейшей отправки ваших документов и посылок мы пользуемся услугами
            авиаперевозчиков, поэтому документы и посылки мы доставляем от 1 до 3 дней. Сроки
            доставки указаны в рабочих днях. Просим обратить внимание, что день приезда курьера не
            входит в сроки доставки.
          </p>
          <p class="faq__item-text">
            Для отправки письма или груза заполните форму для отправки во вкладке "Отправка почты"
            либо "Отправка посылок"
          </p>
        </div>
        <span class="faq__item-line"></span>
      </div>
      <div :class="{ opened: openedFaq == 4 }" @click="openFaq(4)" class="faq__item">
        <div class="faq__item-top">
          <p class="faq__item__top-num">04</p>
          <p class="faq__item__top-text">Ограничения на перевозку</p>
          <img class="faq__item__top-arrow" src="/images/chevron-down.png" alt="arrow" />
        </div>
        <div :class="{ opened: openedFaq == 4 }" class="faq__item-bottom">
          <p class="faq__item-text">
            Для скорейшей отправки ваших документов и посылок мы пользуемся услугами
            авиаперевозчиков, поэтому документы и посылки мы доставляем от 1 до 3 дней. Сроки
            доставки указаны в рабочих днях. Просим обратить внимание, что день приезда курьера не
            входит в сроки доставки.
          </p>
          <p class="faq__item-text">
            Для отправки письма или груза заполните форму для отправки во вкладке "Отправка почты"
            либо "Отправка посылок"
          </p>
        </div>
        <span class="faq__item-line"></span>
      </div>
    </div>
  </section>
</template>

<style>
.faq {
  margin-top: 110px;
}
.faq__title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  text-transform: uppercase;
  margin: 0;
  margin-bottom: 40px;
  text-align: center;
}
.faq__list {
  display: flex;
  flex-direction: column;
  max-width: 764px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
}
.faq__item {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq__item:hover .faq__item__top-num {
  color: #1e9657;
}

.faq__item:hover .faq__item__top-text {
  color: #1e9657;
}

.faq__item.opened .faq__item__top-num {
  color: #1e9657;
}

.faq__item.opened .faq__item__top-text {
  color: #1e9657;
}

.faq__item.opened .faq__item__top-arrow {
  transform: rotate(180deg);
}

.faq__item-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.faq__item__top-num {
  color: var(--google-typography-disable, rgba(0, 0, 0, 0.38));
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  transition: all 0.3s ease;
  line-height: 24px;
}
.faq__item__top-text {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 16px;
  margin: 0;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  width: 100%;
  margin-left: 24px;
}
.faq__item__top-arrow {
  width: 18px;
  height: 18px;
  object-fit: cover;
  transition: all 0.3s ease;
}
.faq__item-bottom {
  max-height: 0;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 48px;
  transition: all 0.3s ease;
}

.faq__item-bottom.opened {
  max-height: 100%;
}
.faq__item-text {
  color: var(--google-typography-body, rgba(0, 0, 0, 0.68));
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}
.faq__item-line {
  display: inline-block;
  height: 1px;
  background: var(--sky-lighter, #f2f4f5);
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .faq {
    margin-top: 60px;
  }
  .faq__title {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 40px;
    text-align: center;
  }
  .faq__list {
    display: flex;
    flex-direction: column;
    max-width: 764px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
  }
  .faq__item {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .faq__item:hover .faq__item__top-num {
    color: #1e9657;
  }

  .faq__item:hover .faq__item__top-text {
    color: #1e9657;
  }

  .faq__item.opened .faq__item__top-num {
    color: #1e9657;
  }

  .faq__item.opened .faq__item__top-text {
    color: #1e9657;
  }

  .faq__item.opened .faq__item__top-arrow {
    transform: rotate(180deg);
  }

  .faq__item-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .faq__item__top-num {
    color: var(--google-typography-disable, rgba(0, 0, 0, 0.38));
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    margin: 0;
    transition: all 0.3s ease;
    line-height: 24px;
  }
  .faq__item__top-text {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    width: 100%;
    margin-left: 10px;
  }
  .faq__item__top-arrow {
    width: 18px;
    height: 18px;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  .faq__item-bottom {
    max-height: 0;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-left: 0;
    transition: all 0.3s ease;
  }

  .faq__item-bottom.opened {
    max-height: 100%;
  }
  .faq__item-text {
    color: var(--google-typography-body, rgba(0, 0, 0, 0.68));
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
  }
  .faq__item-line {
    display: inline-block;
    height: 1px;
    background: var(--sky-lighter, #f2f4f5);
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
  }
}
</style>
