<script setup lang="ts">
interface Props {
  title: string;
  number: string;
  description: string;
}

defineProps<Props>();
</script>

<template>
  <div class="advantage-item">
    <div class="advantage-item__content">
      <div class="advantage-item__left row-20 row-align--top">
        <h2 class="h1--accent color-green">{{ title }}</h2>
        <p class="advantage-item__number">{{ number }}</p>
      </div>
      <div class="advantage-item__description-wrapper">
        <h3 class="advantage-item__description">{{ description }}</h3>
      </div>
    </div>
  </div>
</template>
