<script>
export default {}
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container footer__top-wrap">
        <p class="footer__top-text">
          Загрузите приложение Carting, и получите Premium на 1 месяц бесплатно
        </p>
        <div class="footer__top-right">
          <div class="footer__top__right-item">
            <img class="footer__top__right__item-icon" src="/images/apple.png" alt="apple" />
            <div class="footer__top__right__item-wrapper">
              <p class="footer__top__wrapper-title">Доступно в</p>
              <p class="footer__top__wrapper-text">App Store</p>
            </div>
          </div>
          <div class="footer__top__right-item">
            <img class="footer__top__right__item-icon" src="/images/market.png" alt="apple" />
            <div class="footer__top__right__item-wrapper">
              <p class="footer__top__wrapper-title">Доступно в</p>
              <p class="footer__top__wrapper-text">Google Play</p>
            </div>
          </div>
          <div class="footer__top__right-item">
            <img class="footer__top__right__item-icon" src="/images/huawei.png" alt="apple" />
            <div class="footer__top__right__item-wrapper">
              <p class="footer__top__wrapper-title">Доступно в</p>
              <p class="footer__top__wrapper-text">AppGallery</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bg-wrapper">
        <img class="footer__bg" src="/images/footer-bg.png" alt="bg" />
      </div>
      <div class="container footer__bottom-wrapper-cont">
        <div class="footer__item">
          <a href="/">
            <img
              style="text-decoration: none"
              class="footer__logo"
              src="/images/footer-logo.png"
              alt="logo"
            />
          </a>
          <p class="footer__text">
            Отслеживайте перевозки на карте и автоматизируйте работу с водителем
          </p>
          <div class="footer__media">
            <div class="footer__media-item">
              <img class="footer__media__item-icon" src="/images/footer-tg.png" alt="tg" />
            </div>
            <div class="footer__media-item">
              <img class="footer__media__item-icon" src="/images/footer-inst.png" alt="inst" />
            </div>
            <div class="footer__media-item">
              <img class="footer__media__item-icon" src="/images/footer-face.png" alt="face" />
            </div>
            <div class="footer__media-item">
              <img class="footer__media__item-icon" src="/images/footer-yout.png" alt="yout" />
            </div>
          </div>
        </div>
        <div class="footer__item">
          <h3 class="footer__item-title">Заказчикам</h3>
          <ul class="footer__item-list">
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Пользовательское соглашение </a>
            </li>
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Как выбрать исполнителя </a>
            </li>
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Обратная связь </a>
            </li>
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Оплата и доставка </a>
            </li>
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Возвраты </a>
            </li>
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> О сервисе </a>
            </li>
          </ul>
        </div>
        <div class="footer__item">
          <h3 class="footer__item-title">Исполнителям</h3>
          <ul class="footer__item-list">
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Сайт для партнёров </a>
            </li>
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Справка для исполнителей </a>
            </li>
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Регистрация исполнителя </a>
            </li>
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Личный кабинет исполнителя </a>
            </li>
          </ul>
        </div>
        <div class="footer__item">
          <h3 class="footer__item-title">Сотрудничество</h3>
          <ul class="footer__item-list">
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Работа с брендом </a>
            </li>
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Партнёрская программа </a>
            </li>
            <li class="footer__item__mini">
              <a class="footer__item__mini-link" href=""> Новости компании </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container">
      <span class="footer__bottom-line"> </span>
    </div>
    <div class="footer__floor container">
      <div class="footer__start">
        <div class="footer__end-left border-right">
          <p class="footer__end__left-text">© 2023 — «Carting»</p>
        </div>
        <div class="footer__end-left border-right">
          <p class="footer__end__left-text">Условия использования</p>
        </div>
        <div class="footer__end-left border-right">
          <p class="footer__end__left-text">Политика конфиденциальности</p>
        </div>
        <div class="footer__end-left">
          <p class="footer__end__left-text">Обработка файлов cookie</p>
        </div>
      </div>
      <div class="footer__end">
        <div class="footer__end-left border-right">
          <p class="footer__end__left-text">Разработанно</p>
        </div>
        <img class="footer__end-icon" src="/images/footer-icon.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<style>
.footer {
  margin-top: 100px;
}
.footer__top {
  background: #fafafa;
  padding: 30px 0;
}

