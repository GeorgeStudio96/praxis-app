<script setup lang="ts">
import { computed, useSlots, type Component } from 'vue';
import ArrowRight from '@/assets/icons/ArrowRight.vue';
import ArrowRightDiagonal from '@/assets/icons/ArrowRightDiagonal.vue';
import IconContainer from '@/components/ui/IconContainer.vue';

interface Props {
  type?: 'internal' | 'external';
  outline: 'black' | 'white' | 'green';
  size?: 'large' | 'medium';
  variant?: 'default' | 'compact' | 'square';
  iconPosition?: 'left' | 'right';
  iconColor?: string;
  iconComponent?: Component;
  showIcon?: boolean;
  showText?: boolean;
  href?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'internal',
  outline: 'black',
  size: 'large',
  variant: 'default',
  iconPosition: 'left',
  showIcon: true,
  showText: true,
});

const slots = useSlots();

const buttonClasses = computed(() => [
  'btn',
  `btn--${props.outline}`,
  `btn--${props.size}`,
  `btn--${props.variant}`,
  props.iconPosition === 'right' && 'btn--icon-right',
]);

const defaultIcon = computed(() =>
  props.type === 'internal' ? ArrowRight : ArrowRightDiagonal
);

const iconComponent = computed(() => props.iconComponent || defaultIcon.value);

const hasText = computed(() => props.showText && slots.default);

const iconStyle = computed(() => {
  if (props.outline === 'green') return {};
  return props.iconColor ? { color: props.iconColor } : {};
});
</script>

<template>
  <a
    v-if="href"
    :href="href"
    :target="type === 'external' ? '_blank' : '_self'"
    class="btn"
    :class="buttonClasses"
  >
    <span v-if="hasText" class="text-label uppercase">
      <slot />
    </span>
    <IconContainer v-if="showIcon" :size="24" :style="iconStyle" class="btn-icon">
      <component :is="iconComponent" />
    </IconContainer>
  </a>

  <button v-else class="btn" :class="buttonClasses">
    <span v-if="hasText" class="text-label uppercase">
      <slot />
    </span>
    <IconContainer v-if="showIcon" :size="24" :style="iconStyle" class="btn-icon">
      <component :is="iconComponent" />
    </IconContainer>
  </button>
</template>
