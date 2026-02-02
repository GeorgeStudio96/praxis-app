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

  const mm = gsap.matchMedia();

  mm.add('(min-width: 768px)', () => {
    gsap.to(imageRef.value, {
      yPercent: -13,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.value,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    if (cardsRef.value) {
      const cards = Array.from(cardsRef.value.children) as HTMLElement[];

      if (cards.length >= 3 && cards[0] && cards[1] && cards[2]) {
        gsap.fromTo(
          [cards[0], cards[2]],
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.value,
              start: 'center 60%',
              markers: false,
            },
          }
        );

        gsap.fromTo(
          cards[1],
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            delay: 0.2,
            scrollTrigger: {
              trigger: sectionRef.value,
              start: 'center 60%',
              markers: false,
            },
          }
        );
      }
    }

    return () => {};
  });

  return () => {
    mm.revert();
  };
});
</script>

<template>
  <section ref="sectionRef" class="parallax-section">
    <div class="parallax-section__image-container">
      <img ref="imageRef" :src="aitekoImage" alt="Aiteko A9" class="parallax-section__image" />
    </div>

    <div ref="cardsRef" class="parallax-section__content">
      <div class="parallax-card--top">
        <StatCard value="до 50" description="снижение расходов на печать" />
      </div>

      <div class="parallax-card--bot">
        <StatCard
          value="20—25"
          description="экономия благодаря сокращению нецелевой печати и внедрению политик"
        />
      </div>

      <div class="parallax-card--top">
        <StatCard value="10—15" description="снижение нагрузки на службу техподдержки" />
      </div>
    </div>
  </section>
</template>
