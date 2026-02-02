<script setup lang="ts">
import ScrollDown from '@/components/ui/ScrollDown.vue';
import { useBreakpoint } from '@/composables/useBreakpoint';

const { isMobile } = useBreakpoint();
</script>

<template>
  <section v-if="!isMobile" class="hero-section">
    <ScrollDown class="scroll-down" />
  </section>
</template>
