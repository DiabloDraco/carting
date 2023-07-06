<script>
export default {
  props: {
    img: String,
    title: String,
    text: String,
    link: String
  }
}
</script>

<template>
  <div class="catalog__card">
    <div class="catalog__card__img-wrapper">
      <img class="catalog__card__img" :src="img" alt="img" />
    </div>
    <h3 class="catalog__card-title">
      {{ title }}
    </h3>
    <p class="catalog__card-text">{{ text }}</p>
  </div>
</template>

<style>
.catalog__card {
  display: flex;
  flex-direction: column;
  max-width: 265px;
}
.catalog__card__img-wrapper {
  padding: 24px 18px 24px 19px;
  border-radius: 6px;
  background: #f4f4f4;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.catalog__card__img {
  width: 188px;
  height: 126px;
  object-fit: cover;
}
.catalog__card-title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-bottom: 8px;
}
.catalog__card-text {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .catalog__card {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 100%;
  }

  .catalog__card__img {
    width: 303px;
    height: 203px;
    object-fit: cover;
  }

  .catalog__card__img-wrapper {
    padding: 27px 6px 27px 6px;
    border-radius: 6px;
    background: #f4f4f4;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
