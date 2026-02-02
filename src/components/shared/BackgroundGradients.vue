<script setup lang="ts">
// Fixed background gradients that appear throughout the entire site
</script>

<template>
  <div class="background-gradients">
    <div class="background-gradient background-gradient--purple"></div>
    <div class="background-gradient background-gradient--green"></div>
  </div>
</template>

<style lang="scss">
@use '@/styles/functions' as *;
@use '@/styles/mixins' as *;

.background-gradients {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.background-gradient {
  position: absolute;
  filter: blur(500px);
}

.background-gradient--purple {
  width: 1229px;
  height: 1229px;
  border-radius: 1229px;
  background: #7a68ed;
  left: -1150px;
  top: -600px;

  @include mobile {
    width: pxMob(345);
    height: pxMob(345);
    border-radius: pxMob(345);
    top: pxMob(67);
    left: pxMob(-301);
  }
}

.background-gradient--green {
  width: 739px;
  height: 732px;
  border-radius: 739px;
  background: #1cac78;
  right: -850px;
  bottom: -280px;

  @include mobile {
    width: pxMob(271);
    height: pxMob(271);
    border-radius: pxMob(271);
    bottom: pxMob(60);
    right: pxMob(-220);
  }
}
</style>
