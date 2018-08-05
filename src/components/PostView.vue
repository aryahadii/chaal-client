<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-if="!post" class="mdl-spinner mdl-js-spinner is-active"></div>
        <div v-else v-model="post" class="post-card">
          <div class="post__title mdl-card__actions">
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
    name: 'PostView',

    props: ['postId'],

    mounted() {
      this.$http.get(`explore/post/${this.$route.params.postId}/`)
        .then(({ data }) => {
          this.post = data;
        });
    },

    data() {
      return {
        post: null,
      };
    },

    computed: {
      title() {
        return this.post.title;
      },
      body() {
        return this.post.body;
      },
    },
  };
</script>

<style scoped>
  .post-card {
    margin-bottom: 8px;
  }

  .post__title {
    height: 52px;
    padding: 16px;
    text-align: right;
  }

  .post__title > span {
    font-size: 14px;
    font-weight: bold;
  }
</style>
