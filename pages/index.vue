<template>
  <div class="pb-[80px]">
    <div class="mv relative overflow-hidden">
      <div class="mv__graphics w-full max-w-[616px] absolute top-xl right-xl">
        <div
          v-for="graphic in graphicImageSrc"
          :key="graphic"
          class="mv__graphicImage"
        >
          <img :src="graphic" alt="" />
        </div>
      </div>
      <div class="mv__inner">
        <p class="text-[44px] font-bold leading-[70px]">
          私たちは設計・デザイン・実装まで<br />夫婦でおこなうWeb制作チームです。
        </p>
        <div class="mv__catchLead mt-lg text-sm text-gray font-sans">
          Direction / UI Design / Web Design / Development
        </div>
        <div class="mv__linkToAbout mt-2xl">
          <alt-link to="/about" underline arrow size="xl">
            <span class="font-sans">ABOUT US</span>
          </alt-link>
        </div>
        <div class="scrollDown">
          <div class="scrollDown__arrowWrapper">
            <i
              class="
                scrollDown__arrow
                absolute
                top-1/2
                left-1/2
                translate-x-1/2 translate-y-1/2
              "
            />
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
    <alt-section title="私たちができること" sub-title="SERVICE">
      <div class="max-w-5xl w-full mx-auto">
        <ul class="flex justify-between">
          <li v-for="service in services" :key="service.title">
            <div class="flex flex-col items-center max-w-[315px]">
              <figure class="height-[160px] w-auto">
                <img :src="service.iconSrc" alt="" />
              </figure>
              <dl class="mt-lg">
                <dt class="text-2xl font-bold text-center">
                  {{ service.title }}
                </dt>
                <dd class="mt-md leading-[26px]">{{ service.description }}</dd>
              </dl>
            </div>
          </li>
        </ul>
      </div>
      <div class="mt-2xl text-center">
        <alt-link arrow underline size="xl" to="/">
          <span class="font-sans">VIEW MORE</span>
        </alt-link>
      </div>
    </alt-section>
    <alt-section title="制作事例" sub-title="WORKS" class="overflow-hidden">
      <div class="relative">
        <div
          class="
            sectionWorks__bg
            font-bold
            absolute
            -top-16
            right-0
            text-white text-[160px]
            whitespace-nowrap
          "
        >
          FEATURED WORKS
        </div>
        <div class="max-w-5xl pt-14 mx-auto">
          <ul class="flex justify-between">
            <li>
              <div class="max-w-[472px] min-w-[472px] w-full">
                <div class="max-w-[472px] min-h-[292px] bg-gray rounded" />
                <dl class="mt-lg">
                  <dt class="text-xl">お取り寄せタウン</dt>
                  <dd class="mt-md font-sans text-gray">Service site</dd>
                </dl>
              </div>
            </li>
            <li class="mt-2xl">
              <div class="max-w-[472px] min-w-[472px] w-full">
                <div class="max-w-[472px] min-h-[292px] bg-gray rounded" />
                <dl class="mt-lg">
                  <dt class="text-xl">alt.</dt>
                  <dd class="mt-md font-sans text-gray">Portfolio site</dd>
                </dl>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-2xl text-center">
        <alt-link arrow underline size="xl" to="/">
          <span class="font-sans">VIEW MORE</span>
        </alt-link>
      </div>
    </alt-section>
    <section
      ref="sectionContact"
      class="sectionContact mt-[172px] mx-[90px] rounded-xl relative"
    >
      <div class="absolute -top-16 left-24">
        <div class="relative w-40 h-40">
          <div class="absolute">
            <img src="../assets/images/contact_airplane_circle.png" alt="" />
          </div>
          <div
            class="
              sectionContact__airplane
              absolute
              top-1/2
              left-1/2
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
          <p>
            Web制作やクリエイティブに関するお困りごとがあれば<br />
            まずはお気軽にお問い合わせください。
          </p>
        </main>
        <footer class="mt-lg flex justify-center">
          <alt-button rounded>お問い合わせはこちら</alt-button>
        </footer>
      </div>
    </section>
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
      planeLanded: false,
      graphicImageSrc: [
        require('../assets/images/mv_graphic_01.png'),
        require('../assets/images/mv_graphic_02.png'),
        require('../assets/images/mv_graphic_03.png'),
        require('../assets/images/mv_graphic_04.png'),
      ],
      services: [
        {
          title: 'ディレクション',
          description:
            'Webサイト全体の構成・設計をおこなうにあたり、お客様のご要望や課題をヒアリングいたします。ヒアリング内容を元にWebサイトの土台となる目的を明確にしたうえで最適なプランニングをご提案します。',
          iconSrc: require('../assets/images/icon_direction.png'),
        },
        {
          title: 'デザイン',
          description:
            '「売上を上げたい」「サービスのイメージアップをしたい」などお客様のご要望をお伺いした上で、Webサイトの目的が実現できるデザインをご提案します',
          iconSrc: require('../assets/images/icon_design.png'),
        },
        {
          title: '開発実装',
          description:
            'HTML・CSS・Javascriptを使い動きのあるデザインを実現します。見た目の美しさだけでなく、長期的に運用することを見据えたメンテナンスのしやすいコードにこだわります。',
          iconSrc: require('../assets/images/icon_program.png'),
        },
      ],
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
    const sectionContactRect = this.$refs.sectionContact as HTMLElement

    window.addEventListener('scroll', () => {
      const rect = sectionContactRect.getBoundingClientRect()
      this.rotateDeg = window.pageYOffset * 0.25
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
.mv {
  &__inner {
    min-height: 712px;
    margin-left: 90px;
    margin-right: 90px;
    @apply relative flex flex-col justify-center;
  }

  &__catchLead {
    font-size: 20px;
  }
  &__graphicImage {
    animation-name: rotateAndAppear;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    @apply absolute blur-xl;
    &:nth-child(2) {
      animation-delay: -2.5s;
    }
    &:nth-child(3) {
      animation-delay: -5s;
    }
    &:nth-child(4) {
      animation-delay: -7.5s;
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
  bottom: 72px;
  right: 0;
  max-width: 160px;

  &__arrow {
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
    transition: 75ms cubic-bezier(0.2, 0, 0.8, 1);
  }
}
.sectionWorks__bg {
  z-index: -1;
  transform: translateX(100%);
  animation-name: fadeInOut;
  animation-duration: 40s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes fadeInOut {
  from {
    transform: translateX(100%);
    right: 0;
  }
  to {
    transform: translateX(0);
    right: 100vw;
  }
}
.sectionContact {
  background: url('assets/images/contact_section_bg.png') no-repeat center;
  background-size: cover;

  &__airplane {
    transition-duration: 300ms;
    &.planeLanded {
      transform: translate(124px, -156px);
    }
  }
}
</style>
