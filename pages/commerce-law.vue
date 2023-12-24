<template>
  <div class="mt-24 md:pb-20">
    <alt-page
      title="特定商取引法に基づく表記"
      sub-title="Guide for Specified Commercial Transactions Act"
    >
      <section>
        <main class="mt-20">
          <alt-container>
            <alt-hotizontal-section>
              <ul>
                <li
                  v-for="outline in outlines"
                  :key="outline.label"
                  class="border-b first:border-t"
                >
                  <dl class="my-lg flex">
                    <dt
                      class="
                        md:pl-md
                        min-w-[96px]
                        md:min-w-[240px]
                        font-bold
                        text-sm
                        md:text-base
                      "
                    >
                      {{ outline.label }}
                    </dt>
                    <dd class="text-sm md:text-base">{{ outline.value }}</dd>
                  </dl>
                </li>
              </ul>
            </alt-hotizontal-section>
          </alt-container>
          <alt-contact-section />
        </main>
      </section>
    </alt-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      outlines: [
        { label: '販売業社の名称', value: '横石 和貴' },
        { label: '所在地', value: '横石 和貴' },
        { label: '電話番号', value: '請求があったら遅滞なく開示します' },
        { label: 'メールアドレス', value: 'ss.xs.m713@gmail.com' },
        { label: '運営統括責任者', value: '横石 和貴' },
        { label: '追加手数料等の追加料金', value: '無し' },
        {
          label: '交換および返品\n（返金ポリシー）',
          value:
            'ソフトウェア製品であるため、原則としてお客様のご都合による返金や返品・キャンセルはできません。但し不具合が生じた場合、対応できる範囲にて無償対応致します。',
        },
        {
          label: '引渡時期',
          value:
            'メルサポにておいてはお申込時に決済となり、完了後商品を利用するためのライセンスキーをメールにて配信致します。以後、不定期でメンテナンス、機能アップデートの配信を行います。',
        },
        {
          label: '受け付け可能な決済手段',
          value: 'クレジットカードまたは国内の銀行振込',
        },
        {
          label: '決済期間',
          value:
            'クレジットカード決済の場合はただちに処理されますが、国内の銀行振込の場合は注文から 3 日以内にお振り込みいただく必要があります。',
        },
        { label: '販売価格', value: '各商品ページに記載の金額' },
      ],
    }
  },
  head: {
    title: '私たちについて',
  },
})
</script>
