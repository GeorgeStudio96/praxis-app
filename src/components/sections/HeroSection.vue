<script setup lang="ts">
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollDown from '@/components/ui/ScrollDown.vue';
import { useBreakpoint } from '@/composables/useBreakpoint';

gsap.registerPlugin(ScrollTrigger);

const { isMobile } = useBreakpoint();
const scrollDownRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!isMobile.value && scrollDownRef.value) {
    gsap.to(scrollDownRef.value, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: '3%',
        scrub: true,
      },
    });
  }
});
</script>

<template>
  <section v-if="!isMobile" class="hero-section">
    <div ref="scrollDownRef">
      <ScrollDown class="scroll-down" />
    </div>
  </section>
</template>
