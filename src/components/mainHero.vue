<script>
export default {}
</script>

<template>
  <section data-aos="zoom-in-down" class="hero">
    <div class="hero__bg">
      <img class="hero__bg-img" src="/images/hero-bg.png" alt="bg" />
    </div>
    <img class="hero__fura" src="/images/fura.png" alt="" />
    <div class="hero__wrapper">
      <h2 class="hero__title">Площадка транспортных услуг</h2>
      <div class="hero__btn-wrapper">
        <a class="hero__btn-left" href="">
          <img class="hero__btn__left-icon" src="/images/plus-dark.svg" alt="plus" />
          <p class="hero__btn__left-text">Добавить груз</p>
        </a>
        <a class="hero__btn-right" href="">Добавить машину</a>
      </div>
    </div>
  </section>
</template>

<style>
.hero {
  position: relative;
}
.hero__bg {
  position: absolute;
  z-index: -1;
}
.hero__bg-img {
}
.hero__fura {
  position: absolute;
  top: 100%;
  right: 0;
}
.hero__wrapper {
  padding-top: 95px;
  padding-left: 50px;
}
.hero__title {
  color: var(--white, #fff);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  margin-bottom: 30px;
}
.hero__btn-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.hero__btn-left {
  display: flex;
  align-items: center;
  gap: 5px;
  border-radius: 6px;
  background: var(--white, #fff);
  padding: 10px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.hero__btn-left:hover {
  background: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
}

.hero__btn-left:hover .hero__btn__left-text {
  color: white;
}

.hero__btn-left:hover .hero__btn__left-icon {
  filter: brightness(1) invert(1);
}

.hero__btn__left-icon {
  width: 22px;
  height: 22px;
  object-fit: cover;
  transition: all 0.3s ease;
}
.hero__btn__left-text {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 15px;

  font-weight: 400;
  line-height: normal;
  transition: all 0.3s ease;
  margin: 0;
}
.hero__btn-right {
  color: var(--white, #fff);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
  text-decoration: none;
  border-radius: 6px;
  border: 1px solid #fff;
  transition: all 0.3s ease;
}

.hero__btn-right:hover {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  background-color: var(--white, #fff);
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .hero {
  }

  .hero__btn-wrapper {
    display: none;
  }

  .hero__bg-img {
    width: 100%;
    height: 194px;
    object-fit: cover;
    border-radius: 20px;
  }

  .hero__wrapper {
    padding: 27px 52px;
  }

  .hero__title {
    color: var(--white, #fff);
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .header__top {
    width: 90%;
  }

  .hero__fura {
    width: 348px;
    height: 138px;
    top: 69%;
    right: -20px;
  }
}
</style>
