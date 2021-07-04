<template>
  <div class="field flex flex-col">
    <label
      v-if="label"
      :for="labelFor"
      class="field-label font-bold"
      :class="{ required }"
      >{{ label }}</label
    >
    <div class="mt-sm">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    label: {
      type: String,
      default: '',
    },
    labelFor: {
      type: String,
      default: undefined,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
})
</script>

<style lang="scss" scoped>
.field {
  & + .field {
    @apply mt-lg;
  }
}
.field-label {
  &.required {
    &::after {
      content: '*';
      @apply ml-xs text-red;
    }
  }
}
</style>
