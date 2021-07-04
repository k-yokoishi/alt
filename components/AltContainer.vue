<template>
  <div class="w-full mx-auto md:px-0 md:px-10 lg:px-20" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    size: {
      type: String,
      default: 'md',
    },
    spFull: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      return [
        { 'px-2xl': !this.spFull },
        this.size === 'md' ? `md:max-w-lg` : `md:max-w-xl`,
      ]
    },
  },
})
</script>
