// import Vue from 'vue';
// import App from './App.vue';
// new Vue({
//     render: h => h(App)
// }).$mount('#app');

import { createApp } from 'vue';
import App from './App.vue';

export const eventBus = createApp(App);

createApp(App).mount('#app');