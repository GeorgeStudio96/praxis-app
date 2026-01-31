<script setup lang="ts">
import IconContainer from '@/components/ui/IconContainer.vue';
import ScrollDownIcon from '@/assets/icons/ScrollDownIcon.vue';
</script>

<template>
  <div class="scroll-down">
    <IconContainer :size="24">
      <ScrollDownIcon />
    </IconContainer>
    <span class="label uppercase">листайте вниз</span>
  </div>
</template>
