<template>
  <div>
    <alt-global-header />
    <main>
      <Nuxt />
    </main>
    <alt-global-footer />
  </div>
</template>

<script>
import AltGlobalFooter from '@/components/AltGlobalFooter'
import AltGlobalHeader from '../components/AltGlobalHeader'
export default {
  components: { AltGlobalHeader, AltGlobalFooter },
}
</script>

<style>
body {
  @apply font-body text-black bg-base;
}
</style>
