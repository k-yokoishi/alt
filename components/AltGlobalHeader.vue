<template>
  <header>
    <div class="px-20 py-4">
      <div class="flex justify-between items-center">
        <div class="global-header-log">
          <NuxtLink to="/">
            <img src="../assets/logo.svg" alt="alt." />
          </NuxtLink>
        </div>
        <nav>
          <ul class="flex items-center font-sans">
            <li v-for="nav in navs" :key="nav.to" class="mx-6">
              <!--              <NuxtLink :to="nav.to">{{ nav.label }}</NuxtLink>-->
              <alt-link :to="nav.to">{{ nav.label }}</alt-link>
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
import AltLink from '~/components/AltLink.vue'

export default Vue.extend({
  components: { AltLink, AltButton },
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
