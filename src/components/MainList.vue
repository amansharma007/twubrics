<template>
  <div>
    <div class="row form-group">
      <div class="col-4">
        <label class="float-left mt-5"> <strong>Sort By:</strong></label>
        <select v-model="sortType" class="custom-select form-control custom-select float-left mb-5">
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
import { mapState, mapGetters } from 'vuex'
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
  watch: {
    startDate(newVal, oldVal){
      this.$store.commit('setStartDate', newVal);
    },
    endDate(newVal, oldVal){
      this.$store.commit('setEndDate', newVal);
    },
    sortType(newVal, oldVal){
      this.$store.commit('setSortType', newVal);
      this.profiles = this.getSortedProfiles;
    }
  },
  computed: {
    ...mapGetters({
      getSortedProfiles: 'getSortedProfiles'
    }),
    profiles: {
        get: function(){
          return this.$store.getters.getProfiles;
        },
        set: function(newVal){
          return newVal
        }
    }
  },
  methods: {
    removeCurrent: function(index){
      this.profiles.splice(index, 1);
    },
    resetEverything(){
      this.startDate = null;
      this.endDate = null;
      this.sortType = '0';
    }
  },
  created() {
    this.$store.dispatch('loadProfiles')
    
    
  }  
}
</script>

<style scoped>

</style>
