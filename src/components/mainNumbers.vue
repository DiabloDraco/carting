<script>
export default {
  data() {},
  methods: {
    setCounter(upperto, element) {
      let counts = setInterval(updated)
      let upto = 0
      function updated() {
        let count = document.querySelector(element)
        count.innerHTML = ++upto
        if (upto === upperto) {
          clearInterval(counts)
        }
      }
    }
  },
  mounted() {
    this.setCounter(126, '#order')
    this.setCounter(500, '#frilansers')
    this.setCounter(255, '#customers')
    this.setCounter(26, '#services')
    this.setCounter(112, '#transports')
  }
}
</script>

<template>
  <section>
    <div class="numbers">
      <h2 class="numbers__title">Carting в цифрах</h2>
      <div class="numbers__wrapper">
        <div class="numbers__item">
          <h3 id="order" class="numbers__item-title">126</h3>
          <p class="numbers__item-text">Заказов</p>
        </div>
        <div class="numbers__item">
          <h3 id="frilansers" class="numbers__item-title">500</h3>
          <p class="numbers__item-text">Исполнителей</p>
        </div>
        <div class="numbers__item">
          <h3 id="customers" class="numbers__item-title">255</h3>
          <p class="numbers__item-text">Заказчиков</p>
        </div>
        <div class="numbers__item">
          <h3 id="services" class="numbers__item-title">26</h3>
          <p class="numbers__item-text">Услуги</p>
        </div>
        <div class="numbers__item">
          <h3 id="transports" class="numbers__item-title">112</h3>
          <p class="numbers__item-text">Транспорта</p>
        </div>
      </div>
      <div class="numbers__bg">
        <img class="numbers__image" src="/images/bg-cart.png" alt="bg" />
      </div>
    </div>
  </section>
</template>

<style>
.numbers {
  margin-top: 60px;
  position: relative;
  height: 286px;
  padding: 50px 0;
}
.numbers__title {
  color: var(--white, #fff);
  font-size: 26px;
  margin: 0;
  margin-bottom: 58px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
}
.numbers__wrapper {
  display: flex;
  justify-content: space-around;
}
.numbers__item {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.numbers__item-title {
  color: #fff;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  margin: 0;
}
.numbers__item-text {
  color: var(--white, #fff);
  text-align: center;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.numbers__bg {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
}
.numbers__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .numbers {
    margin-top: 60px;
    position: relative;
    height: 460px;
    padding: 50px 0;
  }
  .numbers__title {
    margin: 0;
    margin-bottom: 50px;
    color: var(--white, #fff);
    font-size: 17px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }
  .numbers__wrapper {
    display: flex;
    justify-content: space-around;
    padding: 0 16px;
    flex-wrap: wrap;
    gap: 54px;
  }
  .numbers__item {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .numbers__item-title {
    color: #fff;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin: 0;
  }
  .numbers__item-text {
    color: var(--white, #fff);
    text-align: center;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
  .numbers__bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }
  .numbers__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
