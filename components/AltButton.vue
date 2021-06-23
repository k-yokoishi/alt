<template>
  <NuxtLink
    v-if="to"
    :to="to"
    active-class="border"
    class="button"
    :class="{ rounded }"
  >
    <slot />
  </NuxtLink>
  <button
    v-else
    class="button"
    :type="type"
    :class="{ rounded }"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    to: { type: String, default: '' },
    rounded: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    type: { type: String, default: 'button' },
  },
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
})
</script>

<style scoped lang="scss">
.button {
  @apply py-md px-xl text-white bg-black rounded block text-center hover:opacity-80 duration-100;

  &.rounded {
    @apply rounded-full;
  }
}
</style>
