<template>
  <section class="pt-3xl pb-16">
    <header class="text-center">
      <div v-if="subTitle" class="text-gray font-sans text-xl pb-md">
        {{ subTitle }}
      </div>
      <component :is="variant" class="text-[2rem] font-bold">
        {{ title }}
      </component>
    </header>
    <main class="mt-xl">
      <div class="screen-xl">
        <slot />
      </div>
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    variant: { type: String, default: 'h2' },
    title: { type: String, required: true },
    subTitle: { type: String, default: '' },
  },
})
</script>
