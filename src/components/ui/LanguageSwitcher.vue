<script setup lang="ts">
import { ref } from 'vue';

const currentLang = ref('RU');

function switchLang(lang: string) {
  currentLang.value = lang;
}
</script>

<template>
  <div class="language-switcher">
    <button
      class="language-switcher__btn"
      :class="{ 'language-switcher__btn--active': currentLang === 'RU' }"
      @click="switchLang('RU')"
    >
      RU
    </button>
    <button
      class="language-switcher__btn"
      :class="{ 'language-switcher__btn--active': currentLang === 'EN' }"
      @click="switchLang('EN')"
    >
      EN
    </button>
  </div>
</template>
