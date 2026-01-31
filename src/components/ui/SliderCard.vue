<script setup lang="ts">
import { ref, computed } from 'vue';
import NavigationButton from './NavigationButton.vue';

interface Props {
  label: string;
  title: string;
  description: string;
  isCompact?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  isCompact: false,
});

const sliderCardRef = ref<HTMLDivElement>();

const compactAttr = computed(() => (props.isCompact ? 'true' : 'false'));

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

    <div ref="sliderCardRef" class="slider-card" :data-compact="compactAttr">
      <div class="slider-card__header">
        <p class="text-label">{{ label }}</p>
        <h3>{{ title }}</h3>
      </div>

      <div class="slider-card__divider"></div>

      <p>{{ description }}</p>
    </div>

    <NavigationButton @click="handleNext" />
  </div>
</template>
