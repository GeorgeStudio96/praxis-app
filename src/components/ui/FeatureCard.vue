<script setup lang="ts">
interface Props {
  title: string;
  number: string;
  description: string;
}

defineProps<Props>();
</script>

<template>
  <div class="feature-company-card">
    <div class="feature-company-card__head row-space-between color-green">
      <h3>{{ title }}</h3>
      <h4>{{ number }}</h4>
    </div>
    <div class="feature-company-card__description">
      <p>{{ description }}</p>
    </div>
  </div>
</template>
