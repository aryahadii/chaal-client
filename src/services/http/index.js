import axios from 'axios';
import VueAxios from 'vue-axios';

const http = axios.create({
  baseURL: `${process.env.API_HOST}`,
});

export default {
  install(Vue) {
    Vue.use(VueAxios, http);
  },
};
