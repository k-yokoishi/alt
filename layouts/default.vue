<template>
  <div>
    <alt-global-header />
    <main>
      <Nuxt />
    </main>
    <alt-global-footer />
  </div>
</template>

<style>
body {
  @apply font-body text-black bg-base overflow-x-hidden;
}
</style>

<script>
import AltGlobalFooter from '@/components/AltGlobalFooter'
import AltGlobalHeader from '../components/AltGlobalHeader'
export default {
  components: { AltGlobalHeader, AltGlobalFooter },
}
</script>
