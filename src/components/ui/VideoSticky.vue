<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useBreakpoint } from '@/composables/useBreakpoint';

gsap.registerPlugin(ScrollTrigger);

const { isMobile } = useBreakpoint();
const videoContainerRef = ref<HTMLElement | null>(null);
let timeline: gsap.core.Timeline | null = null;
let videoPlayer: any = null;
let hasVideoPlayed = false;

onMounted(function () {
  setTimeout(function () {
    initVideo();
  }, 100);
});

onBeforeUnmount(function () {
  if (timeline) timeline.kill();
});

function initVideo() {
  if (!videoContainerRef.value || !(window as any).TransparentVideoPlayer) return;

  const Player = (window as any).TransparentVideoPlayer;
  videoPlayer = new Player(videoContainerRef.value);

  const webmSource = isMobile.value
    ? '/videos/mobile/I01_header_print_Mob_1.webm'
    : '/videos/header_print_1.webm';
  const mp4Source = isMobile.value
    ? '/videos/mobile/I01_header_print_Mob_1.mp4'
    : '/videos/header_print_4.mp4';

  videoPlayer.setSources(webmSource, mp4Source, function (video: HTMLVideoElement) {
    if (!isMobile.value) {
      initScrollAnimation(video);
    } else {
      video.play();
    }
  });
}

function initScrollAnimation(video: HTMLVideoElement) {
  if (!videoContainerRef.value) return;

  timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.hero-wrapper--main',
      start: 'top top',
      end: '40% top',
      scrub: true,
      markers: false,
      onUpdate: function (self) {
        if (!hasVideoPlayed && self.progress > 0.2 && video.paused) {
          video.play();
          hasVideoPlayed = true;
        }
      },
    },
  });

  timeline.to(videoContainerRef.value, {
    x: '-40rem',
    ease: 'none',
  });
}
</script>

<template>
  <div class="sticky-video-wrapper">
    <div ref="videoContainerRef" class="video-container"></div>
  </div>
</template>
