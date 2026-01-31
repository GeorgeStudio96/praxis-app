<script setup lang="ts">
import { ref } from 'vue';
import IconContainer from '@/components/ui/IconContainer.vue';
import IconSearch from '@/assets/icons/IconSearch.vue';

const searchQuery = ref('');
</script>

<template>
  <div class="header-search">
    <IconContainer :size="24">
      <IconSearch />
    </IconContainer>
    <input
      v-model="searchQuery"
      type="text"
      class="header-search__input text-label"
      placeholder="ПОИСК"
    />
  </div>
</template>
