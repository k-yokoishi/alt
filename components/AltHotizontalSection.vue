<template>
  <section class="horizontalSection flex flex-col lg:flex-row">
    <header v-if="title">
      <component :is="variant" class="font-sans text-2xl min-w-[160px]">
        {{ title }}
      </component>
    </header>
    <main class="mt-lg lg:mt-0">
      <slot />
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    variant: { type: String, default: 'h3' },
    title: { type: String, required: true },
  },
})
</script>
<style lang="scss">
.horizontalSection {
  & + .horizontalSection {
    @apply mt-20 md:mt-24;
  }
}
</style>
