<template>
  <section>
    <header>
      <alt-container size="lg">
        <div>
          <h1 class="text-h1 font-sans">{{ title }}</h1>
        </div>
        <div v-if="subTitle" class="mt-md text-base text-gray">
          {{ subTitle }}
        </div>
      </alt-container>
    </header>
    <main>
      <slot />
    </main>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      required: true,
      type: String,
    },
    subTitle: {
      type: String,
      default: '',
    },
  },
})
</script>
