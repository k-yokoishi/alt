<template>
  <div>
    <GlobalHeader />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style>
body {
  @apply font-body text-black;
}
</style>

<script>
import GlobalHeader from '../components/AltGlobalHeader'
export default {
  components: { GlobalHeader },
}
</script>
