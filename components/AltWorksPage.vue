<template>
  <div class="mt-24 md:pb-20">
    <alt-page title="WORKS" sub-title="制作事例">
      <div class="mt-16">
        <alt-container>
          <section>
            <header>
              <h2 class="text-4xl">{{ title }}</h2>
            </header>
            <main class="mt-2xl">
              <figure class="max-full rounded">
                <img :src="mvImageSrc" alt="alt." />
              </figure>
              <div class="md:flex mt-lg md:mt-16">
                <div>
                  <p v-html="desc"></p>
                </div>
                <div
                  class="
                    mt-lg
                    pt-lg
                    border-t
                    md:mt-0
                    md:pt-0
                    md:border-t-0
                    md:ml-3xl
                    md:pl-3xl
                    md:border-l
                  "
                >
                  <ul>
                    <li
                      v-for="detail in details"
                      :key="detail.label"
                      class="mt-lg first:mt-0"
                    >
                      <dl>
                        <dt class="text-gray font-bold leading-none">
                          {{ detail.label }}
                        </dt>
                        <dd class="mt-sm leading-none">{{ detail.value }}</dd>
                      </dl>
                    </li>
                  </ul>
                </div>
              </div>
            </main>
            <footer class="mt-3xl md:mt-20">
              <div class="text-center">
                <alt-link to="/works" size="xl" back-arrow>
                  <span class="font-bold">制作事例一覧へ戻る</span>
                </alt-link>
              </div>
            </footer>
          </section>
        </alt-container>
        <alt-contact-section />
      </div>
    </alt-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    mvImageSrc: { type: String, required: true },
    url: { type: String, default: '' },
    category: { type: String, default: '' },
    skills: { type: String, default: '' },
    productionPeriod: { type: String, default: '' },
  },
  computed: {
    details() {
      return [
        { label: 'URL', value: this.url },
        { label: 'カテゴリー', value: this.category },
        { label: '担当', value: this.skills },
        { label: '製作期間', value: this.productionPeriod },
      ]
    },
  },
})
</script>
