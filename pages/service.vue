<template>
  <div class="mt-24 md:pb-20">
    <alt-page title="SERVICE" sub-title="わたしたちができること">
      <div class="mt-16">
        <alt-container>
          <alt-hotizontal-section :title="'Web\nProduction'">
            <p>
              ウェブサイトの企画・設計・デザイン・HTMLコーディング・CMS（WordPress）実装まで一貫して制作します。<br />
              夫婦で運営しており、余分な人件費や打ち合わせにかかる時間を削減できるため一般の制作会社よりも低コストで制作を依頼いただけます。<br />
              また、デザインだけ・コーディングだけ・バナーだけの単発依頼や制作会社さまからのご依頼で制作協力（外注）もおこなっております。
            </p>
            <div class="mt-xl">
              <alt-box title="Contents">
                <span class="text-sm"
                  >コーポレートサイト | サービスサイト | ウェブメディア |
                  キャンペーンサイト | LP | Wordpress構築</span
                >
              </alt-box>
            </div>
          </alt-hotizontal-section>
          <alt-hotizontal-section title="Price">
            <p>
              Webサイトの規模や、お客様のご要望に応じ金額は変動いたします。<br />
              よくあるお見積例をプランとしてご用意しておりますので、金額の目安にしていただけます。
            </p>
            <div class="mt-14">
              <ul class="flex flex-col md:flex-row -ml-lg -mt-xl">
                <li
                  v-for="plan in plans"
                  :key="plan.title"
                  class="flex-1 ml-lg mt-xl flex"
                >
                  <alt-box :title="plan.title" class="flex">
                    <p class="text-sm">{{ plan.lead }}</p>
                    <div
                      v-if="plan.priceIsYen"
                      class="font-sans text-center mt-lg"
                    >
                      <span class="text-sm">¥</span
                      ><span class="text-[26px] font-bold">{{
                        plan.price
                      }}</span
                      ><span class="text-xl">+</span
                      ><span class="text-sm">Tax</span>
                    </div>
                    <div v-else class="text-center mt-lg">
                      <span class="text-xl font-bold">{{ plan.price }}</span>
                    </div>
                    <div
                      v-if="plan.structure"
                      class="mt-lg whitespace-pre"
                      v-text="plan.structure"
                    />
                    <ul v-if="plan.features.length" class="mt-md">
                      <li
                        v-for="feature in plan.features"
                        :key="feature"
                        class="mt-sm first:mt-0"
                      >
                        <div class="serviceFeature">{{ feature }}</div>
                      </li>
                    </ul>
                  </alt-box>
                </li>
              </ul>
            </div>
          </alt-hotizontal-section>
          <alt-hotizontal-section title="Flow">
            <ul
              class="
                grid grid-col-1
                md:grid-cols-3
                gap-x-lg gap-y-lg
                md:gap-y-xl
              "
            >
              <li v-for="step in flow" :key="step.step">
                <dl class="">
                  <dt class="border-b border-b-black inline-block">
                    <span class="font-sans text-lg">{{ step.step }}.</span>
                    <span>{{ step.title }}</span>
                  </dt>
                  <dd class="mt-md">
                    <span class="text-sm" v-html="step.desc" />
                  </dd>
                </dl>
              </li>
            </ul>
          </alt-hotizontal-section>
        </alt-container>
        <alt-contact-section />
      </div>
    </alt-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      plans: [
        {
          title: 'Light Plan',
          lead: '名刺代わりの規模でWebサイトを作りたい方におすすめ',
          price: '200,000',
          priceIsYen: true,
          structure: `トップページ\n└ お知らせ\n └ 下層1ページ\n└ 問い合わせ\n└ プライバシーポリシー`,
          features: ['Wordpress更新機能あり', 'レスポンシブ対応'],
        },
        {
          title: 'Basic Plan',
          lead: 'パンフレット代わりの規模でWebサイトを作りたい方におすすめ',
          price: '300,000',
          priceIsYen: true,
          structure: `トップページ\n└ お知らせ\n└ 下層3ページ\n└ 問い合わせ\n└ プライバシーポリシー`,
          features: ['Wordpress更新機能あり', 'レスポンシブ対応'],
        },
        {
          title: 'Customize Plan',
          lead: '予算から相談したい、こだわったサイトにしたい方はまずご相談下さい',
          price: '要見積もり',
          priceIsYen: false,
          structure: ``,
          features: [],
        },
      ],
      flow: [
        {
          step: '01',
          title: 'お問い合わせ',
          desc: 'ご相談は無料で承っておりますので、まずはお問い合わせよりご連絡ください。',
        },
        {
          step: '02',
          title: 'ヒアリング',
          desc: '具体的なプラニングやお見積をおこなうため、納期・予算、制作イメージをヒアリングさせていただきます。ご希望に合わせてzoomなどを使用したオンラインMTGも承っております。',
        },
        {
          step: '03',
          title: '仕様策定 / お見積り',
          desc: 'ヒアリング内容を元にサイトの方向性や構成、お見積りを作成させていただきます。内容をご確認いただき、ご納得いただけましたらご契約となります。',
        },
        {
          step: '04',
          title: 'デザイン',
          desc: 'デザイン制作をおこないます。<br/>まずはトップページのデザインをご提案させていただき、お客様のご意見を反映した上でほかページのデザインをおこないます。',
        },
        {
          step: '05',
          title: 'コーディング / 開発',
          desc: 'できあがったデザインに沿ってコーディングやCMSの導入をおこないます。',
        },
        {
          step: '06',
          title: '公開',
          desc: '公開前にテストサイトをお客様にもご確認いただきます。お客様での確認と、私どもでの検収で問題がなければ公開となります。公開後のサポートをおこなうことも可能ですので、お気軽にご相談ください。',
        },
      ],
    }
  },
  head: {
    title: 'わたしたちができること',
  },
})
</script>

<style lang="scss">
.serviceFeature {
  @apply relative pl-xl;
  &::before,
  &::after {
    @apply block absolute left-0;
  }
  &::before {
    content: '';
    @apply rounded-full w-6 h-6 bg-[#4DB36F];
  }
  &::after {
    content: '';
    @apply w-[12px] h-[8px] border-b-2 border-l-2 border-white transform translate-x-1/2 -rotate-45 top-[6px];
  }
}
</style>
