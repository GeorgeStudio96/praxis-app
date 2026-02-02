<script setup lang="ts">
import { onMounted } from 'vue';
import { VueLenis } from 'lenis/vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '@/components/ui/Button.vue';
import ArrowTop from '@/assets/icons/ArrowTop.vue';
import IconPlus from '@/assets/icons/IconPlus.vue';
import NavigationButton from '@/components/ui/NavigationButton.vue';
import Header from '@/components/layout/Header.vue';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import AboutGridSection from '@/components/sections/AboutGridSection.vue';
import ParallaxSection from '@/components/sections/ParallaxSection.vue';
import CompanyCard from '@/components/ui/CompanyCard.vue';
import SliderCard from '@/components/ui/SliderCard.vue';
import BackgroundGradients from '@/components/shared/BackgroundGradients.vue';
import HorizontalSection from './components/sections/HorizontalSection.vue';
import AdvantagesSection from './components/sections/AdvantagesSection.vue';
import VideoSticky from '@/components/ui/VideoSticky.vue';

gsap.registerPlugin(ScrollTrigger);

const lenisOptions = {
  duration: 1.1,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  wheelMultiplier: 1.5,
  syncTouch: false,
};

onMounted(() => {
  gsap.ticker.add(() => {
    ScrollTrigger.update();
  });
});
</script>

<template>
  <VueLenis root :options="lenisOptions">
    <BackgroundGradients />
    <div class="root" id="app">
      <Header />

      <div class="sections-wrapper">
        <div class="hero-wrapper hero-wrapper--main">
          <HeroSection />
          <VideoSticky />
          <AboutSection />
        </div>

        <ParallaxSection />
        <HorizontalSection />
        <AdvantagesSection />

        <div class="sticky-elements">
          <SliderCard
            label="ИННОВАЦИИ"
            title="Управление корпоративной печатью"
            description="Централизация печати в организациях с помощью комплексного программного решения"
            class="slider-card--sticky"
          />
          <CompanyCard href="" company="PRAXIS" class="company-card--sticky" />
        </div>
      </div>
    </div>
  </VueLenis>
</template>
