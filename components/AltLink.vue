<template>
  <NuxtLink :to="to" class="hover:opacity-20">
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: {
      required: true,
      type: String,
    },
  },
})
</script>
