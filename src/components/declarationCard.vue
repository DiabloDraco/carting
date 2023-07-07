<script>
export default {}
</script>

<template>
  <div class="card">
    <div class="l_section">
      <img src="/images/truck1.png" alt="truck image" class="image" />
    </div>

    <div class="r_section">
      <div class="top">
        <div class="text_section">
          <h3 class="title">
            <router-link to="/">Перевезти помидоры из Узбекистана в Россию</router-link>
          </h3>
          <p class="description">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id esExcepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </p>
        </div>

        <div class="main_date">
          <p class="dots">...</p>
          <p class="nums">№2326</p>
          <p class="date">11 сентябрь, 20:18</p>
        </div>
      </div>

      <div class="middle">
        <div class="price_info">
          <img src="/images/suitcase.svg" alt="suitcase" />
          <p class="text">
            <span>$35.000</span>
          </p>
        </div>
        <div class="verify_info">
          <img src="/images/verify.svg" alt="verify icon" />
          <p class="text">Наличный расчет</p>
        </div>
      </div>

      <div class="bottom">
        <div class="truck_info">
          <img src="/images/fuel.svg" alt="gas icon" class="icon" />
          <p class="text">Дизельный</p>
        </div>
        <div class="truck_info">
          <img src="/images/truck.svg" alt="truck icon" class="icon" />
          <p class="text">25 т</p>
        </div>
        <div class="truck_info">
          <img src="/images/energy.svg" alt="thunder icon" class="icon" />
          <p class="text">480 л.с.</p>
        </div>
        <div class="truck_info">
          <img src="/images/transmission.svg" alt="mechanic icon" class="icon" />
          <p class="text">Механическая</p>
        </div>
        <div class="truck_info">
          <img src="/images/speed.svg" alt="speed icon" class="icon" />
          <p class="text">866 тыс. км</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #e8eaee;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
}
@media screen and (max-width: 768px) {
  .card {
    flex-direction: column;
  }
}
.card .l_section {
  display: flex;
  cursor: pointer;
}
.card .l_section .image {
  object-fit: cover;
  object-position: center;
  border-radius: 3px;
}
@media screen and (max-width: 768px) {
  .card .l_section .image {
    width: 100%;
    height: 200px;
  }
}
.card .l_section .l_card {
  position: relative;
}
.card .l_section .l_card .title {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #282828;
  white-space: nowrap;
  margin-bottom: 5px;
}
.card .l_section .l_card .text {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7b7d81;
}
.card .l_section .l_card .icon {
  position: absolute;
  top: 0;
  left: -20%;
  z-index: 99;
}
.card .l_section .left_border {
  position: absolute;
  border-left: 1px dashed #90a4af;
  width: 2px;
  height: 75%;
  left: 4.5%;
}
.card .r_section {
  flex: auto;
  border-left: 1px solid #e8eaee;
  padding-left: 20px;
}
@media screen and (max-width: 768px) {
  .card .r_section {
    padding: 0;
    border: none;
  }
}
.card .r_section .top {
  display: flex;
  gap: 55px;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid #e8eaee;
  align-items: flex-start;
}
@media screen and (max-width: 768px) {
  .card .r_section .top {
    flex-direction: column-reverse;
    gap: 8px;
  }
}
.card .r_section .top .text_section .title {
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 10px;
}
.card .r_section .top .text_section .title a {
  color: rgba(0, 0, 0, 0.87);
  text-decoration: none;
}
.card .r_section .top .text_section .title:hover a {
  text-decoration: underline;
}
.card .r_section .top .text_section .description {
  font-weight: 400;
  font-size: 13px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.68);
}
.card .r_section .top .main_date {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
}
@media screen and (max-width: 768px) {
  .card .r_section .top .main_date {
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
  }
}
.card .r_section .top .main_date .dots {
  font-size: 25px;
  font-weight: 800;
  cursor: pointer;
}
.card .r_section .top .main_date .nums {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #ff9500;
}
@media screen and (max-width: 768px) {
  .card .r_section .top .main_date .nums {
    flex: auto;
  }
}
.card .r_section .top .main_date .date {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.87);
  white-space: nowrap;
}
.card .r_section .middle {
  display: flex;
  gap: 20px;
  padding-block: 15px;
  border-bottom: 1px solid #e8eaee;
}
@media screen and (max-width: 600px) {
  .card .r_section .middle {
    flex-direction: column;
  }
}
.card .r_section .middle .price_info {
  display: flex;
  gap: 10px;
  align-items: center;
}
.card .r_section .middle .price_info img {
  width: 16px;
  height: 16px;
}
.card .r_section .middle .price_info .text {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.38);
}
.card .r_section .middle .price_info .text span {
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: rgba(0, 0, 0, 0.87);
  margin-bottom: 10px;
}
.card .r_section .middle .verify_info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.card .r_section .middle .verify_info img {
  width: 16px;
  height: 16px;
}
.card .r_section .middle .verify_info .text {
  white-space: nowrap;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.87);
}
.card .r_section .bottom {
  padding-block: 18px;
  display: flex;
  gap: 25px;
  align-items: center;
  padding-bottom: 0;
  flex-wrap: wrap;
}
.card .r_section .bottom .truck_info {
  display: flex;
  gap: 15px;
  align-items: center;
}
.card .r_section .bottom .truck_info .text {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.87);
}
</style>
