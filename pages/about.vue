<template>
  <div class="mt-24 md:pb-20">
    <alt-page title="ABOUT" sub-title="私たちについて">
      <section>
        <alt-container>
          <header class="mt-16 lg:ml-40">
            <h2 class="text-2xl md:text-h2 font-bold">
              はじめまして、alt.です。
            </h2>
            <p class="mt-lg">
              私たちは設計・デザイン・実装まで夫婦でおこなうWeb制作チームです。<br />
              神奈川県横浜市を拠点に制作活動をおこなっています。
            </p>
          </header>
        </alt-container>
        <main class="mt-20">
          <alt-container>
            <alt-hotizontal-section title="Profile">
              <ul
                class="
                  flex flex-wrap
                  md:flex-nowrap
                  justify-between
                  -ml-2xl
                  -mt-xl
                "
              >
                <li
                  v-for="profile in profiles"
                  :key="profile.name"
                  class="ml-2xl mt-xl w-full"
                >
                  <div>
                    <!-- <div class="min-h-[244px] w-full rounded-lg bg-gray" /> -->
                    <div>
                      <dl>
                        <dt>
                          <div class="text-sm text-gray font-sans">
                            {{ profile.job }}
                          </div>
                          <div clas="mt-8 text-xl">{{ profile.name }}</div>
                        </dt>
                        <dd class="mt-md">
                          <p class="text-sm">{{ profile.desc }}</p>
                        </dd>
                      </dl>
                    </div>
                    <div class="mt-xl">
                      <alt-box title="Skill">
                        <span class="text-sm">
                          {{ profile.skills }}
                        </span>
                      </alt-box>
                    </div>
                  </div>
                </li>
              </ul>
            </alt-hotizontal-section>
            <alt-hotizontal-section title="Outline">
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
      profiles: [
        {
          name: '横石　和貴',
          job: 'Engineer',
          desc: '1991年長崎県佐世保市生まれ。大学でコンピュータサイエンスを学び、卒業後メーカー系企業AI関連のプラットフォーム開発に従事。その後、Web系の事業会社に転職しフロントエンドエンジニアとして活動しながら、副業でWeb制作をおこなう。',
          skills: [
            'HTML',
            'CSS,Sass',
            'Javascript',
            'Typescript',
            'jQuery',
            'Vue.js',
            'React',
            'Wordpress',
            'Python',
            'Go',
            'AWS',
          ].join(' | '),
        },
        {
          name: '横石　成美',
          job: 'Designer / Director',
          desc: '1991年神奈川県横浜市生まれ。Web系の事業会社でカスタマーサポートとして働く中でUI/UXに興味を持ちフィリピンへIT留学に行く。帰国後、事業会社でインハウスデザイナーをしながら副業でWeb制作をおこない、2021年7月に独立。',
          skills: ['photoshop', 'Illustrator', 'XD', 'Sketch', 'Figma'].join(
            ' | '
          ),
        },
      ],
      outlines: [
        { label: '屋号', value: 'alt.' },
        { label: '代表', value: '横石成美' },
        { label: '事業形態', value: '個人事業主' },
        { label: '設立', value: '2021年7月' },
        { label: '所在地', value: '神奈川県横浜市（自宅兼用のため一部省略）' },
        {
          label: '事業内容',
          value:
            'Webサイトの企画・デザイン・制作・運用・保守 / LP制作 / WordPress構築・カスタマイズ / バナー制作など',
        },
      ],
    }
  },
  head: {
    title: '私たちについて',
  },
})
</script>
