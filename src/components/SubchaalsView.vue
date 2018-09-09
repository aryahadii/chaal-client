<template>
  <div>
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-for="subchaal in this.subchaals" class="branch-card">
          <router-link
            :to="{ name: 'subchaal', params: { 'subchaalId': subchaal.id } }">
            <button class="mdl-button mdl-js-button mdl-button--primary">
              <span>{{ subchaal.name }}</span>
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
    name: 'SubchaalsView',

    mounted() {
      this.$http.get('tochaal/subchaals/')
        .then(({ data }) => {
          this.subchaals = data;
        });
    },

    data() {
      return {
        subchaals: null,
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
