<template>
  <alt-works-page
    title="メルサポ"
    :desc="desc"
    :mv-image-src="mvImageSrc"
    url="https://bit.ly/3NwuiJv"
    category="業務効率化ツール"
    skills="コーディング"
    price="月額4,980円"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      desc: `メルカリ出品作業を効率化するツール「メルサポ」を開発しました。<br>
      クロスプラットフォームかつ導入が簡単にできるようにChrome拡張機能として開発しました。
      `,
      mvImageSrc: require('../../assets/images/works_mersupo.png'),
    }
  },
  head: {
    title: '制作事例 - メルサポ ',
  },
})
</script>
