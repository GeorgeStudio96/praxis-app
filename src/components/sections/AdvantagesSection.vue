<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '@/components/ui/SectionTitle.vue';
import Advantages from '@/components/ui/Advantages.vue';

gsap.registerPlugin(ScrollTrigger);

interface Advantage {
  id: number;
  title: string;
  number: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    id: 1,
    title: 'Система уровня Enterprise',
    number: '01',
    description: 'Обеспечивает полный функционал системы управления печатью',
  },
  {
    id: 2,
    title: 'Мультивендорность',
    number: '02',
    description: 'Встроенные программные терминалы для большинства производителей МФУ',
  },
  {
    id: 3,
    title: 'Отечественный продукт',
    number: '03',
    description: 'Входит в реестр российского ПО, сертифицирована ФСТЭК',
  },
  {
    id: 4,
    title: 'Гибкая и глубокая интеграция',
    number: '04',
    description: 'Возможность развивать и дорабатывать продукт по потребности заказчика',
  },
];

const sectionRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!sectionRef.value) return;

  const items = sectionRef.value.querySelectorAll('.advantage-item');

  if (items.length === 0) return;

  // Устанавливаем начальное состояние
  gsap.set(items, { opacity: 0, y: 50 });

  // Используем batch для анимации каждого элемента при его появлении
  ScrollTrigger.batch('.advantage-item', {
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.15,
      }),
    start: 'top 80%',
  });
});

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
});
</script>

<template>
  <section ref="sectionRef" class="advantages-section">
    <div class="section-title-wrapper p-h--none">
      <SectionTitle title="Преимущества системы" />
    </div>

    <div>
      <Advantages
        v-for="advantage in advantages"
        :key="advantage.id"
        :title="advantage.title"
        :number="advantage.number"
        :description="advantage.description"
      />
    </div>
  </section>
</template>
