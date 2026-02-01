<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StatCard from '@/components/ui/StatCard.vue';
import aitekoImage from '@/assets/images/AITEKO_A9_white5 1.png';

gsap.registerPlugin(ScrollTrigger);

const imageRef = ref<HTMLElement | null>(null);
const sectionRef = ref<HTMLElement | null>(null);
const cardsRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!imageRef.value || !sectionRef.value) return;

  gsap.to(imageRef.value, {
    yPercent: -10,
    ease: 'none',
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });

  // Animate cards
  if (cardsRef.value) {
    const cards = Array.from(cardsRef.value.children) as HTMLElement[];

    if (cards.length >= 3) {
      gsap.set(cards, { autoAlpha: 0, yPercent: 60 });

      gsap.to(cards, {
        autoAlpha: 1,
        yPercent: (index) => (index === 1 ? 60 : -60),
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
        },
      });
    }
  }
});
</script>

<template>
  <section ref="sectionRef" class="parallax-section">
    <div class="parallax-section__image-container">
      <img ref="imageRef" :src="aitekoImage" alt="Aiteko A9" class="parallax-section__image" />
    </div>

    <div ref="cardsRef" class="parallax-section__content">
      <StatCard value="до 50" description="снижение расходов на печать" />

      <StatCard
        value="20—25"
        description="экономия благодаря сокращению нецелевой печати и внедрению политик"
      />

      <StatCard value="10—15" description="снижение нагрузки на службу техподдержки" />
    </div>
  </section>
</template>
