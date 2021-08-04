<template>
  <div class="mt-24 md:pb-20">
    <alt-page title="WORKS" sub-title="制作事例">
      <div class="mt-16">
        <alt-container>
          <ul class="flex flex-col md:flex-row">
            <li v-for="work in works" :key="work.title">
              <nuxt-link :to="work.to">
                <div class="duration-100 hover:opacity-80">
                  <div class="max-w-[472px] md:min-h-[292px] rounded">
                    <img :src="work.thumbnailImage" :alt="work.title" />
                  </div>
                  <dl class="mt-lg">
                    <dt class="text-xl">{{ work.title }}</dt>
                    <dd class="mt-md font-sans text-gray text-sm md:text-base">
                      {{ work.desc }}
                    </dd>
                  </dl>
                </div>
              </nuxt-link>
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
  data() {
    return {
      works: [
        {
          title: 'alt.',
          desc: 'Portfolio site',
          to: '/works/alt',
          thumbnailImage: require('../../assets/images/works_alt.jpg'),
        },
      ],
    }
  },
  head: {
    title: '制作事例',
  },
})
</script>
