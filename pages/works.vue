<template>
  <div class="mt-24 md:pb-20">
    <alt-page title="WORKS" sub-title="制作事例">
      <div class="mt-16">
        <alt-container>
          <ul class="flex justify-around flex-col md:flex-row">
            <li class="flex-grow">
              <div>
                <div class="max-w-[472px] min-h-[292px] bg-gray rounded" />
                <dl class="mt-lg">
                  <dt class="text-xl">alt.</dt>
                  <dd class="mt-md font-sans text-gray text-sm md:text-base">
                    Portfolio site
                  </dd>
                </dl>
              </div>
            </li>
          </ul>
        </alt-container>
        <alt-contact-section />
      </div>
    </alt-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: '制作事例',
  },
})
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  //opacity: 0;
  transform: scale(0);
}
</style>
