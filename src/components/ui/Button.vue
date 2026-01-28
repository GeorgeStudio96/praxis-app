<script setup lang="ts">
import ArrowRight from '@/assets/icons/ArrowRight.vue';

interface Props {
  type?: 'internal' | 'external';
  outline?: 'black' | 'white';
  href?: string;
  iconType?: 'arrow-right' | 'arrow-diagonal';
  target?: '_blank' | '_self';
}

withDefaults(defineProps<Props>(), {
  type: 'internal',
  outline: 'black',
});
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="type === 'external' ? '_blank' : '_self'"
    class="btn"
    :class="`btn--${outline}`"
  >
    <span class="text-label">
      <slot />
    </span>
    <IconContainer :size="24">
      <ArrowRight />
    </IconContainer>
  </a>

  <button v-else class="btn" :class="`btn--${outline}`">
    <span class="text-label">
      <slot />
    </span>

    <IconContainer :size="24">
      <ArrowRight />
    </IconContainer>
  </button>
</template>
