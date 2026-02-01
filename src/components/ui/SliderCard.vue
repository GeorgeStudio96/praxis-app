<script setup lang="ts">
import NavigationButton from './NavigationButton.vue';

interface Props {
  label: string;
  title: string;
  description: string;
}

defineProps<Props>();

function handlePrev() {
  alert('Prev clicked');
}

function handleNext() {
  alert('Next clicked');
}
</script>

<template>
  <div class="slider-card-wrapper">
    <NavigationButton direction="left" @click="handlePrev" />

    <div class="slider-card">
      <div class="slider-card__header">
        <div class="col-10">
          <p class="text-label">{{ label }}</p>
          <h3 class="color-green">{{ title }}</h3>
        </div>
      </div>

      <div class="slider-card__divider"></div>

      <p>{{ description }}</p>
    </div>

    <NavigationButton @click="handleNext" />
  </div>
</template>
