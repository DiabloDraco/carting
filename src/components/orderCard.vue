<script>
export default {}
</script>

<template>
  <div className="card">
    <div className="l_section">
      <div className="l_card">
        <h4 className="title">УЗБ, Ташкент</h4>
        <h6 className="text">11 сен, 22:30</h6>
        <img src="/images/green.png" alt="green circle" className="icon" />
      </div>
      <div className="l_card">
        <h4 className="title">РОС, Москва</h4>
        <h6 className="text">12 сен, 12:48</h6>
        <img src="/images/grey.png" alt="green circle" className="icon" />
      </div>
      <div className="l_card">
        <h4 className="title">Контракт составлен</h4>
        <h6 className="text">16 сен, 11:08</h6>
        <img src="/images/grey.png" alt="green circle" className="icon" />
      </div>

      <div className="left_border"></div>
    </div>

    <div className="r_section">
      <div className="top">
        <div className="text_section">
          <h3 className="title">
            <a href="/">Перевезти помидоры из Узбекистана в Россию</a>
          </h3>
          <p className="description">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id esExcepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id es
          </p>
        </div>

        <div className="main_date">
          <p className="dots">...</p>
          <p className="nums">№2326</p>
          <p className="date">11 сентябрь, 20:18</p>
        </div>
      </div>

      <div className="middle">
        <div className="price_info">
          <img src="/images/case.svg" alt="suitcase" />
          <p className="text">от <span>10,000,000</span> до <span>20,000,000</span> сум</p>
        </div>
        <div className="verify_info">
          <img src="/images/verify.svg" alt="verify icon" />
          <p className="text">Наличный расчет</p>
        </div>
      </div>

      <div className="hide_section">
        <div className="l_card">
          <h4 className="title">УЗБ, Ташкент</h4>
          <h6 className="text">11 сен, 22:30</h6>
          <img src="/images/green.png" alt="green circle" className="icon" />
        </div>
        <div className="l_card">
          <h4 className="title">Контракт составлен</h4>
          <h6 className="text">16 сен, 11:08</h6>
          <img src="/images/grey.png" alt="green circle" className="icon" />

          <div className="left_border"></div>
        </div>

        <div className="bottom_border"></div>
      </div>

      <div className="bottom">
        <p className="info">400 кг</p>
        <p className="info">18 кг/м3</p>
      </div>
    </div>
  </div>
</template>

<style>
h4 {
  margin: 0;
}
p {
  margin: 0;
}
h6 {
  margin: 0;
}
.card {
  border: 1px solid #e8eaee;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
}
.card .l_section {
  display: flex;
  flex-direction: column;
  padding-right: 36px;
  padding-left: 30px;
  gap: 35px;
  position: relative;
}
@media screen and (max-width: 834px) {
  .card .l_section {
    display: none;
  }
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
@media screen and (max-width: 834px) {
  .card .r_section {
    border-left: none;
    padding-left: 0;
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
    width: 100%;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
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
.card .r_section .hide_section {
  display: none;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 47px;
  position: relative;
  border-bottom: 1px solid #e8eaee;
}
@media screen and (max-width: 834px) {
  .card .r_section .hide_section {
    display: flex;
  }
}
.card .r_section .hide_section .l_card .icon {
  top: 120%;
  left: 0;
}
.card .r_section .hide_section .l_card:nth-of-type(2) .icon {
  left: 94%;
}
.card .r_section .hide_section .bottom_border {
  position: absolute;
  height: 3px;
  width: 100%;
  border-bottom: 1px dashed #90a4af;
  left: 0;
  top: 68%;
}
.card .r_section .bottom {
  padding-block: 18px;
  padding-bottom: 0;
  display: flex;
  gap: 10px;
}
.card .r_section .bottom .info {
  padding: 6px;
  color: #007aff;
  background-color: rgba(0, 122, 255, 0.05);
  width: fit-content;
  border-radius: 4px;
}
.card .l_card {
  position: relative;
}
.card .l_card .title {
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #282828;
  white-space: nowrap;
  margin-bottom: 5px;
}
.card .l_card .text {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #7b7d81;
}
.card .l_card .icon {
  position: absolute;
  top: 0;
  left: -20%;
  z-index: 99;
}
</style>
