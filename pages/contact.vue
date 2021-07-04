<template>
  <alt-container>
    <iframe
      id="hidden_iframe"
      name="hidden_iframe"
      style="display: none"
      @load="handleLoadIframe"
    ></iframe>
    <div>
      <form
        method="post"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdKlWv_MdroRu9gTEjmo3_QjnGNMbekGW7BPuuI0t7jUsDczQ/formResponse"
        target="hidden_iframe"
        @submit="handleSubmit"
      >
        <div class="field">
          <label for="name" class="field-label">お名前</label>
          <input
            id="name"
            v-model="form.name"
            :name="names.name"
            class="input field-input"
          />
        </div>
        <div class="field">
          <label for="name" class="field-label">メールアドレス</label>
          <input
            id="email"
            v-model="form.email"
            :name="names.email"
            class="input field-input"
          />
        </div>
        <div class="field">
          <label for="name" class="field-label">お問い合わせ内容</label>
          <textarea
            id="message"
            v-model="form.message"
            :name="names.message"
            class="textarea field-input"
          />
        </div>
        <div class="mt-4 flex justify-center">
          <alt-button type="submit" :disabled="submitted">
            お問い合わせ
          </alt-button>
        </div>
      </form>
    </div>
  </alt-container>
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
.field {
  @apply flex items-center text-left;

  & + .field {
    @apply mt-2;
  }
}
.field-label {
  @apply w-40;
}
.field-input {
  @apply ml-4;
}
.input,
.textarea {
  @apply border  w-full max-w-[240px];
}
</style>
