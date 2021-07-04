<template>
  <div class="mt-24 pb-20">
    <alt-page title="CONTACT" sub-title="お問い合わせ">
      <iframe
        id="hidden_iframe"
        name="hidden_iframe"
        class="hidden"
        @load="handleLoadIframe"
      />
      <div class="mt-16">
        <alt-container size="sm">
          <p>
            ご不明点やWeb制作についてのご依頼、ご相談は以下フォームよりお気軽にお問い合わせください。3営業日以内にご返信いたします。
          </p>
          <div class="mt-20">
            <form
              method="post"
              action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdKlWv_MdroRu9gTEjmo3_QjnGNMbekGW7BPuuI0t7jUsDczQ/formResponse"
              target="hidden_iframe"
              @submit="handleSubmit"
            >
              <alt-form-field label="お名前" label-for="name" required>
                <input
                  id="name"
                  v-model="form.name"
                  :name="names.name"
                  class="input"
                  required
                />
              </alt-form-field>
              <alt-form-field label="メールアドレス" label-for="email" required>
                <input
                  id="email"
                  v-model="form.email"
                  :name="names.email"
                  class="input"
                  required
                />
              </alt-form-field>
              <alt-form-field
                label="お問い合わせ内容"
                label-for="message"
                required
              >
                <textarea
                  id="message"
                  v-model="form.message"
                  :name="names.message"
                  rows="5"
                  class="textarea"
                  required
                />
              </alt-form-field>
              <div class="mt-3xl flex justify-center">
                <div class="max-w-[200px] w-full">
                  <alt-button full rounded type="submit" :disabled="submitted">
                    送信する
                  </alt-button>
                </div>
              </div>
            </form>
          </div>
        </alt-container>
      </div>
    </alt-page>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AltButton from '~/components/AltButton.vue'

export default Vue.extend({
  components: { AltButton },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      names: {
        name: 'entry.1764530242',
        email: 'entry.1624598668',
        message: 'entry.1466039086',
      },
      submitted: false,
    }
  },
  head: {
    title: 'お問い合わせ',
  },
  methods: {
    handleLoadIframe() {
      if (this.submitted) {
        window.location.href = '/thanx'
      }
    },
    handleSubmit() {
      this.submitted = true
    },
  },
})
</script>

<style lang="scss" scoped>
.input,
.textarea {
  @apply w-full p-[12px];
}
</style>
