<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">

      <div v-for="post in this.posts" class="card">
        <router-link
          :to="{ name: 'post', params: { 'postId': post.id } }">
            <div class="posts__title mdl-card__actions">
              <span>{{ post.title }}</span>
              <br>
              {{ post.created_at }}
            </div>
        </router-link>
      </div>

        <router-link class="add-post-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/post">
          <i class="material-icons">mode_edit</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BranchView',

    props: ['branchId'],

    mounted() {
      this.$http.get(`explore/posts?branch=${this.$route.params.branchId}`)
        .then(({ data }) => {
          this.posts = data;
        });
    },

    data() {
      return {
        posts: null,
      };
    },
  };
</script>

<style scoped>
  .add-post-button {
    position: fixed;
    left: 24px;
    bottom: 24px;
    z-index: 998;
  }

  .posts__title {
    padding: 16px;
    text-align: right;
  }

  .posts__title > span {
    font-weight: bold;
  }
</style>
