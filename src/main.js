import Vue from 'vue';
import App from './App.vue';
import router from './router';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faTrashAlt);

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
