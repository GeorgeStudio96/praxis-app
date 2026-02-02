import { ref, onMounted, onUnmounted } from 'vue';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large';

const BREAKPOINTS = {
  mobile: 768,
  desktop: 1920,
  large: 2560,
};

export function useBreakpoint() {
  const breakpoint = ref<Breakpoint>('desktop');
  const isMobile = ref(false);
  const isDesktop = ref(true);
  const isLarge = ref(false);

  const updateBreakpoint = () => {
    const width = window.innerWidth;

    if (width <= BREAKPOINTS.mobile) {
      breakpoint.value = 'mobile';
      isMobile.value = true;
      isDesktop.value = false;
      isLarge.value = false;
    } else if (width < BREAKPOINTS.desktop) {
      breakpoint.value = 'tablet';
      isMobile.value = false;
      isDesktop.value = false;
      isLarge.value = false;
    } else if (width < BREAKPOINTS.large) {
      breakpoint.value = 'desktop';
      isMobile.value = false;
      isDesktop.value = true;
      isLarge.value = false;
    } else {
      breakpoint.value = 'large';
      isMobile.value = false;
      isDesktop.value = false;
      isLarge.value = true;
    }
  };

  onMounted(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateBreakpoint);
  });

  return {
    breakpoint,
    isMobile,
    isDesktop,
    isLarge,
  };
}
