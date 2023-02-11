import { createApp } from 'vue';
import { createStore, createLogger } from 'vuex';
import App from './App.vue';

const store = createStore({
  plugins: [createLogger()], // 记录日志
  state() {
    return {
      num: 1,
      str: '123',
    };
  },
  mutations: {
    increment(state) {
      // state.num++;
      // setTimeout(() => {
      state.num++;
      // }, 1000);
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');

      // setTimeout(() => {
      //   commit("increment");
      // }, 1000);
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
