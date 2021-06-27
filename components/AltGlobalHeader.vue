<template>
  <header class="relative h-16 md:static md:h-auto">
    <div
      class="absolute md:static w-full px-2xl md:px-20 py-4 duration-100 z-20"
    >
      <div class="flex justify-between items-center">
        <div class="w-16 md:w-[75px]">
          <NuxtLink to="/">
            <transition name="switch">
              <img
                v-if="!menuActive"
                src="../assets/logo.svg"
                alt="alt."
                class="duration-100"
              />
              <img
                v-else
                src="../assets/images/logo_dark.svg"
                alt="alt."
                class="duration-100"
              />
            </transition>
          </NuxtLink>
        </div>
        <nav class="hidden md:block">
          <ul class="flex items-center font-sans">
            <li v-for="nav in navs" :key="nav.to" class="mx-6">
              <alt-link :to="nav.to">{{ nav.label }}</alt-link>
            </li>
            <li class="mx-2">
              <alt-button to="/contact" rounded>CONTACT</alt-button>
            </li>
          </ul>
        </nav>
        <a
          class="headerMenu md:hidden"
          :class="{ active: menuActive }"
          @click="menuActive = !menuActive"
        >
          <i />
          <i />
          <i />
        </a>
      </div>
    </div>
    <transition name="fade">
      <div
        v-show="menuActive"
        class="fixed top-0 bg-black w-screen h-full z-10"
      >
        <nav class="flex items-center justify-center h-full">
          <ul class="flex flex-col items-center">
            <li v-for="nav in navs" :key="nav.to" class="my-6">
              <alt-link :to="nav.to">
                <span class="font-sans text-white text-xl">
                  {{ nav.label }}
                </span>
              </alt-link>
            </li>
            <li class="my-6">
              <alt-link to="/contact">
                <span class="font-sans text-white text-xl">CONTACT</span>
              </alt-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import AltButton from '~/components/AltButton.vue'
import AltLink from '~/components/AltLink.vue'

export default Vue.extend({
  components: { AltLink, AltButton },
  data() {
    return {
      menuActive: false,
      navs: [
        {
          label: 'ABOUT',
          to: '/about',
        },
        {
          label: 'SERVICE',
          to: '/service',
        },
        {
          label: 'WORKS',
          to: '/works',
        },
      ],
    }
  },
})
</script>

<style lang="scss">
.headerMenu {
  @apply relative w-lg h-[22px];

  > i {
    @apply absolute w-lg h-[2px]  bg-black duration-200;

    &:nth-child(1) {
      @apply top-0;
    }

    &:nth-child(2) {
      @apply top-1/2 transform -translate-y-1/2;
    }

    &:nth-child(3) {
      @apply bottom-0;
    }
  }

  &.active {
    > i {
      @apply bg-base;

      &:nth-child(1) {
        @apply transform translate-y-[10px] rotate-45;
      }

      &:nth-child(2) {
        @apply opacity-0;
      }

      &:nth-child(3) {
        @apply transform translate-y-[-10px] -rotate-45;
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  @apply duration-200;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}

.switch-enter-active,
.switch-leave-active {
  @apply duration-200;
}
.switch-enter,
.switch-leave-to {
  @apply opacity-0;
}
</style>
