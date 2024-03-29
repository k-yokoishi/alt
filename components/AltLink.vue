<template>
  <component
    :is="component"
    :href="href"
    :to="to"
    :target="target"
    class="altLink hover:opacity-80 relative"
    :class="rootClasses"
  >
    <i v-if="backArrow" class="altLink__backArrow" />
    <slot />
    <i v-if="arrow" class="altLink__arrow" />
  </component>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: {
      required: true,
      type: String,
    },
    href: {
      required: true,
      type: String,
    },
    target: {
      type: String,
      default: '_blank',
    },
    underline: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: false,
    },
    backArrow: {
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
    component() {
      return this.href ? 'a' : 'nuxt-link'
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
    top: $spaceToUnderline * -0.5;
    @apply absolute ml-sm top-0 transition-transform duration-100 h-[20px] w-[14px] md:w-[22px];

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
      transform: translateY(-50%) rotate(45deg);
      @apply border-r-2 border-t-2 border-black top-1/2 right-0 w-[10px] md:w-[12px] h-[10px] md:h-[12px];
    }
  }

  &::before {
    content: '';
    height: 1px;
    transform: translateX(-50%);
    @apply absolute block bottom-0 w-0 bg-black duration-100 left-1/2;
  }

  &__backArrow {
    top: $spaceToUnderline * -0.5;
    @apply absolute mr-sm top-0 transition-transform duration-100 h-[20px] w-[14px] md:w-[22px];

    &::before,
    &::after {
      content: '';
      @apply absolute block;
    }

    &::before {
      height: 2px;
      transform: translateY(-50%);
      @apply w-full bg-black top-1/2 left-[-24px] md:left-[-32px];
    }
    &::after {
      transform: translateY(-50%) rotate(45deg);
      @apply border-l-2 border-b-2 border-black top-1/2 left-[-24px] md:left-[-32px] w-[10px] md:w-[12px] h-[10px] md:h-[12px];
    }
  }

  &:hover {
    .altLink__arrow {
      transform: translateX(4px);
      @apply opacity-80;
    }
    .altLink__backArrow {
      transform: translateX(-4px);
      @apply opacity-80;
    }
    &::before {
      @apply w-full;
    }
  }

  &.nuxt-link-active,
  &.withUnderline {
    &::before {
      @apply w-full;
    }
  }
}
</style>
