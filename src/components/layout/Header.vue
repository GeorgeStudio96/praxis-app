<script setup lang="ts">
import HeaderNav from '@/components/layout/HeaderNav.vue';
import HeaderSearch from './HeaderSearch.vue';
import { useBreakpoint } from '@/composables/useBreakpoint';

const { isMobile } = useBreakpoint();
</script>

<template>
  <header class="header">
    <HeaderNav />
    <HeaderSearch v-if="!isMobile" />
  </header>
</template>
