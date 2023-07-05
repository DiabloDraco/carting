<script>
export default {
  data() {
    return {
      dropdown: false,
      currentLang: {
        id: 1,
        lang: 'Узб',
        value: 'uz'
      },
      isLogged: false,
      isMenu: false,
      langs: [
        {
          id: 1,
          lang: 'Узб',
          value: 'uz'
        },
        {
          id: 2,
          lang: 'Uzb',
          value: 'la'
        },
        {
          id: 3,
          lang: 'Рус',
          value: 'ru'
        },
        {
          id: 4,
          lang: 'Eng',
          value: 'en'
        }
      ]
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdown = !this.dropdown
    },
    tryLang() {
      const params = new URLSearchParams(window.location.search)
      const paramName = params.get('lang')
      let finded = this.langs.find((item) => item.value == paramName)
      if (finded) {
        this.currentLang = finded
      }
    },
    changeLang(item) {
      this.currentLang = item
      const url = new URL(window.location.href)
      url.search = ''
      history.replaceState(null, '', url.href)
      const params = new URLSearchParams(window.location.search)
      params.set('lang', item.value)
      const newUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`
      window.location.href = newUrl
    },
    openSlide() {
      this.isMenu = !this.isMenu
      let body = document.querySelector('body')
      if (body.style.overflowY == 'hidden') {
        body.style.overflowY = 'scroll'
      } else {
        body.style.overflowY = 'hidden'
      }
    }
  },
  mounted() {
    this.tryLang()
  }
}
</script>

<template>
  <div style="width: 100%" class="header__top mobile">
    <a class="header__logo-link" href="">
      <img class="header__logo" src="/images/logo.svg" alt="logo" />
    </a>
    <p @click="openSlide" class="header__logo-cross" href="">
      <img class="header__cross" src="/images/burger.svg" alt="logo" />
    </p>
  </div>
  <header :class="{ openHeader: isMenu }" class="header">
    <div class="header__left">
      <div class="header__top">
        <a class="header__logo-link" href="">
          <img class="header__logo" src="/images/logo.svg" alt="logo" />
        </a>
        <p @click="openSlide" class="header__logo-cross" href="">
          <img class="header__cross" src="/images/cross.svg" alt="logo" />
        </p>
      </div>
      <nav class="header__nav">
        <hr class="mobile" />
        <ul class="header__list">
          <li :class="{ flex: isLogged }" class="header__item none mobile">
            <div class="header__item-top">
              <img class="header__person-icon" src="/images/person.png" alt="person" />
              <p class="header__person-text">Savlat Sultonov</p>
            </div>
            <div class="header__item-bottom">
              <a class="header__right-cabinet-sign">
                <img class="header__right-plus" src="/images/plus.svg" alt="plus" />
                <p class="header__right__cabinet-text-sign">Вход</p>
              </a>
              <a class="header__right-cabinet">
                <p class="header__right__cabinet-text">Регистрация</p>
              </a>
            </div>
          </li>
          <li :class="{ flex: !isLogged }" class="header__item none mobile">
            <div class="header__item-bottom">
              <a class="header__right-cabinet-sign sign1">
                <p class="header__right__cabinet-text-sign">Вход</p>
              </a>
              <a class="header__right-cabinet sign2">
                <p class="header__right__cabinet-text">Регистрация</p>
              </a>
            </div>
          </li>
          <li class="header__item">
            <a class="header__item-link" href=""> Заказы </a>
          </li>
          <li class="header__item">
            <a class="header__item-link" href=""> Услуги </a>
          </li>
          <li class="header__item">
            <a class="header__item-link" href=""> Каталог машин </a>
          </li>
          <li class="header__item">
            <a class="header__item-link" href=""> Объявления </a>
          </li>
        </ul>
        <hr class="mobile" />
      </nav>
    </div>
    <div class="header__right">
      <a class="header__right-location none" href="">
        <img class="header__right__location-icon" src="/images/location.svg" alt="location" />
      </a>
      <div
        :class="{ height__drop: dropdown }"
        @click="toggleDropdown"
        class="header__right-dropdown"
      >
        <div class="header__right-current">
          <img class="header__right-img" :src="`/images/${currentLang.value}.png`" alt="flag" />
          <p class="header__right-text">{{ currentLang?.lang }}</p>
          <img
            :class="{ arrow__top: dropdown }"
            class="header__right-arrow"
            src="/images/arrow-bottom.svg"
            alt="arrow"
          />
        </div>
        <ul :class="{ drop: dropdown }" class="header__right__dropdown-list">
          <li
            v-for="(item, index) in langs"
            v-show="item.lang != currentLang.lang"
            class="header__right__dropdown-item"
            @click="changeLang(item)"
          >
            <img
              v-if="item.value != currentLang.value"
              class="header__right-img"
              :src="`/images/${item.value}.png`"
              alt="flag"
            />
            <p v-if="item.value != currentLang.value" class="header__right-text">{{ item.lang }}</p>
          </li>
        </ul>
      </div>
      <a v-show="!isLogged" class="header__right-cabinet none">
        <p class="header__right__cabinet-text">Регистрация</p>
      </a>
      <a v-show="!isLogged" class="header__right-cabinet-sign none">
        <p class="header__right__cabinet-text-sign">Вход</p>
      </a>
      <a v-show="isLogged" class="header__right-cabinet-black none">
        <img src="/images/user.svg" alt="" />
        <p class="header__right__cabinet-text-black">Кабинет</p>
      </a>
    </div>
  </header>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 0;
}

.header__logo-link {
  text-decoration: none;
}

.header__logo {
  width: 147px;
  height: 27.2px;
  object-fit: cover;
}

.header__nav {
  display: flex;
  align-items: center;
}

.header__list {
  display: flex;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 30px;
  margin-left: 32.7px;
}

.header__item {
  position: relative;
}

.header__item-link {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 15px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
  transition: all 0.3s ease;
}

.header__item-link::after {
  content: '';
  display: inline-block;
  width: 0;
  height: 1px;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
  transition: all 0.5s ease;
}

.header__item-link:hover {
  color: #1b7244;
}

.header__item:hover .header__item-link::after {
  width: 100%;
  background: #1b7244;
}

.header__left {
  display: flex;
}

.header__right {
  display: flex;
  align-items: center;
}

.header__right-location {
  text-decoration: none;
  width: 24px;
  height: 24px;
}

.header__right__location-icon {
  width: 24px;
  height: 24px;
  object-fit: cover;
}

.header__right__dropdown-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  width: 100%;
}

.header__right-dropdown {
  max-width: 107px;
  max-height: 41px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow-y: hidden;
  margin-left: 21px;
  flex-direction: column;
  position: relative;
  background: #f6f6f6;
  padding: 2px 10px;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;
  z-index: 1;
}

.header__right-current {
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: #f6f6f6;
  padding: 4px 10px;
  cursor: pointer;
  gap: 5px;
  user-select: none;
}

.header__right-img {
  width: 24px;
  height: 24px;
  object-fit: cover;
}

.header__right-text {
  margin: 0;
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.header__right-arrow {
  width: 17px;
  height: 17px;
  object-fit: contain;
  margin-left: 5px;
  transition: all 0.3s ease;
}

.header__right-cabinet {
  border-radius: 6px;
  background: #a0eb41;
  padding: 10px;
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: 21px;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.header__right-cabinet:hover {
  background: white;
  box-shadow: inset 0 0 0 1px #a0eb41;
}

.header__right-cabinet:active {
  opacity: 0.7;
}

.header__right__cabinet-user {
  width: 22px;
  height: 22px;
  object-fit: cover;
}

.mobile {
  display: none;
}

.header__right__cabinet-text {
  color: var(--white, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  transition: all 0.3s ease;
}

.header__right-cabinet:hover .header__right__cabinet-text {
  color: #a0eb41;
}

.header__right__cabinet-text-sign {
  color: #a0eb41;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  transition: all 0.3s ease;
}

.header__right-cabinet-sign {
  border-radius: 6px;
  background: white;
  box-shadow: inset 0 0 0 1px #a0eb41;
  padding: 10px;
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: 21px;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
}

.header__right-cabinet-sign:hover {
  background: #a0eb41;
}

.header__right-cabinet-sign:active {
  opacity: 0.7;
}

.header__right-cabinet-sign:hover .header__right__cabinet-text-sign {
  color: white;
}

.height__drop {
  max-height: 100%;
  overflow: initial;
}

.header__right__dropdown-item {
  display: flex;
  align-items: center;
  background: #f6f6f6;
  padding: 8px 18px;
  cursor: pointer;
  user-select: none;
  gap: 5px;
}

.arrow__top {
  transform: rotate(180deg);
}

.header__right-cabinet-black {
  border-radius: 6px;
  background: #292929;
  padding: 10px;
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: 21px;
  cursor: pointer;
  transition: all 0.3s ease;
  user-select: none;
  transition: all 0.3s ease;
}

.header__right-cabinet-black:hover {
  background: white;
  box-shadow: inset 0 0 0 1px #292929;
}

.header__right-cabinet-black img {
  transition: all 0.3s ease;
}

.header__right-cabinet-black:hover img {
  filter: brightness(1) invert(1);
}

.header__right-cabinet-black:hover .header__right__cabinet-text-black {
  color: #292929;
}

.header__right__cabinet-text-black {
  color: var(--white, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  transition: all 0.3s ease;
}

.drop {
}

.header__logo-cross {
  display: none;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .header {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    padding: 25px 0;
    background: white;
    position: fixed;
    width: 100%;
    height: 100vh;
    transform: translateX(120%);
    transition: all 0.3s ease;
    padding-left: 20px;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;
  }

  .openHeader {
    transform: translateX(0);
  }

  .mobile .header__right-cabinet-sign {
    margin: 0;
  }

  .mobile .header__item-bottom {
    margin: 0;
    margin-top: 37px;
  }

  .header__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header__logo-link {
    text-decoration: none;
  }

  .header__logo {
    width: 147px;
    height: 27.2px;
    object-fit: cover;
  }

  .header__nav {
    display: flex;
    align-items: center;
  }

  .header__logo-cross {
    display: flex;
  }

  .header__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style-type: none;
    padding: 0;
    gap: 30px;
    width: 100%;
    margin: 0;
    align-items: start;
  }

  .header__cross {
    width: 30px;
    height: 30px;
    object-fit: cover;
  }

  .header__item {
    position: relative;
  }

  .header__item-link {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 15px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .header__item-link::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 1px;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 8px;
    transition: all 0.5s ease;
  }

  .mobile {
    display: block;
  }

  .header__item-link:hover {
    color: #1b7244;
  }

  .header__item:hover .header__item-link::after {
    width: 100%;
    background: #1b7244;
  }

  .header__left {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .header__right {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .header__right-location {
    text-decoration: none;
    width: 24px;
    height: 24px;
  }

  .header__right__location-icon {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  .header__right__dropdown-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
  }

  .header__right-dropdown {
    max-width: 107px;
    max-height: 41px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: start;
    overflow-y: hidden;
    margin-left: 0;
    justify-content: start;
    flex-direction: column;
    position: relative;
    background: #f6f6f6;
    padding: 2px 10px;
    cursor: pointer;
    user-select: none;
    transition: all 0.3s;
    margin-top: 25px;
  }

  .header__right-current {
    display: flex;
    align-items: center;
    border-radius: 6px;
    background: #f6f6f6;
    padding: 4px 10px;
    cursor: pointer;
    gap: 5px;
    user-select: none;
  }

  .header__right-img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }

  .header__right-text {
    margin: 0;
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .header__right-arrow {
    width: 17px;
    height: 17px;
    object-fit: contain;
    margin-left: 5px;
    transition: all 0.3s ease;
  }

  .header__person-text {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .header__person-icon {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }

  .header__right-cabinet {
    border-radius: 6px;
    background: #a0eb41;
    padding: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
    margin-left: 21px;
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
  }

  .header__right-cabinet:hover {
    background: white;
    box-shadow: inset 0 0 0 1px #a0eb41;
  }

  .header__right-cabinet:active {
    opacity: 0.7;
  }

  .header__right__cabinet-user {
    width: 22px;
    height: 22px;
    object-fit: cover;
  }

  .header__right__cabinet-text {
    color: var(--white, #fff);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    transition: all 0.3s ease;
  }

  .header__right-cabinet:hover .header__right__cabinet-text {
    color: #a0eb41;
  }

  .header__right__cabinet-text-sign {
    color: #a0eb41;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    transition: all 0.3s ease;
  }

  .header__right-cabinet-sign {
    border-radius: 6px;
    background: white;
    box-shadow: inset 0 0 0 1px #a0eb41;
    padding: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
    margin-left: 21px;
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
  }

  .header__right-cabinet-sign:hover {
    background: #a0eb41;
  }

  .header__right-cabinet-sign:active {
    opacity: 0.7;
  }

  .header__right-cabinet-sign:hover .header__right__cabinet-text-sign {
    color: white;
  }

  .height__drop {
    max-height: 100%;
    overflow: initial;
  }

  .header__right__dropdown-item {
    display: flex;
    align-items: center;
    background: #f6f6f6;
    padding: 8px 18px;
    cursor: pointer;
    user-select: none;
    gap: 5px;
  }

  .none {
    display: none;
  }

  .arrow__top {
    transform: rotate(180deg);
  }

  .header__right-cabinet-black {
    border-radius: 6px;
    background: #292929;
    padding: 10px;
    display: flex;
    gap: 5px;
    align-items: center;
    margin-left: 21px;
    cursor: pointer;
    transition: all 0.3s ease;
    user-select: none;
    transition: all 0.3s ease;
  }

  .sign1 {
    padding: 10px 32px;
  }

  .sign2 {
    max-width: 300px;
    width: 100%;
    padding: 10px 50px;
  }

  .header__right-cabinet-black:hover {
    background: white;
    box-shadow: inset 0 0 0 1px #292929;
  }

  .header__right-cabinet-black img {
    transition: all 0.3s ease;
  }

  .header__item-bottom {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
  }

  .header__right-cabinet-black:hover img {
    filter: brightness(1) invert(1);
  }

  .header__right-cabinet-black:hover .header__right__cabinet-text-black {
    color: #292929;
  }

  .header__right__cabinet-text-black {
    color: var(--white, #fff);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    transition: all 0.3s ease;
  }

  .header__item-top {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;
  }

  .flex {
    display: block;
  }

  .drop {
  }

  .header__top.mobile {
    display: flex;
  }
}
</style>
