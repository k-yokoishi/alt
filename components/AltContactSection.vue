<template>
  <section ref="sectionContact" class="mt-28 md:mt-[172px]">
    <alt-container size="lg" sp-full>
      <div class="sectionContact md:rounded-xl relative">
        <div class="absolute -top-16 left-4 md:left-24">
          <div class="relative w-[120px] h-[120px] md:w-40 md:h-40">
            <div class="absolute">
              <img src="../assets/images/contact_airplane_circle.png" alt="" />
            </div>
            <div
              class="
                sectionContact__airplane
                absolute
                top-1/2
                left-1/2
                duration-300
                transform
                -translate-x-1/2 -translate-y-1/2
              "
              :class="{ planeLanded }"
            >
              <img src="../assets/images/contact_airplane.png" alt="" />
            </div>
          </div>
        </div>
        <div class="py-[64px] text-center">
          <header class="font-sans text-[32px]">
            <h2>CONTACT</h2>
          </header>
          <main class="mt-md">
            <p class="text-sm md:text-base">
              Web制作やクリエイティブに関する<br
                class="md:hidden"
              />お困りごとがあれば<br />
              まずはお気軽にお問い合わせください。
            </p>
          </main>
          <footer class="mt-lg flex justify-center">
            <alt-button to="/contact" rounded>お問い合わせはこちら</alt-button>
          </footer>
        </div>
      </div>
    </alt-container>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      planeLanded: false,
    }
  },
  mounted() {
    const sectionContactRect = this.$refs.sectionContact as HTMLElement

    window.addEventListener('scroll', () => {
      const rect = sectionContactRect.getBoundingClientRect()
      const bottomOfWindow = window.innerHeight
      const bottomOfElem = rect.top + rect.height
      if (bottomOfWindow > bottomOfElem && !this.planeLanded) {
        this.planeLanded = true
      }
    })
  },
})
</script>

<style lang="scss">
.sectionContact {
  background: url('assets/images/contact_section_bg.png') no-repeat center;
  background-size: cover;

  &__airplane {
    &.planeLanded {
      @apply transform translate-x-[64px] translate-y-[-96px] md:translate-x-[124px] md:translate-y-[-156px];
    }
  }
}
</style>
