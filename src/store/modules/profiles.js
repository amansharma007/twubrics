import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    profiles: []
  };
  
  //getters
  const getters = {};
  
  //mutations
  const mutations = {
      setProfiles(state, profiles){
          state.profiles = profiles;
      }
  };
  
  const actions = {};
  
  export default {
    state,
    actions,
    mutations,
    getters
  };