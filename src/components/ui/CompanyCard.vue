<script setup lang="ts">
import ArrowRightDiagonal from '@/assets/icons/ArrowRightDiagonal.vue';
import IconContainer from './IconContainer.vue';
import PrintXLogo from '@/assets/icons/PrintXLogo.svg';

interface Props {
  href: string;
  subtitle?: string;
}

withDefaults(defineProps<Props>(), {
  subtitle: 'Перейти на сайт printx',
});
</script>

<template>
  <a :href="href" target="_blank" class="company-card">
    <div class="company-card__logo">
      <img :src="PrintXLogo" alt="Print-X" class="company-card__logo-image" />
    </div>
    <div class="company-card__content">
      <div class="row-space-between mob-row--14">
        <div class="company-card__text">
          <p class="text-label uppercase">{{ subtitle }}</p>
        </div>
        <IconContainer :size="24" class="company-card__arrow">
          <ArrowRightDiagonal />
        </IconContainer>
      </div>
    </div>
  </a>
</template>
