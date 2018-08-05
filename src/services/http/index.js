import axios from 'axios';
import VueAxios from 'vue-axios';
import { BASE_URL } from './urls';

const http = axios.create({
  baseURL: BASE_URL,
});

export default {
  install(Vue) {
    Vue.use(VueAxios, http);
  },
};
