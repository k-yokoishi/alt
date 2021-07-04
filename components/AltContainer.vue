<template>
  <div class="w-full mx-auto md:px-0 md:px-10 lg:px-20" :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type ContainerSize = 'sm' | 'md' | 'lg'

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
      const getSizeClass = (size: ContainerSize) => {
        switch (size) {
          case 'sm':
            return 'md:max-w-sm'
          case 'lg':
            return 'md:max-w-xl'
          default:
            return 'md:max-w-lg'
        }
      }
      return [
        { 'px-2xl': !this.spFull },
        getSizeClass(this.size as ContainerSize),
      ]
    },
  },
})
</script>
