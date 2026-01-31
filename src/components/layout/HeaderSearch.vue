<script setup lang="ts">
import { ref } from 'vue';
import IconContainer from '@/components/ui/IconContainer.vue';
import IconSearch from '@/assets/icons/IconSearch.vue';

const searchQuery = ref('');
</script>

<template>
  <div class="header-search">
    <input
      v-model="searchQuery"
      type="text"
      class="header-search__input text-label"
      placeholder="ПОИСК"
    />
    <IconContainer :size="24">
      <IconSearch />
    </IconContainer>
  </div>
</template>
