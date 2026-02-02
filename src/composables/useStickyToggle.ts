import { onMounted, onBeforeUnmount, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useStickyToggle = (triggerRef: any) => {
  let scrollTrigger: ScrollTrigger | null = null;

  onMounted(() => {
    if (!triggerRef.value) return;

    const stickyElements = document.querySelector('.sticky-elements') as HTMLElement;
    if (!stickyElements) return;

    scrollTrigger = ScrollTrigger.create({
      trigger: triggerRef.value,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => gsap.to(stickyElements, { autoAlpha: 0, duration: 0.3 }),
      onLeave: () => gsap.to(stickyElements, { autoAlpha: 1, duration: 0.3 }),
      onEnterBack: () => gsap.to(stickyElements, { autoAlpha: 0, duration: 0.3 }),
      onLeaveBack: () => gsap.to(stickyElements, { autoAlpha: 1, duration: 0.3 }),
    });
  });

  onBeforeUnmount(() => {
    if (scrollTrigger) {
      scrollTrigger.kill();
    }
  });
};
