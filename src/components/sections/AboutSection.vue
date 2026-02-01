<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const sectionRef = ref<HTMLElement | null>(null);
const titleRef = ref<HTMLElement | null>(null);
let scrollTriggerInstance: ScrollTrigger | null = null;

onMounted(() => {
  if (!sectionRef.value || !titleRef.value) return;

  // Начальное состояние - заголовок справа за пределами экрана
  gsap.set(titleRef.value, {
    x: '100%',
    opacity: 0,
  });

  // Анимация выезда справа привязанная к скроллу
  scrollTriggerInstance = ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top 80%',
    end: 'top 20%',
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress;
      gsap.set(titleRef.value, {
        x: `${100 - progress * 100}%`,
        opacity: progress,
      });
    },
  });
});

onBeforeUnmount(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
  }
});
</script>

<template>
  <section ref="sectionRef" class="about-section">
    <div class="about-content">
      <div class="about-text">
        <h1 ref="titleRef">
          Централизуем печать на предприятиях с помощью комплексного решения
          <span class="color-green">Print-X</span> для сокращения затрат, повышения эффективности
          и безопасности процессов
        </h1>
      </div>
    </div>
  </section>
</template>
