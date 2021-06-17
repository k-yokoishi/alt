<template>
  <div>
    <div class="mv">
      <div class="mv__graphics">
        <div class="mv__graphicImage">
          <img src="../assets/images/mv_graphic_01.png" alt="" />
        </div>
        <div class="mv__graphicImage">
          <img src="../assets/images/mv_graphic_02.png" alt="" />
        </div>
        <div class="mv__graphicImage">
          <img src="../assets/images/mv_graphic_03.png" alt="" />
        </div>
        <div class="mv__graphicImage">
          <img src="../assets/images/mv_graphic_04.png" alt="" />
        </div>
      </div>
      <div class="mv__inner">
        <p class="mv__catch">
          私たちは設計・デザイン・実装まで<br />夫婦でおこなうWeb制作チームです。
        </p>
        <div class="mv__catchLead mt-lg text-sm text-gray font-sans">
          Direction / UI Design / Web Design / Development
        </div>
        <div class="mv__linkToAbout mt-2xl">
          <alt-link to="/about" underline arrow size="lg">ABOUT US</alt-link>
        </div>
        <div class="scrollDown">
          <div class="scrollDown__arrowWrapper">
            <i class="scrollDown__arrow" />
          </div>
          <img
            class="scrollDown__circle"
            src="../assets/images/scroll_down_circle.png"
            :style="scrollDownStyle"
            alt=""
          />
        </div>
      </div>
    </div>
    <div style="height: 640px"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AltLink from '~/components/AltLink.vue'

export default Vue.extend({
  components: { AltLink },
  data() {
    return {
      rotateDeg: 0,
    }
  },
  head: {
    title: 'トップ',
  },
  computed: {
    scrollDownStyle() {
      return {
        // @ts-ignore
        transform: `rotate(${this.rotateDeg}deg)`,
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      this.rotateDeg = document.body.getClientRects()[0].top * -0.6
    })
  },
})
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 48px;
}

.mv {
  position: relative;
  overflow: hidden;
  &__inner {
    position: relative;
    min-height: 640px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 90px;
    margin-right: 90px;
  }

  &__catch {
    font-size: 44px;
  }
  &__catchLead {
    font-size: 20px;
  }
  &__graphics {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 640px;
    width: 100%;
  }
  &__graphicImage {
    position: absolute;
    animation-name: rotateAndAppear;
    animation-duration: 10s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    &:nth-child(2) {
      animation-delay: 2.5s;
    }
    &:nth-child(3) {
      animation-delay: 5s;
    }
    &:nth-child(4) {
      animation-delay: 7.5s;
    }
  }
}

@keyframes rotateAndAppear {
  0% {
    transform: rotate(0deg);
    opacity: 0;
  }
  25% {
    transform: rotate(90deg);
    opacity: 1;
  }
  50% {
    transform: rotate(180deg);
    opacity: 0;
  }
  75% {
    transform: rotate(270deg);
    opacity: 1;
  }
  100% {
    transform: rotate(360deg);
    opacity: 0;
  }
}

.scrollDown {
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 160px;

  &__arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    &::before {
      content: '';
      position: absolute;
      display: block;
      width: 3px;
      height: 36px;
      background-color: #1a2c44;
      transform: translate(-50%, -50%);
    }

    &::after {
      content: '';
      position: absolute;
      display: block;
      width: 16px;
      height: 16px;
      border-bottom: solid 3px #1a2c44;
      border-right: solid 3px #1a2c44;
      transform: rotate(45deg);
      bottom: -16px;
      left: -8px;
    }
  }

  &__circle {
    width: 100%;
    transition: 100ms ease-in-out;
  }
}
</style>
