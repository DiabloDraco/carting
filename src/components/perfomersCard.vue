<script>
export default {
  props: {
    rating: String,
    name: String,
    job: String,
    bg: String,
    link: String
  }
}
</script>

<template>
  <a :href="link" class="performers__card">
    <div class="performers__top">
      <img class="performers__top-bg" :src="bg" alt="img" />
      <div class="performers__icon-wrapper">
        <img class="performers__star" src="/images/star.svg" alt="star" />
        <p class="performers__rating">{{ rating }}</p>
      </div>
    </div>
    <div class="performers__bottom">
      <h4 class="performers__bottom-title">{{ name }}</h4>
      <p class="performers__bottom-text">{{ job }}</p>
    </div>
  </a>
</template>

<style scoped>
.performers__card {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.performers__top {
  position: relative;
  width: 272px;
  height: 280px;
}
.performers__top-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.performers__icon-wrapper {
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background: #fff;
  padding: 6px 8px;
  transition: all 0.3s ease;
  gap: 8px;
}
.performers__star {
  width: 16px;
  height: 16px;
  object-fit: cover;
}
.performers__rating {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  text-align: center;
  font-size: 17px;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.performers__bottom {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.performers__bottom-title {
  overflow: hidden;
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-size: 17px;
  margin: 0;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  transition: all 0.3s ease;
}
.performers__bottom-text {
  color: var(--google-typography-body, rgba(0, 0, 0, 0.68));
  font-size: 15px;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: all 0.3s ease;
}

.performers__card:hover .performers__bottom-title {
  color: #96d642;
}

.performers__card:hover .performers__bottom-text {
  color: #96d642;
}

.performers__card:hover .performers__icon-wrapper {
  background-color: #ffffffd2;
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .performers__card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
  }
  .performers__top {
    position: relative;
    width: 100%;
    border-radius: 20px;
    height: 280px;
  }
  .performers__top-bg {
    position: absolute;
    border-radius: 20px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .performers__icon-wrapper {
    position: absolute;
    top: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    background: #fff;
    padding: 6px 8px;
    transition: all 0.3s ease;
    gap: 8px;
  }
  .performers__star {
    width: 16px;
    height: 16px;
    object-fit: cover;
  }
  .performers__rating {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    text-align: center;
    font-size: 17px;
    margin: 0;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .performers__bottom {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .performers__bottom-title {
    overflow: hidden;
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    text-overflow: ellipsis;
    whitespace: nowrap;
    font-size: 17px;
    margin: 0;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    transition: all 0.3s ease;
    text-align: center;
  }
  .performers__bottom-text {
    color: var(--google-typography-body, rgba(0, 0, 0, 0.68));
    font-size: 15px;
    margin: 0;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    transition: all 0.3s ease;
    text-align: center;
  }

  .performers__card:hover .performers__bottom-title {
    color: #96d642;
  }

  .performers__card:hover .performers__bottom-text {
    color: #96d642;
  }

  .performers__card:hover .performers__icon-wrapper {
    background-color: #ffffffd2;
  }
}
</style>
