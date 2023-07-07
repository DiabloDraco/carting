<script>
export default {}
</script>

<template>
  <div class="service__card">
    <div class="service__card-left">
      <img src="/images/truck1.png" alt="truck image" class="image" />
    </div>

    <div class="service__card-right">
      <div class="service__card__top">
        <div class="service__card__date-wrapper">
          <p class="service__card-date">11 сентябрь, 20:18</p>
          <p class="service__card-num">№2326</p>
        </div>
        <div class="service__card-wrapper">
          <h3 class="service__card-title">
            <router-link to="/">Перевезти помидоры из Узбекистана в Россию</router-link>
          </h3>
          <div class="service__card-location">
            <img src="/images/location.png" alt="location icon" class="icon" />
            <a href="/" class="service__card__location-text">
              Ташкентская область, Бостанлыкский район, Газалкент, 91
            </a>
          </div>
        </div>
      </div>

      <div class="service__card-middle">
        <div class="service__card__middle__price-wrapper">
          <img src="/images/suitcase.svg" alt="suitcase" />
          <p class="service__card__middle-price">
            <span>$35.000</span>
          </p>
        </div>
        <div class="service__card__middle__verify-wrapper">
          <img src="/images/verify.svg" alt="verify icon" />
          <p class="service__card__middle-verify">Наличный расчет</p>
        </div>
      </div>

      <div class="service__card__middle__weight-wrapper">
        <p class="service__card__middle-weight">400 кг</p>
        <p class="service__card__middle-speed">18 кг/м3</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service__card {
  display: flex;
  border-radius: 6px;
  max-width: 735px;
  width: 100%;
  border: 1px solid #e8eaee;
  background: var(--white, #fff);
  padding: 15px;
}
.service__card-left {
  width: 242px;
  height: 200px;
  flex-shrink: 0;
}
.image {
  width: 242px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
.service__card-right {
  display: flex;
  flex-direction: column;
}
.service__card__top {
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  gap: 10px;
}
.service__card__date-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.service__card-date {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.service__card-num {
  color: var(--orange, #ff9500);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.service__card-wrapper {
}

.service__card-title {
  margin: 0;
  margin-bottom: 10px;
}
.service__card-title a {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
}
.service__card-location {
  display: flex;
  align-items: center;
  gap: 5px;
}
.icon {
  width: 24px;
  height: 24px;
  object-fit: cover;
}
.service__card__location-text {
  color: var(--blue, #007aff);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  margin: 0;
}
.service__card-middle {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-top: 2px solid #e8eaee;
  border-bottom: 2px solid #e8eaee;
  margin: 18.5px 0;
  padding-left: 20px;
}
.service__card__middle__price-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.service__card__middle-price {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
}
.service__card__middle__verify-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.service__card__middle-verify {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  line-height: normal;
}
.service__card__middle__weight-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 20px;
}
.service__card__middle-weight {
  color: var(--blue, #007aff);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
  padding: 6px;
  border-radius: 4px;
  background: rgba(0, 122, 255, 0.05);
}
.service__card__middle-speed {
  color: var(--blue, #007aff);
  margin: 0;
  padding: 6px;
  border-radius: 4px;
  background: rgba(0, 122, 255, 0.05);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .service__card {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    max-width: 735px;
    width: 100%;
    border: 1px solid #e8eaee;
    background: var(--white, #fff);
    padding: 15px;
  }
  .service__card-left {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;

    flex-shrink: 0;
  }
  .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
  .service__card-right {
    display: flex;
    flex-direction: column;
  }
  .service__card__top {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
    gap: 10px;
  }
  .service__card__date-wrapper {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 15px;
  }
  .service__card-date {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
  .service__card-num {
    color: var(--orange, #ff9500);
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
  .service__card-wrapper {
  }

  .service__card-title {
    margin: 0;
    margin-bottom: 10px;
  }
  .service__card-title a {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
  }
  .service__card-location {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .icon {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
  .service__card__location-text {
    color: var(--blue, #007aff);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    margin: 0;
  }
  .service__card-middle {
    display: flex;
    align-items: start;
    flex-direction: column;
    gap: 20px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-top: 2px solid #e8eaee;
    border-bottom: 2px solid #e8eaee;
    margin: 18.5px 0;
    padding-left: 5px;
  }
  .service__card__middle__price-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .service__card__middle-price {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
  }
  .service__card__middle__verify-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .service__card__middle-verify {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    margin: 0;
    line-height: normal;
  }
  .service__card__middle__weight-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 5px;
  }
  .service__card__middle-weight {
    color: var(--blue, #007aff);
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    padding: 6px;
    border-radius: 4px;
    background: rgba(0, 122, 255, 0.05);
  }
  .service__card__middle-speed {
    color: var(--blue, #007aff);
    margin: 0;
    padding: 6px;
    border-radius: 4px;
    background: rgba(0, 122, 255, 0.05);
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
