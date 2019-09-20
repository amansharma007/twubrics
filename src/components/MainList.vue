<template>
  <div>
    <div class="row form-group">
      <div class="col-4">
        <label class="float-left mt-5"> <strong>Sort By:</strong></label>
        <select v-model="sortType" @change="sortList" class="custom-select form-control custom-select float-left mb-5">
          <option value="0">Select a sorting option</option>
          <option value="1">Twubric Score</option>
          <option value="2">Friends</option>
          <option value="3">Influence</option>
          <option value="4">Chirpiness</option>
        </select>
      </div>
      <div class="col-5 ml-2">
        <div class="row form-group text-left display-block">
          <label class="mt-5"><strong>Select Dates:</strong></label>
            <div class="row">
              <datepicker v-model="startDate" class="form-control datepicker col-5 mr-1 ml-3" placeholder="Start Date"></datepicker>
              <datepicker v-model="endDate" class="form-control datepicker col-5" placeholder="End Date"></datepicker>
            </div>
        </div>
      </div>
      <div class="col-2 text-left">
        <button @click="resetEverything" slot="removeButton" type="button" class="btn btn-warning" style="margin-top: 5rem;">Reset</button>
      </div>
    </div>
    <div class="row">
      <Card v-for="(profile, i) in profiles">
        <img slot="userImage" width="100px" v-if="profile.image" :src="profile.image">
        <span slot="userFullName"><strong>{{profile.fullname}}</strong></span>
        <sup slot="userName">@{{profile.username}}</sup>
        <span slot="userScore">{{profile.twubric.total}}</span>

        <span slot="userFriends">{{profile.twubric.friends}}</span>
        <span slot="userInfluence">{{profile.twubric.influence}}</span>
        <span slot="userChirpiness">{{profile.twubric.chirpiness}}</span>

        <p slot="userDate">{{ profile.join_date | moment("MMMM DD, YYYY")}}</p>
        <button slot="removeButton" type="button" class="btn btn-danger" @click="removeCurrent(i)">Remove</button>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from './app-components/Card.vue'
import { mapState } from 'vuex'
import axios from 'axios'
import config from '../config.js'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'

export default {
  name: 'MainList',
  components: {
    Card,
    Datepicker
  },
  data(){
    return {
      sortType: '0',
      startDate: 0,
      endDate: 0
    }
  },
  computed: {
    ...mapState({
      profiles: function(state){
        var profiles = state.profiles.profiles;
        if(this.startDate && this.endDate){
          let startDate = moment(new Date(this.startDate)).format("MMMM DD, YYYY");
          let endDate = moment(new Date(this.endDate)).format("MMMM DD, YYYY");
          console.log("see the dates", startDate, endDate);
            return profiles.filter((el) =>{
              let jD = moment(new Date(el.join_date * 1000)).format("MMMM DD, YYYY");
              return moment(jD).isBetween(startDate, endDate)
            });
        } else {
          return profiles;
        }
        
      } 
    })
  },
  methods: {
    removeCurrent: function(index){
      this.profiles.splice(index, 1);
    },
    sortList(){
      switch(this.sortType){
        case '0': this.profiles.sort((a,b) => a.uid > b.uid ? 1 : -1); break;
        case '1': this.profiles.sort((a,b) => a.twubric.total > b.twubric.total ? 1 : -1); break;
        case '2': this.profiles.sort((a,b) => a.twubric.friends > b.twubric.friends ? 1 : -1); break;
        case '3': this.profiles.sort((a,b) => a.twubric.influence > b.twubric.influence ? 1 : -1); break;
        case '4': this.profiles.sort((a,b) => a.twubric.chirpiness > b.twubric.chirpiness ? 1 : -1); break;
      }
    },
    resetEverything(){
      this.startDate = null;
      this.endDate = null;
      this.sortType = '0';
      this.sortList('0');
    }
  },
  created() {
    var self = this;
    axios.get(config.profileAPIEndpoint)
        .then(function(response){
            console.log("This is the response", response);
            self.$store.commit('setProfiles', response.data);
        })
  }  
}
</script>

<style scoped>

</style>
