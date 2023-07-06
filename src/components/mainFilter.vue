<script>
export default {
  methods: {
    toggleSelect(e) {
      let select = e.target.closest('.filter__select')
      if (select.style.overflow != 'inherit') {
        select.style.overflow = 'inherit'
      } else {
        select.style.overflow = 'hidden'
      }
      select.classList.toggle('opened')
    },
    setValue(text, model) {
      if (model == 'carrier') {
        this.carrier = text
      }
      if (model == 'address') {
        this.address = text
      }
      if (model == 'where') {
        this.where = text
      }
      if (model == 'transport') {
        this.transport = text
      }
      if (model == 'weight') {
        this.weight = text
      }
    }
  },
  data() {
    return {
      carrier: {
        id: 0,
        value: 'Выберите перевозчика'
      },
      address: {
        id: 0,
        value: 'Выберите адрес'
      },
      where: {
        id: 0,
        value: 'Выберите куда'
      },
      transport: {
        id: 0,
        value: 'Выберите транспорт'
      },
      weight: {
        id: 0,
        value: 'Выберите вес'
      },
      carriers: [
        {
          id: 1,
          value: 'Перевозчик'
        },
        {
          id: 2,
          value: 'Перевозчик'
        },
        {
          id: 3,
          value: 'Перевозчик'
        },
        {
          id: 4,
          value: 'Перевозчик'
        }
      ],
      addreses: [
        {
          id: 1,
          value: 'Ташкент , Ташкентская область 1'
        },
        {
          id: 2,
          value: 'Ташкент , Ташкентская область 1'
        },
        {
          id: 3,
          value: 'Ташкент , Ташкентская область 1'
        },
        {
          id: 4,
          value: 'Ташкент , Ташкентская область 1'
        }
      ],
      wheres: [
        {
          id: 1,
          value: 'Куда 1'
        },
        {
          id: 2,
          value: 'Куда 1'
        },
        {
          id: 3,
          value: 'Куда 1'
        },
        {
          id: 4,
          value: 'Куда 1'
        }
      ],
      transports: [
        {
          id: 1,
          value: 'Грузовик 1'
        },
        {
          id: 2,
          value: 'Грузовик 1'
        },
        {
          id: 3,
          value: 'Грузовик 1'
        },
        {
          id: 4,
          value: 'Грузовик 1'
        }
      ],
      weights: [
        {
          id: 1,
          value: 'Вес'
        },
        {
          id: 2,
          value: 'Вес'
        },
        {
          id: 3,
          value: 'Вес'
        },
        {
          id: 4,
          value: 'Вес'
        }
      ]
    }
  }
}
</script>

<template>
  <section class="filter__wrapper">
    <h3 class="filter__title">Быстрый поиск</h3>
    <div class="filter__bottom">
      <div @click="toggleSelect" style="width: 175px" class="filter__select">
        <div class="current__selected">
          <p class="current__selected-text">{{ carrier.value }}</p>
          <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
        </div>
        <ul class="select__list">
          <li
            v-for="(item, index) in carriers"
            @click="setValue(item, 'carrier')"
            :key="item.id"
            v-show="carrier.id != item.id"
            class="select__item"
          >
            {{ item.value }}
          </li>
        </ul>
      </div>
      <div @click="toggleSelect" style="width: 233px" class="filter__select">
        <div class="current__selected">
          <p class="current__selected-text">{{ address.value }}</p>
          <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
        </div>
        <ul class="select__list">
          <li
            v-for="(item, index) in addreses"
            @click="setValue(item, 'address')"
            :key="item.id"
            v-show="address.id != item.id"
            class="select__item"
          >
            {{ item.value }}
          </li>
        </ul>
      </div>
      <div @click="toggleSelect" style="width: 233px" class="filter__select">
        <div class="current__selected">
          <p class="current__selected-text">{{ where.value }}</p>
          <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
        </div>
        <ul class="select__list">
          <li
            v-for="(item, index) in wheres"
            @click="setValue(item, 'where')"
            :key="item.id"
            v-show="where.id != item.id"
            class="select__item"
          >
            {{ item.value }}
          </li>
        </ul>
      </div>
      <div class="mobile__flex">
        <div @click="toggleSelect" style="width: 233px" class="filter__select">
          <div class="current__selected">
            <p class="current__selected-text">{{ transport.value }}</p>
            <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
          </div>
          <ul class="select__list">
            <li
              v-for="(item, index) in transports"
              @click="setValue(item, 'transport')"
              :key="item.id"
              v-show="transport.id != item.id"
              class="select__item"
            >
              {{ item.value }}
            </li>
          </ul>
        </div>
        <div @click="toggleSelect" style="width: 89px" class="filter__select">
          <div class="current__selected">
            <p class="current__selected-text">{{ weight.value }}</p>
            <img class="current__arrow" src="/images/arrow-bottom.svg" alt="arrow" />
          </div>
          <ul class="select__list">
            <li
              v-for="(item, index) in weights"
              @click="setValue(item, 'weight')"
              :key="item.id"
              v-show="weight.id != item.id"
              class="select__item"
            >
              {{ item.value }}
            </li>
          </ul>
        </div>
      </div>
      <button class="filter__button">Поиск</button>
    </div>
  </section>
