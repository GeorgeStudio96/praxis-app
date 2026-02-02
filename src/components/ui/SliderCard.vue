<script setup lang="ts">
import NavigationButton from './NavigationButton.vue';
import { useBreakpoint } from '@/composables/useBreakpoint';

interface Props {
  label: string;
  title: string;
  description: string;
}

defineProps<Props>();

const { isMobile } = useBreakpoint();

function handlePrev() {
  alert('Prev clicked');
}

function handleNext() {
  alert('Next clicked');
}
</script>

<template>
  <!-- Desktop: кнопки по бокам -->
  <div v-if="!isMobile" class="slider-card-wrapper">
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

  <!-- Mobile: кнопки под карточкой -->
  <div v-else class="slider-card-wrapper slider-card-wrapper--mobile">
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

    <div class="slider-card-navigation">
      <NavigationButton direction="left" @click="handlePrev" />
      <NavigationButton @click="handleNext" />
    </div>
  </div>
</template>
