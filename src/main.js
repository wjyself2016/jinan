import Vue from 'vue';
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';
import App from './App.vue';
import router from './router/router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.sass';

Vue.use(VueResource);
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
