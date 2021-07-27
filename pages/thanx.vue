<template>
  <div class="mt-24 pb-20">
    <alt-page title="CONTACT" sub-title="お問い合わせ">
      <div class="mt-16 text-center">
        <alt-container size="sm">
          <header class="text-h1 font-sans">Thank you!</header>
          <p class="mt-lg">
            お問い合わせありがとうございました。<br />
            3営業日以内にご返信いたします。返信まで今しばらくおまちください。
          </p>
          <div class="mt-xl">
            <alt-button rounded to="/">TOPに戻る</alt-button>
          </div>
        </alt-container>
      </div>
    </alt-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'お問い合わせありがとうございました',
  },
})
</script>
