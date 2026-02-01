<script setup lang="ts">
import ArrowRightDiagonal from '@/assets/icons/ArrowRightDiagonal.vue';
import IconContainer from '@/components/ui/IconContainer.vue';

interface Props {
  title: string;
}

defineProps<Props>();
</script>

<template>
  <div class="section-title">
    <IconContainer :size="24" class="section-title__icon">
      <ArrowRightDiagonal />
    </IconContainer>
    <h3 class="section-title__text">{{ title }}</h3>
  </div>
</template>
