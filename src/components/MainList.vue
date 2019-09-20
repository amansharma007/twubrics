<template>
  <div>
    <div class="row">

    </div>
    <div class="row">
      <Card v-for="profile in profiles">
        <img slot="userImage" width="100px" :src="profile.image">
        <span slot="userFullName"><strong>{{profile.fullname}}</strong></span>
        <sup slot="userName">@{{profile.username}}</sup>
        <span slot="userScore">{{profile.twubric.total}}</span>

        <span slot="userFriends">{{profile.twubric.friends}}</span>
        <span slot="userInfluence">{{profile.twubric.influence}}</span>
        <span slot="userChirpiness">{{profile.twubric.chirpiness}}</span>

        <p slot="userDate">{{ profile.join_date | moment("MMMM DD, YYYY")}}</p>
        <button slot="removeButton" type="button" class="btn btn-danger">Remove</button>
      </Card>
    </div>
  </div>
</template>

<script>
import Card from './app-components/Card.vue'
import { mapState } from 'vuex'
import axios from 'axios'
import config from '../config.js'

export default {
  name: 'MainList',
  components: {
    Card
  },
  computed: {
    ...mapState({
      profiles: function(state){
        var profiles = state.profiles.profiles;
        return profiles;
      } 
    })
  },
  created() {
    var self = this
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
