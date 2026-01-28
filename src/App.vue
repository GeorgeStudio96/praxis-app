<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
</script>

<template>
  <div class="root" id="app">
    <h1>UI Kit</h1>
    <Button href="/news" outline="black">посмотреть все новости</Button>
    <Button href="https://hh.ru" type="external" outline="white">Наши вакансии на hh.ru</Button>
  </div>
</template>

<!-- стили НЕ нужны, они уже в main.ts -->
