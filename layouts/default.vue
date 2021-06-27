<template>
  <div class="flex flex-col h-screen">
    <alt-global-header />
    <main class="flex-grow">
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
  @apply font-body text-black leading-base bg-base;
}
</style>
