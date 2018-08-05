<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-for="branch in this.branches" class="branch-card">
          <router-link
            :to="{ name: 'branch', params: { 'branchId': branch.id } }">
            <button class="mdl-button mdl-js-button mdl-button--primary">
              <span>{{ branch.name }}</span>
            </button>
            <!--<div class="branch__title mdl-card__actions">-->
            <!--</div>-->
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BranchesView',

    mounted() {
      this.$http.get('explore/branches/')
        .then(({ data }) => {
          this.branches = data;
        });
    },

    data() {
      return {
        branches: null,
      };
    },
  };
</script>

<style scoped>
  .branch-card {
    text-align: center;
    margin-bottom: 8px;
  }

  .branch__title {
    height: 52px;
    padding: 16px;
    text-align: right;
  }

  .branch__title > span {
    font-size: 14px;
    font-weight: bold;
  }

</style>
