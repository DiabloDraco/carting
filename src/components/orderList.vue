<script>
import OrderCard from './orderCard.vue'

export default {
  props: {
    items: Array
  },
  data() {
    return {
      isDrop: false
    }
  },
  methods: {
    setDrop() {
      this.isDrop = !this.isDrop
    },
    openFilter() {
      let filter = document.querySelector('.order__filter')
      filter.classList.toggle('openFilter')
    }
  },
  components: {
    OrderCard
  }
}
</script>

<template>
  <div class="container">
    <div class="order__list">
      <div class="order__list-top">
        <div class="order__lists__top-left">
          <h2 class="order__list-title">Заказы</h2>
          <p class="order__lists-text">Найдено 523,000 заказов</p>
        </div>
        <div class="order__lists__top-right">
          <div class="order__lists__top-right-filter">
            <img
              class="order__lists__top__right__filter-icon"
              src="/images/filter.svg"
              alt="filter"
            />
            <p @click="openFilter" class="order__lists__top__right__filter-text">Фильтр</p>
          </div>
          <div @click="setDrop" class="order__lists__top-right-sort">
            <img src="/images/sort.svg" alt="" />
            <p class="order__lists__top__right-text">Сортировать</p>
            <div :class="{ dropped: isDrop }" class="order__lists__dropdown">
              <div class="order__lists-item">Новые</div>
              <div class="order__lists-item">Актуальные</div>
              <div class="order__lists-item">Популярные</div>
            </div>
          </div>
        </div>
      </div>
      <div class="order__lists-list">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  </div>
</template>

<style>
.order__lists__dropdown {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 120%;
  left: 20%;
  max-height: 0;
  height: 100%;
  overflow: hidden;
  transition: all 0.3s ease;
  border-radius: 10px;
  z-index: 3;
}
.order__lists__dropdown.dropped {
  max-height: 100%;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.055);
  overflow: visible;
  background-color: white;
}
.container {
}

.order__lists-item {
  margin: 0;
  transition: all 0.3s ease;
  padding: 10px 5px;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.089);
}

.order__lists-item:first-child {
  border-radius: 10px 10px 0 0;
}

.order__lists-item:last-child {
  border-radius: 0 0 10px 10px;
}

.order__lists-item:hover {
  background-color: rgb(224, 222, 222);
}
.order__list {
  margin-top: 30px;
}
.order__list-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}
.order__list-title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-right: 20px;
  border-right: 2px solid #d4d4d4;
  margin: 0;
  margin-right: 20px;
}
.order__lists-text {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
}
.order__lists__top-left {
  display: flex;
  align-items: center;
}

.order__lists__top-right-sort {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
  user-select: none;
}
.order__lists__top__right-text {
  color: var(--blue, #007aff);
  margin: 0;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.order__lists-list {
}
.order__lists__top-right-filter {
  display: none;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .order__list-top {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  .order__list-title {
    border-right: none;
  }
  .order__lists__top-right {
    display: flex;
    width: 100%;
    margin-top: 20px;
    padding-right: 10px;
    justify-content: space-between;
  }

  .order__lists__top-left {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: start;
    justify-content: start;
  }

  .order__lists__top-right-filter {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 13px 41px;
    border-radius: 6px;
    border: 1px solid var(--border-line-color, #e3e3e3);
  }

  .order__lists__top__right__filter-text {
    color: var(--light-mode-colors-h-1, rgba(0, 0, 0, 0.87));
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
}
</style>
