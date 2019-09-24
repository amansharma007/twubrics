import Vue from 'vue'
import Vuex from 'vuex'
import moment from 'moment'
import axios from 'axios'
import config from '../../config.js'


Vue.use(Vuex)

const state = {
    profiles: [],
    sortType: '0',
    startDate: 0,
    endDate: 0
  };
  
  //getters
  const getters = {
    getSortedProfiles(state){
      switch(state.sortType){
        case '0': return state.profiles.sort((a,b) => a.uid > b.uid ? 1 : -1); break;
        case '1': return state.profiles.sort((a,b) => a.twubric.total > b.twubric.total ? 1 : -1); break;
        case '2': return state.profiles.sort((a,b) => a.twubric.friends > b.twubric.friends ? 1 : -1); break;
        case '3': return state.profiles.sort((a,b) => a.twubric.influence > b.twubric.influence ? 1 : -1); break;
        case '4': return state.profiles.sort((a,b) => a.twubric.chirpiness > b.twubric.chirpiness ? 1 : -1); break;
      }
    },
    getProfiles(state){
      let profiles = state.profiles;
      if(state.startDate && state.endDate){
        let startDate = moment(new Date(state.startDate)).format("MMMM DD, YYYY");
        let endDate = moment(new Date(state.endDate)).format("MMMM DD, YYYY");
        console.log("see the dates", startDate, endDate);
          return profiles.filter((el) =>{
            let jD = moment(new Date(el.join_date * 1000)).format("MMMM DD, YYYY");
            return moment(jD).isBetween(startDate, endDate)
          });
      } else {
        return profiles;
      }
    }
  };
  
  //mutations
  const mutations = {
      setProfiles(state, profiles){
          state.profiles = profiles;
      },
      setEndDate(state, newVal){
        state.endDate = newVal;
      },
      setStartDate(state, newVal){
        state.startDate = newVal;
      },
      setSortType(state, newVal){
        state.sortType = newVal;
      }
  };
  
  const actions = {
    loadProfiles({commit}){
      axios.get(config.profileAPIEndpoint)
        .then(function(response){
            console.log("This is the response", response);
            commit('setProfiles', response.data)
        })
        
    }
  };
  
  export default {
    state,
    actions,
    mutations,
    getters
  };