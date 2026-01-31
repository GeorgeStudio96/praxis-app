<script setup lang="ts">
import Logo from '@/assets/icons/Logo.vue';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher.vue';
import IconContainer from '@/components/ui/IconContainer.vue';
import MenuIcon from '@/assets/icons/MenuIcon.vue';
import HeaderNavShape from '@/assets/shapes/HeaderNavShape.vue';
import HeaderMenuShape from '@/assets/shapes/HeaderMenuShape.vue';
</script>

<template>
  <nav class="header-nav">
    <div class="header-nav__bg">
      <HeaderNavShape />
    </div>

    <div class="header-nav__content">
      <a href="/" class="logo">
        <Logo />
      </a>

      <div class="text-mini">
        <div>Многопрофильная</div>
        <div>группа компаний</div>
      </div>

      <div class="header-divider"></div>

      <LanguageSwitcher />
    </div>

    <button class="header-menu" type="button">
      <div class="header-menu__bg">
        <HeaderMenuShape />
      </div>
      <div class="header-menu__content">
        <IconContainer :size="40">
          <MenuIcon />
        </IconContainer>
      </div>
    </button>
  </nav>
</template>
