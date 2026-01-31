<script setup lang="ts">
type Props = {
  size?: 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 | 88 | 120;
};

withDefaults(defineProps<Props>(), {
  size: 24,
});
</script>

<template>
  <div :class="`icon-container--${size}`">
    <slot />
  </div>
</template>
