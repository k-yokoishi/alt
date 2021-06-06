<template>
  <header>
    <div class="px-20 py-4">
      <div class="flex justify-between items-center">
        <div class="global-header-log">
          <NuxtLink to="/">
            <img src="../assets/logo.svg" />
          </NuxtLink>
        </div>
        <nav>
          <ul class="flex items-center">
            <li v-for="nav in navs" :key="nav.to" class="mx-6">
              <NuxtLink :to="nav.to">{{ nav.label }}</NuxtLink>
            </li>
            <li class="mx-2">
              <AltButton to="/contact" rounded>CONTACT</AltButton>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import AltButton from '~/components/AltButton.vue'

export default Vue.extend({
  components: { AltButton },
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
          label: 'NEWS',
          to: '/news',
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
