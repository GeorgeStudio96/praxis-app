<script setup lang="ts">
import { onMounted, ref, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionTitle from '@/components/ui/SectionTitle.vue';
import FeatureCard from '@/components/ui/FeatureCard.vue';
import cubeImage from '@/assets/images/2-6_reliability.png';

gsap.registerPlugin(ScrollTrigger);

interface Card {
  id: number;
  title: string;
  number: string;
  description: string;
}

const sectionRef = ref<HTMLElement | null>(null);
const cardsContainerRef = ref<HTMLElement | null>(null);
const scrollTriggerInstance = ref<ScrollTrigger | null>(null);

const cards: Card[] = [
  {
    id: 1,
    number: '01',
    title: 'Повышение производительности труда',
    description:
      'Интеллектуальный рабочий процесс позволяет автоматически направлять ваши документы в заранее определённое место назначения с использованием метаданных',
  },
  {
    id: 2,
    number: '02',
    title: 'Отказоустойчивость печати',
    description:
      'Используя функции автономного входа в систему, пользователи смогут распечатать задание даже при отсутствии связи с сервером. При возникновении проблем пользователь может распечатать свои документы на любом ближайшем исправном принтере',
  },
  {
    id: 3,
    number: '03',
    title: 'Конфиденциальность и безопасность печати',
    description:
      'Доступ к устройствам за один шаг с помощью ПИН-кода, ИД-карты или имени/пароля либо двухэтапная аутентификация. Шифрование данных и функция Print&Follow™ гарантирует, что получить доступ к вашим документам и распечатать их могут только авторизированные пользователи',
  },
  {
    id: 4,
    number: '04',
    title: 'Контроль и мониторинг печати',
    description:
      'Print-X хранит подробную статистику обо всех распечатанных, отсканированных и скопированных документах, а также затратах на печать, ассоциированных с пользователями, отделами или проектами',
  },
  {
    id: 5,
    number: '05',
    title: 'Роуминг заданий',
    description:
      'Необходимый функционал для сотрудников, постоянно перемещающихся между филиалами компании — задание автоматически помещается на соответствующий сайт-сервер в соответствии с местоположением сотрудника',
  },
];

onMounted(() => {
  if (!sectionRef.value || !cardsContainerRef.value) return;

  const cardElements = Array.from(cardsContainerRef.value.children) as HTMLElement[];

  if (cardElements.length === 0) return;

  const firstCard = cardElements[0];
  if (!firstCard) return;

  const cardWidth = firstCard.offsetWidth;
  const gap = 40;
  const viewportWidth = window.innerWidth;
  const initialOffset = viewportWidth / 2 - cardWidth / 2;

  gsap.set(cardsContainerRef.value, { x: initialOffset, yPercent: -50 });
  gsap.set(cardElements, { autoAlpha: 0, scale: 0.8 });
  gsap.set(firstCard, { autoAlpha: 1, scale: 1 });

  const scrollDistance = (cardWidth + gap) * (cardElements.length - 1);

  scrollTriggerInstance.value = ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top top',
    end: () => `+=${scrollDistance * 1.5}`,
    pin: true,
    scrub: 1,
    anticipatePin: 1,
    onUpdate: (self) => {
      const moveDistance = scrollDistance * self.progress;
      gsap.to(cardsContainerRef.value, {
        x: initialOffset - moveDistance,
        duration: 0,
      });

      cardElements.forEach((card, index) => {
        const activePoint = index / (cardElements.length - 1);
        const fadeInDuration = 0.22;
        const fadeOutDuration = 0.15;
        const appearStart = activePoint - fadeInDuration;
        const disappearEnd = activePoint + fadeOutDuration;

        let autoAlpha = 0;
        let scale = 0.8;

        if (self.progress < appearStart) {
          autoAlpha = 0;
          scale = 0.8;
        } else if (self.progress >= appearStart && self.progress < activePoint) {
          const t = (self.progress - appearStart) / fadeInDuration;
          autoAlpha = t;
          scale = 0.8 + t * 0.2;
        } else if (self.progress >= activePoint && self.progress < disappearEnd) {
          const t = (self.progress - activePoint) / fadeOutDuration;
          autoAlpha = 1 - t;
          scale = 1 - t * 0.2;
        } else {
          autoAlpha = 0;
          scale = 0.8;
        }

        gsap.to(card, {
          autoAlpha,
          scale,
          duration: 0,
        });
      });
    },
  });
});

onBeforeUnmount(() => {
  if (scrollTriggerInstance.value) {
    scrollTriggerInstance.value.kill();
  }
});
</script>

<template>
  <section ref="sectionRef" class="horizontal-section">
    <div class="horizontal-section__background"></div>
    <div class="horizontal-section__gradient horizontal-section__gradient--purple"></div>
    <div class="horizontal-section__gradient horizontal-section__gradient--green"></div>

    <div class="horizontal-section__content">
      <div class="section-title-wrapper">
        <SectionTitle title="Возможности Print-X" />
      </div>

      <div class="horizontal-section__cube">
        <img :src="cubeImage" alt="Reliability cube" class="horizontal-section__cube-image" />
      </div>

      <div ref="cardsContainerRef" class="horizontal-section__cards">
        <FeatureCard
          v-for="card in cards"
          :key="card.id"
          :title="card.title"
          :number="card.number"
          :description="card.description"
          class="horizontal-section__card"
        />
      </div>
    </div>
  </section>
</template>
