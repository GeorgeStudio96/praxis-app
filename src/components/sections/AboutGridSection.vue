<script setup lang="ts">
interface Feature {
  id: number;
  number: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    number: '01',
    description: 'Продвинутое управление печатью, копированием и сканированием'
  },
  {
    id: 2,
    number: '02',
    description: 'Удобное администрирование пользователей и оборудования'
  },
  {
    id: 3,
    number: '03',
    description: 'Прозрачная отчетность по всей компании и каждому подразделению'
  },
  {
    id: 4,
    number: '04',
    description: 'Высокий уровень защищенности данных'
  },
  {
    id: 5,
    number: '05',
    description: 'Легкость интеграции и обучения'
  }
];
</script>

<template>
  <section class="about-grid-section">
    <div class="about-grid">
      <div class="grid-3 mob-row--32">
        <div v-for="feature in features" :key="feature.id" class="feature-card col-space--between">
          <span class="feature-card__number">{{ feature.number }}</span>
          <h4>{{ feature.description }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>
