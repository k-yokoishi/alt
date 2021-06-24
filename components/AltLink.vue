<template>
  <NuxtLink
    is="a"
    :to="to"
    class="altLink hover:opacity-80 relative"
    :class="rootClasses"
  >
    <slot />
    <i v-if="arrow" class="altLink__arrow" />
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
    underline: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'base',
    },
  },
  computed: {
    rootClasses() {
      return [
        { arrow: this.arrow },
        { withUnderline: this.underline },
        `text-${this.size}`,
      ]
    },
  },
})
</script>

<style lang="scss">
$spaceToUnderline: 6px;

.altLink {
  padding-bottom: $spaceToUnderline;
  @apply cursor-pointer;

  &__arrow {
    height: 20px;
    width: 22px;
    top: $spaceToUnderline * -0.5;
    @apply absolute ml-sm top-0 transition-transform duration-100;

    &::before,
    &::after {
      content: '';
      @apply absolute block;
    }

    &::before {
      height: 2px;
      transform: translateY(-50%);
      @apply w-full bg-black top-1/2;
    }
    &::after {
      width: 12px;
      height: 12px;
      transform: translateY(-50%) rotate(45deg);
      @apply border-r-2 border-t-2 border-black top-1/2 right-0;
    }
  }

  &::before {
    content: '';
    height: 1px;
    transform: translateX(-50%);
    @apply absolute block bottom-0 w-0 bg-black duration-100 left-1/2;
  }

  &:hover {
    .altLink__arrow {
      transform: translateX(4px);
      @apply opacity-80;
    }
    &::before {
      @apply w-full;
    }
  }

  &.withUnderline {
    &::before {
      @apply w-full;
    }
  }
}
</style>