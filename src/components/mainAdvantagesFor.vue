<script>
export default {}
</script>

<template>
  <section class="fora">
    <h2 class="fora__title">Преимущества для</h2>
    <div class="fora__list">
      <div class="fora__list-item">
        <div class="fora__item-top">
          <img class="fora__item-img" src="/images/fora1.png" alt="" />
          <p class="fora__item-text">Поставщики</p>
        </div>
        <span class="fora__item-line"></span>
        <div class="fora__item-middle">
          <ul class="fora__item-list">
            <li class="fora__item-text-item">Сокращение простоя</li>
            <li class="fora__item-text-item">Сокращение простоя</li>
            <li class="fora__item-text-item">Сокращение простоя</li>
          </ul>
        </div>
        <button class="fora__item-btn">Войти</button>
      </div>
      <div class="fora__list-item">
        <div class="fora__item-top">
          <img class="fora__item-img" src="/images/fora1.png" alt="" />
          <p class="fora__item-text">Поставщики</p>
        </div>
        <span class="fora__item-line"></span>
        <div class="fora__item-middle">
          <ul class="fora__item-list">
            <li class="fora__item-text-item">Сокращение простоя</li>
            <li class="fora__item-text-item">Сокращение простоя</li>
            <li class="fora__item-text-item">Сокращение простоя</li>
          </ul>
        </div>
        <button class="fora__item-btn">Войти</button>
      </div>
      <div class="fora__list-item">
        <div class="fora__item-top">
          <img class="fora__item-img" src="/images/fora1.png" alt="" />
          <p class="fora__item-text">Поставщики</p>
        </div>
        <span class="fora__item-line"></span>
        <div class="fora__item-middle">
          <ul class="fora__item-list">
            <li class="fora__item-text-item">Сокращение простоя</li>
            <li class="fora__item-text-item">Сокращение простоя</li>
            <li class="fora__item-text-item">Сокращение простоя</li>
          </ul>
        </div>
        <button class="fora__item-btn">Войти</button>
      </div>
      <div class="fora__list-item">
        <div class="fora__item-top">
          <img class="fora__item-img" src="/images/fora1.png" alt="" />
          <p class="fora__item-text">Поставщики</p>
        </div>
        <span class="fora__item-line"></span>
        <div class="fora__item-middle">
          <ul class="fora__item-list">
            <li class="fora__item-text-item">Сокращение простоя</li>
            <li class="fora__item-text-item">Сокращение простоя</li>
            <li class="fora__item-text-item">Сокращение простоя</li>
          </ul>
        </div>
        <button class="fora__item-btn">Войти</button>
      </div>
    </div>
  </section>
</template>

<style>
.fora {
  margin-top: 70px;
}

.fora__title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 18px;
  margin: 0;
  margin-bottom: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  text-transform: uppercase;
}
.fora__list {
  display: flex;
  align-items: center;
  gap: 24px;
}
.fora__list-item {
  display: flex;
  width: 272px;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  background: #fff;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.082);
  transition: all 0.3s ease;
}

.fora__list-item:hover {
  transform: scale(1.03);
}
.fora__item-top {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
}
.fora__item-img {
  width: 37px;
  height: 33px;
  object-fit: cover;
}
.fora__item-text {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.fora__item-line {
  display: inline-block;
  margin-top: 12px;
  margin-bottom: 12px;
  width: 100%;
  height: 1px;
  background-color: #e9e9e9;
}
.fora__item-middle {
}
.fora__item-list {
  display: flex;
  flex-direction: column;
  padding-left: 28px;
  margin: 0;
  gap: 15px;
}

.fora__item-text-item {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 15px;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.fora__item-btn {
  margin-top: 20px;
  border-radius: 6px;
  background: var(--primary, #a0eb41);
  color: var(--white, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 10px 16px;
  transition: all 0.3s ease;
  cursor: pointer;
}

.fora__item-btn:hover {
  background: var(--white, #fff);
  color: var(--primary, #a0eb41);
  box-shadow: inset 0 0 0 1px var(--primary, #a0eb41);
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .fora {
    margin-top: 70px;
  }

  .fora__title {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 18px;
    margin: 0;
    margin-bottom: 44px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-align: center;
    text-transform: uppercase;
  }
  .fora__list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
  .fora__list-item {
    display: flex;
    width: 272px;
    padding: 24px;
    flex-direction: column;
    align-items: center;
    border-radius: 16px;
    background: #fff;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.082);
  }
  .fora__item-top {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 15px;
  }
  .fora__item-img {
    width: 37px;
    height: 33px;
    object-fit: cover;
  }
  .fora__item-text {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: 0;
  }

  .fora__item-line {
    display: inline-block;
    margin-top: 12px;
    margin-bottom: 12px;
    width: 100%;
    height: 1px;
    background-color: #e9e9e9;
  }
  .fora__item-middle {
  }
  .fora__item-list {
    display: flex;
    flex-direction: column;
    padding-left: 28px;
    margin: 0;
    gap: 15px;
  }

  .fora__item-text-item {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 15px;
    margin: 0;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .fora__item-btn {
    margin-top: 20px;
    border-radius: 6px;
    background: var(--primary, #a0eb41);
    color: var(--white, #fff);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 10px 16px;
    transition: all 0.3s ease;
  }
}
</style>
