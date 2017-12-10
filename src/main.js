// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


// import SlsVueUi from 'sls-vue-ui';
// Vue.use(SlsVueUi);

import {
	Hello,
	Word
} from 'sls-vue-ui';
Vue.use(Hello);
Vue.use(Word);

// Vue.component(Hello.name, Hello);
// Vue.component(Word.name, Word);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
