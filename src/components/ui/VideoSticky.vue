<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const videoContainerRef = ref<HTMLElement | null>(null);
const stickyWrapperRef = ref<HTMLElement | null>(null);

let scrollTrigger: ScrollTrigger | null = null;
let videoPlayer: any = null;

onMounted(function () {
  setTimeout(function () {
    initVideo();
  }, 100);
});

onBeforeUnmount(function () {
  if (scrollTrigger) scrollTrigger.kill();
});

function initVideo() {
  if (!videoContainerRef.value || !(window as any).TransparentVideoPlayer) return;

  const Player = (window as any).TransparentVideoPlayer;
  videoPlayer = new Player(videoContainerRef.value);

  videoPlayer.setSources(
    '/videos/header_print_1.webm',
    '/videos/header_print_4.mp4',
    function (video: HTMLVideoElement) {
      initScrollAnimation(video);
    }
  );
}

function initScrollAnimation(video: HTMLVideoElement) {
  if (!videoContainerRef.value) return;

  // Триггер на весь hero-wrapper (HeroSection + AboutSection + AboutGridSection)
  scrollTrigger = ScrollTrigger.create({
    trigger: '.hero-wrapper',
    start: 'top top',
    end: 'bottom top',
    scrub: 0.5,
    onUpdate: function (self) {
      const progress = self.progress;

      // Запуск видео
      if (progress > 0.05 && video.paused) {
        video.play();
      }

      // Анимация смещения от центра влево
      // progress = 0: центр экрана (HeroSection)
      // progress = 1: левая сторона слева от feature cards (AboutGridSection)
      gsap.set(videoContainerRef.value, {
        x: -35 * progress + 'vw',  // Смещение влево
      });
    },
  });
}
</script>

<template>
  <div ref="stickyWrapperRef" class="sticky-video-wrapper">
    <div ref="videoContainerRef" class="video-container"></div>
  </div>
</template>
