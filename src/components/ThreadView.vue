<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-if="!thread" class="mdl-spinner mdl-js-spinner is-active"></div>
        <div v-else v-model="thread" class="thread-card">
          <div class="thread__title mdl-card__actions">
            <span>{{ title }}</span>
          </div>
          <div>
            <span>{{ body }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ThreadView',

    props: ['threadId'],

    mounted() {
      this.$http.get(`tochaal/thread/${this.$route.params.threadId}/`)
        .then(({ data }) => {
          this.thread = data;
        });
    },

    data() {
      return {
        thread: null,
      };
    },

    computed: {
      title() {
        return this.thread.title;
      },
      body() {
        return this.thread.body;
      },
    },
  };
</script>

<style scoped>
  .thread-card {
    margin-bottom: 8px;
  }

  .thread__title {
    height: 52px;
    padding: 16px;
    text-align: right;
  }

  .thread__title > span {
    font-size: 14px;
    font-weight: bold;
  }
</style>
