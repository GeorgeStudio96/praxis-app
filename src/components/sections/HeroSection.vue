<script setup lang="ts">
// import { onMounted, onBeforeUnmount, ref } from 'vue';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const heroRef = ref<HTMLElement | null>(null);
// const videoContainerRef = ref<HTMLElement | null>(null);

// let scrollTrigger: ScrollTrigger | null = null;
// let videoPlayer: any = null;

// onMounted(function () {
//   setTimeout(function () {
//     initVideo();
//   }, 100);
// });

// onBeforeUnmount(function () {
//   if (scrollTrigger) scrollTrigger.kill();
// });

// function initVideo() {
//   if (!videoContainerRef.value || !(window as any).TransparentVideoPlayer) return;

//   const Player = (window as any).TransparentVideoPlayer;
//   videoPlayer = new Player(videoContainerRef.value);

//   videoPlayer.setSources(
//     '/videos/header_print_1.webm',
//     '/videos/header_print_4.mp4',
//     function (video: HTMLVideoElement) {
//       initScrollAnimation(video);
//     }
//   );
// }

// function initScrollAnimation(video: HTMLVideoElement) {
//   if (!heroRef.value || !videoContainerRef.value) return;

//   scrollTrigger = ScrollTrigger.create({
//     trigger: heroRef.value,
//     start: 'top top',
//     end: 'bottom top',
//     scrub: 0.5,
//     onUpdate: function (self) {
//       const progress = self.progress;

//       if (progress > 0.1 && video.paused) {
//         video.play();
//       }

//       gsap.set(videoContainerRef.value, {
//         x: -35 * progress + 'vw',
//         y: -5 * progress + 'vh',
//         scale: 1 - progress * 0.45,
//         rotation: -6 * progress,
//       });
//     },
//   });
// }
</script>

<template>
  <section class="hero-section">
    <div class="hero-ellipse hero-ellipse--purple"></div>
    <div class="hero-ellipse hero-ellipse--green"></div>

    <!-- <div class="hero-video">
      <div ref="videoContainerRef" class="video-container"></div>
    </div> -->
  </section>
</template>
