<template>
  <dl class="relative">
    <dt class="absolute left-4 -top-4 text-xl font-sans">
      {{ title }}
    </dt>
    <dd class="px-md py-5 bg-white rounded-lg">
      <slot />
    </dd>
  </dl>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
})
</script>
