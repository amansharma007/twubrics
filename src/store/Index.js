import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import profiles from './modules/profiles';

let store = new Vuex.Store({
    modules: {
        profiles
    }
});

export default store;
