<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import ArrowTop from '@/assets/icons/ArrowTop.vue';
import IconPlus from '@/assets/icons/IconPlus.vue';
import NavigationButton from '@/components/ui/NavigationButton.vue';

function swiperPrev() {
  console.log('swiper prev clicked');
}
function swiperNext() {
  console.log('swiper next clicked');
}
</script>

<template>
  <div class="root" id="app">
    <h1>UI Kit</h1>

    <h2>Large Button</h2>
    <Button href="/news" outline="black">посмотреть все новости</Button>
    <Button href="https://hh.ru" type="external" outline="white"
      >Наши вакансии на <span class="color-green">hh.ru</span></Button
    >
    <Button type="internal" outline="black">посмотреть все новости</Button>

    <h2>Up Button</h2>
    <Button
      size="medium"
      variant="compact"
      outline="black"
      icon-position="right"
      icon-color="#1cac78"
      :icon-component="ArrowTop"
    >
      НАВЕРХ
    </Button>
    <Button
      size="medium"
      variant="compact"
      outline="white"
      icon-position="right"
      icon-color="#1cac78"
      :icon-component="ArrowTop"
    >
      НАВЕРХ
    </Button>
    <Button
      size="medium"
      variant="compact"
      outline="green"
      icon-position="right"
      icon-color="#1cac78"
      :icon-component="ArrowTop"
    >
      НАВЕРХ
    </Button>

    <h2>More button</h2>
    <Button
      size="medium"
      variant="square"
      outline="green"
      :icon-component="IconPlus"
      :show-text="false"
    />
    <Button
      size="medium"
      variant="square"
      outline="white"
      :icon-component="IconPlus"
      :show-text="false"
    />
  </div>
  <NavigationButton direction="left" @click="swiperPrev" />
  <NavigationButton @click="swiperNext" />
</template>
