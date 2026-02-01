<script setup lang="ts">
import IconContainer from '@/components/ui/IconContainer.vue'
import PercentIcon from '@/assets/icons/PercentIcon.vue'

defineProps<{
  value: string
  description: string
}>()
</script>

<template>
  <div class="stat-card">
    <div class="col-space--between" style="height: 100%">
      <div class="row-space-between row-align--top">
        <div class="stat-card__value">
          <h2 class="stat-card__text h1--accent">{{ value }}</h2>
          <IconContainer :size="44">
            <PercentIcon />
          </IconContainer>
        </div>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="7" r="6.5" stroke="#1CAC78" />
        </svg>
      </div>
      <p class="stat-card__description">{{ description }}</p>
    </div>
  </div>
</template>