.footer__top-wrap {
  display: flex;
  justify-content: space-between;
}
.footer__top-text {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  max-width: 400px;
  width: 100%;
}
.footer__top-right {
  display: flex;
  align-items: center;
  gap: 24px;
}
.footer__top__right-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 18px 9px 15px;
  border-radius: 8px;
  background: var(--white, #fff);
  box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
}
.footer__top__right__item-icon {
  width: 35px;
  height: 35px;
  object-fit: cover;
}
.footer__top__right__item-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.footer__top__wrapper-title {
  color: var(--google-typography-body, rgba(0, 0, 0, 0.68));
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.footer__top__wrapper-text {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.footer__bottom {
  display: flex;
  position: relative;
  padding-top: 36px;
}
.footer__bg-wrapper {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  z-index: -1;
}

.footer__floor {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer__bg {
  width: 100%;
  max-height: 362px;
  margin-bottom: -10px;
}
.footer__item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.footer__logo {
  max-width: 140px;
  height: 26px;
  width: 100%;
  object-fit: cover;
}
.footer__text {
  color: var(--white, #fff);
  font-size: 15px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  max-width: 371px;
  width: 100%;
  line-height: normal;
}
.footer__media {
  display: flex;
  align-items: center;
  gap: 20px;
}
.footer__media-item {
  padding: 8px;
  border-radius: 40px;
  border: 1px solid #6b6b6b;
  background: #202020;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer__media__item-icon {
  width: 24px;
  height: 24px;
  object-fit: cover;
}
.footer__item-title {
  color: var(--white, #fff);
  font-size: 17px;

  font-weight: 500;
  line-height: normal;
  margin: 0;
  margin-bottom: 15px;
}
.footer__item-list {
  display: flex;
  flex-direction: column;
  padding: 0;
  list-style-type: none;
  gap: 10px;
}
.footer__item__mini {
}
.footer__item__mini-link {
  color: rgba(255, 255, 255, 0.68);
  text-decoration: none;
  font-size: 15px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.3s ease;
}

.footer__item__mini-link:hover {
  opacity: 0.7;
}
.footer__bottom-line {
  display: inline-block;
  background: #6d6d6d;
  width: 100%;
  height: 2px;
  margin: 0 auto;
  margin-bottom: 29px;
}
.footer__start {
  display: flex;
  gap: 15px;
}
.footer__end-left {
  display: flex;
}
.border-right {
  display: flex;
}

.footer__bottom-wrapper-cont {
  display: flex;
  gap: 30px;
}
.footer__end__left-text {
  color: var(--white, #fff);
  margin: 0;
  font-size: 15px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-right: 15px;
  border-right: 2px solid #6d6d6d;
  cursor: pointer;
  transition: all 0.3s ease;
}

.footer__end__left-text:hover {
  opacity: 0.7;
}
.footer__end {
  display: flex;
  align-items: center;
}
.footer__end-icon {
  padding-left: 15px;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .footer {
    margin-top: 100px;
  }
  .footer__top {
    background: #fafafa;
    padding: 30px 0;
  }

  .footer__top-wrap {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
  .footer__top-text {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 19px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    max-width: 400px;
    width: 100%;
    margin-bottom: 24px;
  }
  .footer__top-right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
  }
  .footer__top__right-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 18px 9px 15px;
    border-radius: 8px;
    background: var(--white, #fff);
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.08);
  }
  .footer__top__right__item-icon {
    width: 35px;
    height: 35px;
    object-fit: cover;
  }
  .footer__top__right__item-wrapper {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .footer__top__wrapper-title {
    color: var(--google-typography-body, rgba(0, 0, 0, 0.68));
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
  .footer__top__wrapper-text {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }

  .footer__bottom {
    display: flex;
    position: relative;
    padding-top: 36px;
  }
  .footer__bg-wrapper {
    position: absolute;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
    height: 1100px;
  }

  .footer__floor {
    display: flex;
    align-items: start;
    flex-direction: column;
    justify-content: space-between;
  }
  .footer__bg {
    width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    margin-bottom: -10px;
  }
  .footer__item {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .footer__logo {
    max-width: 140px;
    height: 26px;
    width: 100%;
    object-fit: cover;
  }
  .footer__text {
    color: var(--white, #fff);
    font-size: 15px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    max-width: 371px;
    width: 100%;
    line-height: normal;
  }
  .footer__media {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .footer__media-item {
    padding: 8px;
    border-radius: 40px;
    border: 1px solid #6b6b6b;
    background: #202020;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .footer__media__item-icon {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
  .footer__item-title {
    color: var(--white, #fff);
    font-size: 17px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    margin-bottom: 15px;
  }
  .footer__item-list {
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style-type: none;
    gap: 10px;
  }
  .footer__item__mini {
  }
  .footer__item__mini-link {
    color: rgba(255, 255, 255, 0.68);
    text-decoration: none;
    font-size: 15px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: all 0.3s ease;
  }

  .footer__item__mini-link:hover {
    opacity: 0.7;
  }
  .footer__bottom-line {
    display: inline-block;
    background: #6d6d6d;
    width: 100%;
    height: 2px;
    margin: 0 auto;
    margin-bottom: 29px;
  }
  .footer__start {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 15px;
  }
  .footer__end-left {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  .border-right {
    display: flex;
  }
  .footer__end__left-text {
    color: var(--white, #fff);
    margin: 0;
    font-size: 15px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    padding-right: 15px;
    border-right: none;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .footer__bottom-wrapper-cont {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .footer__end__left-text:hover {
    opacity: 0.7;
  }
  .footer__end {
    display: flex;
    margin-top: 20px;
    align-items: center;
  }
  .footer__end-icon {
    padding-left: 15px;
  }
}
</style>
