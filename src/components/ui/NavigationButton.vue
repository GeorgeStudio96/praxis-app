<script setup lang="ts">
import ArrowMedium from '@/assets/icons/ArrowMedium.vue';
import IconContainer from './IconContainer.vue';

interface Props {
  direction?: 'left' | 'right';
  size?: 'small' | 'medium' | 'large';
}

const props = withDefaults(defineProps<Props>(), {
  direction: 'right',
  size: 'medium',
});

const emit = defineEmits<{ click: [] }>();
</script>

<template>
  <button @click="emit('click')" class="nav-btn">
    <IconContainer
      :size="24"
      :style="props.direction === 'left' ? { transform: 'rotate(180deg)' } : {}"
    >
      <ArrowMedium />
    </IconContainer>
  </button>
</template>
