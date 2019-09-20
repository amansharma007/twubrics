<template>
  <div class="col-4 custom-card">
    <div class="extra-padded-area">
      <div id="userMain" class="row">
        <div class="col-8">
          <slot name="userImage"></slot> <br>
          <slot name="userFullName"></slot><br>
          <slot name="userName"></slot>
        </div>
        <div class="col-4">
          Score <br>
          <slot name="userScore"></slot>
        </div>
      </div>
      <div id="userScores" class="row">
        <div class="col-4">
          Friends <br>
          <slot name="userFriends"></slot>
        </div>
        <div class="col-4">
          Influence <br>
          <slot name="userInfluence"></slot>
        </div>
        <div class="col-4">
          Chirpiness <br>
          <slot name="userChirpiness"></slot>
        </div>
      </div>
      <div id="userFooter" class="row">
        <div class="col-8">
          <slot name="userDate"></slot>
        </div>
        <div class="col-4">
          <slot name="removeButton"></slot>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style scoped>

</style>
