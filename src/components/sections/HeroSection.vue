<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const heroRef = ref<HTMLElement | null>(null);
const videoContainerRef = ref<HTMLElement | null>(null);

let scrollTrigger: ScrollTrigger | null = null;
let videoPlayer: any = null;

onMounted(function() {
  setTimeout(function() {
    initVideo();
  }, 100);
});

onBeforeUnmount(function() {
  if (scrollTrigger) scrollTrigger.kill();
});

function initVideo() {
  if (!videoContainerRef.value || !(window as any).TransparentVideoPlayer) return;

  const Player = (window as any).TransparentVideoPlayer;
  videoPlayer = new Player(videoContainerRef.value);

  videoPlayer.setSources(
    '/videos/header_print_1.webm',
    '/videos/header_print_4.mp4',
    function(video: HTMLVideoElement) {
      initScrollAnimation(video);
    }
  );
}

function initScrollAnimation(video: HTMLVideoElement) {
  if (!heroRef.value || !videoContainerRef.value) return;

  scrollTrigger = ScrollTrigger.create({
    trigger: heroRef.value,
    start: 'top top',
    end: 'bottom bottom',
    scrub: true,
    onEnter: function() {
      video.play();
    },
    onUpdate: function(self) {
      const progress = self.progress;
      gsap.set(videoContainerRef.value, {
        x: progress * -20 + '%'
      });
    }
  });
}
</script>

<template>
  <section ref="heroRef" class="hero-section">
    <div class="hero-video">
      <div ref="videoContainerRef" class="video-container"></div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero-section {
  position: relative;
  width: 100%;
  height: 200vh;
  background: linear-gradient(135deg, #e8d5f2 0%, #f5f0e8 100%);
}

.hero-video {
  position: sticky;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.video-container {
  position: relative;
  width: 80%;
  height: 80%;
  max-width: 1200px;

  :deep(canvas) {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
