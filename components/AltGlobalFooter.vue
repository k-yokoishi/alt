<template>
  <footer class="bg-black">
    <div class="px-[90px] pt-xl pb-sm relative">
      <div class="absolute max-w-[75px]">
        <img src="../assets/images/logo_dark.svg" alt="alt." />
      </div>
      <nav class="text-white mx-auto">
        <ul class="flex items-center justify-center font-sans">
          <li v-for="nav in navs" :key="nav.to" class="mx-lg">
            <alt-link :to="nav.to">{{ nav.label }}</alt-link>
          </li>
        </ul>
      </nav>
      <div class="mt-lg text-center">
        <span class="font-sans text-white text-xs"
          >Copyright &copy; alt., All rights reserved</span
        >
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import AltLink from '~/components/AltLink.vue'

export default Vue.extend({
  components: { AltLink },
  data() {
    return {
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
        {
          label: 'CONTACT',
          to: '/contact',
        },
      ],
    }
  },
})
</script>

<style>
.global-header-log {
  width: 75px;
}
</style>
