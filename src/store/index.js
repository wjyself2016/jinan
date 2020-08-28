import Vue from 'vue';
import Vuex from 'vuex';

import global from './modules/global';
const DEBUG = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
    // actions,
    // mutations,
    modules: {
        global
    },
    strict: DEBUG,
    plugins: []
});
