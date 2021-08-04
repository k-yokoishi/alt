<template>
  <alt-works-page
    title="alt."
    :desc="desc"
    :mv-image-src="mvImageSrc"
    url="https://alt-design.work/"
    category="Portfolio site"
    skills="情報設計 / デザイン / コーディング"
    production-period="1ヶ月"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      desc: `独立にあたり自身のポートフォリオサイトを制作しました。<br />
夫婦で制作に取り組んでいることもあり、ユニセックスな雰囲気のデザインを目指しました。<br />
情報設計はシンプルにしつつも、動きを多用し遊びゴコロを取り入れています。`,
      mvImageSrc: require('../../assets/images/works_alt.jpg'),
    }
  },
  head: {
    title: '制作事例 - alt.',
  },
})
</script>
