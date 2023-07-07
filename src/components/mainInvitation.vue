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
    }
  }
}
</script>

<template>
  <section class="invitation">
    <div class="invitation__bg-top"></div>
    <div class="invitation__wrapper container">
      <div class="invitation__top">
        <h2 class="invitation__top-heading">Приглашаем вас к сотрудничеству</h2>
        <p class="invitation__top-text">
          Это цифровая платформа для грузоперевозок. Пользователям доступны продукты и сервисы для
          автоматизации закупки и исполнения перевозок: транспортные тендеры, спот-аукционы, TMS и
          трекинг. Цифровые продукты Gruzi.ru объединены в экосистему, интегрированы с ИТ-системами
          грузоотправителей, позволяют оптимизировать рутинные процессы и значительно снизить
          расходы на транспортную логистику.
        </p>
      </div>
      <div class="invitation__bottom">
        <div class="invitation__bottom-left">
          <img class="invitation__bg" src="/images/inventation-bg.png" alt="bg" />
        </div>
        <div class="invitation__bottom-right">
          <h3 class="invitation__right-title">Связаться с нами</h3>
          <div class="invitation__right-wrapper">
            <div class="invitation__right-top">
              <label class="invitation__input-wrapper">
                <p class="invitation__input-text">Имя <span style="color: red">*</span></p>
                <input class="invitation-input" type="text" placeholder="Введите имя" />
              </label>
              <label class="invitation__input-wrapper">
                <p class="invitation__input-text">
                  Адрес электронной почты <span style="color: red">*</span>
                </p>
                <input class="invitation-input" type="text" placeholder="Адрес почти" />
              </label>
            </div>
            <label class="invitation__input-wrapper">
              <p class="invitation__input-text">Компания <span style="color: red">*</span></p>
              <input class="invitation-input" type="text" placeholder="Названия вашей компании" />
            </label>
            <label class="invitation__input-wrapper">
              <p class="invitation__input-text">Телефон <span style="color: red">*</span></p>
              <input class="invitation-input" type="text" placeholder="(998)" />
            </label>
            <div class="invitation__input-wrapper">
              <p class="invitation__input-text">По вопросу</p>
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
            <button class="invitation__button">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.invitation {
  position: relative;
  margin-top: 67px;
}
.invitation__bg-top {
  position: absolute;
  top: 0;
  height: 490px;
  width: 100%;
  left: 0;
  background: #a0eb41;
  z-index: -1;
}
.invitation__wrapper {
  padding-top: 80px;
}
.invitation__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
}
.invitation__top-heading {
  color: var(--white, #fff);
  font-size: 40px;
  margin: 0;
  max-width: 371px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.invitation__top-text {
  color: var(--light-text-color, #fff);
  font-size: 15px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  max-width: 667px;
}
.invitation__bottom {
  display: flex;
  border-radius: 16px;
  box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.082);
  background: var(--light-background-color, #fff);
}
.invitation__bottom-left img {
  border-radius: 16px 0 0 16px;
  height: 100%;
}
.invitation__bottom-right {
  margin-left: 52px;
  padding: 40px 50px 40px 0;
  width: 100%;
}
.invitation__right-title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  text-align: center;
  font-size: 18px;
  margin: 0;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin-bottom: 40px;
}
.invitation__right-wrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.invitation__right-top {
  display: flex;
  align-items: center;
  gap: 15px;
}
.invitation__input-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 100%;
  gap: 8px;
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
.invitation-input {
  overflow: hidden;
  color: var(--google-typography-disable, rgba(0, 0, 0, 0.38));
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-size: 15px;
  padding: 13px 15px 13px 12px;
  border-radius: 6px;
  border: 1px solid #e8eaee;
  background: #fff;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.3s ease;
}

.invitation-input:focus {
  outline: none;
  border: 1px solid #a0eb41;
  color: black;
}

.invitation__button {
  color: var(--white, #fff);
  font-size: 16px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  background: var(--primary, #a0eb41);
  margin-top: 40px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.invitation__button:hover {
  color: var(--primary, #a0eb41);
  background: var(--white, #fff);
  box-shadow: inset 0 0 0 1px var(--primary, #a0eb41);
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

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

  .invitation {
    position: relative;
    margin-top: 70px;
    overflow: hidden;
  }
  .invitation__bg-top {
    position: absolute;
    top: 0;
    height: 515px;
    width: 100%;
    left: 0;
    background: #a0eb41;
    z-index: -1;
  }
  .invitation__wrapper {
    padding-top: 40px;
  }
  .invitation__top {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 23px;
  }
  .invitation__top-heading {
    margin: 0;
    max-width: 371px;
    color: var(--white, #fff);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .invitation__top-text {
    color: var(--light-text-color, #fff);
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    max-width: 667px;
  }
  .invitation__bottom {
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    box-shadow: 4px 4px 8px 8px rgba(0, 0, 0, 0.082);
    overflow: hidden;
    background: var(--light-background-color, #fff);
  }
  .invitation__bottom-left img {
    border-radius: 16px 16px 16px 16px;
    width: 100%;
    height: 258px;
  }
  .invitation__bottom-right {
    margin-left: 0;
    padding: 40px 15px 20px 15px;
    width: 100%;
  }
  .invitation__right-title {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    text-align: center;
    font-size: 18px;
    margin: 0;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 40px;
    width: 90%;
  }
  .invitation__right-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .invitation__right-top {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
  }
  .invitation__input-wrapper {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 8px;
  }
  .invitation__input-text {
    color: var(--google-typography-body, rgba(0, 0, 0, 0.68));
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
  .invitation-input {
    overflow: hidden;
    color: var(--google-typography-disable, rgba(0, 0, 0, 0.38));
    text-overflow: ellipsis;
    whitespace: nowrap;
    font-size: 15px;
    padding: 13px 15px 13px 12px;
    border-radius: 6px;
    border: 1px solid #e8eaee;
    background: #fff;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: all 0.3s ease;
  }

  .invitation-input:focus {
    outline: none;
    border: 1px solid #a0eb41;
    color: black;
  }

  .invitation__button {
    color: var(--white, #fff);
    font-size: 16px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding: 10px 16px;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 6px;
    background: var(--primary, #a0eb41);
    margin-top: 40px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .invitation__button:hover {
    color: var(--primary, #a0eb41);
    background: var(--white, #fff);
    box-shadow: inset 0 0 0 1px var(--primary, #a0eb41);
  }
}
</style>
