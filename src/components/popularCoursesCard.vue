<script>
export default {
  props: {
    title: String,
    bg: String,
    link: String
  }
}
</script>

<template>
  <a :href="link" class="course__card">
    <div class="course__image">
      <div class="course__arrow-wrapper">
        <img class="course__arrow" src="/images/arrow75.svg" alt="" />
      </div>
      <img class="course__card-bg" :src="bg" alt="" />
    </div>
    <h3 class="course__card-title">{{ title }}</h3>
  </a>
</template>

<style>
.course__card {
  display: flex;
  text-decoration: none;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.course__image {
  width: 272px;
  height: 181px;
  border-radius: 16px;
  position: relative;
}
.course__arrow-wrapper {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  z-index: 1;
}
.course__arrow {
  width: 36px;
  height: 36px;
  object-fit: cover;
  transition: all 0.3s ease;
}
.course__card-bg {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  object-fit: cover;
  border-radius: 16px;
}
.course__card-title {
  color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
  transition: all 0.3s ease;
}

.course__card:hover .course__arrow-wrapper {
  border-radius: 35px;
  background: var(--primary, #a0eb41);
}

.course__card:hover .course__arrow {
  filter: brightness(0) invert(1);
}

.course__card:hover .course__card-title {
  color: var(--primary, #a0eb41);
}

@media only screen and (max-width: 600px) {
  /* MOBILE */

  .course__card {
    display: flex;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    width: 100%;
  }
  .course__image {
    width: 100%;
    height: 181px;
    border-radius: 16px;
    position: relative;
  }
  .course__arrow-wrapper {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    z-index: 1;
  }
  .course__arrow {
    width: 36px;
    height: 36px;
    object-fit: cover;
    transition: all 0.3s ease;
  }
  .course__card-bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    border-radius: 16px;
  }
  .course__card-title {
    color: var(--google-typography-h-1, rgba(0, 0, 0, 0.87));
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    margin: 0;
    transition: all 0.3s ease;
    margin-top: 36px;
  }

  .course__card:hover .course__arrow-wrapper {
    border-radius: 35px;
    background: var(--primary, #a0eb41);
  }

  .course__card:hover .course__arrow {
    filter: brightness(0) invert(1);
  }

  .course__card:hover .course__card-title {
    color: var(--primary, #a0eb41);
  }
}
</style>
