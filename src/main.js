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

Vue.http.interceptors.push((request, next) => {
    next((resp) => {
        let statusCode = resp.status;
        switch (statusCode) {
            case 500: 
                app.$message.error(resp.body.message);
                break;
            case 200: 
                if (resp.body.errno === 1003 && location.hash.indexOf('login') === -1) {
                    window.location.hash = '/login';
                }
                if (resp.body.errno && resp.body.errno != 1003) {
                    app.$message.error(resp.body.errmsg);
                }
				break;
        }
    });
});

let app = new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