</template>

<style>
.filter__wrapper {
  padding: 20px;
  background: #fff;
  border-radius: 20px;
  margin-top: 267px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.055);
}
.filter__title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  font-size: 17px;
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  margin-bottom: 15px;
}
.filter__bottom {
  display: flex;
  align-items: center;
  gap: 15px;
}
.filter__select {
  display: flex;
  flex-direction: column;
  max-height: 44px;
  height: 100%;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease;
  cursor: pointer;
}
.current__selected {
  display: flex;
  align-items: center;
  padding: 11px 15px;
  border-radius: 6px;
  border: 1px solid #e8eaee;
  background: #fff;
  justify-content: space-between;
  gap: 5px;
}
.current__selected-text {
  margin: 0;
  overflow: hidden;
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-size: 15px;
  font-family: Rubik;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  user-select: none;
}
.current__arrow {
  width: 18px;
  height: 18px;
  object-fit: contain;
  transition: all 0.3s ease;
}
.select__list {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  width: 100%;
  padding: 0;
  z-index: 2;
  transition: all 0.3s ease;
  gap: 10px;
  margin: 0;
  border-radius: 0 0 8px 8px;
  background: #fbfcff;
  box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.048);
}

.select__item {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  padding: 8px 10px;
  line-height: 28px;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  transition: all 0.3s ease;
  user-select: none;
}

.select__item:hover {
  background: #f1f2f7;
}

.filter__select.opened {
  max-height: 100%;
}

.filter__select.opened .current__arrow {
  transform: rotate(180deg);
}

.filter__button {
  padding: 10px 16px;
  color: var(--white, #fff);
  font-size: 16px;
  font-style: normal;
  border-radius: 6px;
  background: var(--primary, #a0eb41);
  font-weight: 400;
  border: none;
  height: 100%;
  line-height: normal;
  transition: all 0.3s ease;
  cursor: pointer;
}

.filter__button:hover {
  color: var(--primary, #a0eb41);
  background: var(--white, #fff);
  box-shadow: inset 0 0 0 1px #a0eb41;
}

.mobile__flex {
  display: flex;
  align-items: center;
  gap: 15px;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .filter__wrapper {
    padding: 20px 15px;
    background: #fff;
    border-radius: 20px;
    margin-top: 101px;
    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.055);
  }
  .filter__title {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    font-size: 17px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    margin-bottom: 25px;
  }
  .filter__bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
  .filter__select {
    display: flex;
    flex-direction: column;
    max-height: 46px;
    overflow: hidden;
    cursor: pointer;
    width: 100% !important;
  }
  .current__selected {
    display: flex;
    align-items: center;
    padding: 13px 12px;
    border-radius: 6px;
    border: 1px solid #e8eaee;
    background: #fff;
    justify-content: space-between;
    gap: 5px;
  }
  .current__selected-text {
    margin: 0;
    overflow: hidden;
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    text-overflow: ellipsis;
    whitespace: nowrap;
    font-size: 15px;
    font-family: Rubik;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    user-select: none;
  }
  .current__arrow {
    width: 18px;
    height: 18px;
    object-fit: contain;
    transition: all 0.3s ease;
  }
  .select__list {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 1;
    padding: 0;
    transition: all 0.3s ease;
    gap: 10px;
    margin: 0;
    border-radius: 0 0 8px 8px;
    background: #fbfcff;
    box-shadow: 6px 6px 6px 0px rgba(0, 0, 0, 0.048);
  }

  .select__item {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    padding: 8px 10px;
    line-height: 28px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    transition: all 0.3s ease;
    user-select: none;
  }

  .select__item:hover {
    background: #f1f2f7;
  }

  .filter__select {
    position: relative;
  }

  .filter__select.opened {
    max-height: 100%;
  }

  .filter__select.opened .current__arrow {
    transform: rotate(180deg);
  }

  .filter__button {
    padding: 10px 16px;
    color: var(--white, #fff);
    font-size: 16px;
    font-style: normal;
    border-radius: 6px;
    background: var(--primary, #a0eb41);
    font-weight: 400;
    border: none;
    height: 100%;
    line-height: normal;
    transition: all 0.3s ease;
    width: 100%;
    cursor: pointer;
  }

  .filter__button:hover {
    color: var(--primary, #a0eb41);
    background: var(--white, #fff);
    box-shadow: inset 0 0 0 1px #a0eb41;
  }
}
</style>
