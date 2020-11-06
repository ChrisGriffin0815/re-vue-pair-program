<template>
  <div class="PokemonComponent col-3 card">
    <h3>{{pokemon.name}}</h3>
    <img class="img-fluid" :src="pokemon.img" alt="">
    <!-- <button class="btn btn-danger btn-block" @click="delete">Delete</button> -->
  </div>
</template>

<script>
export default {
  name: 'PokemonComponent',
  props: {
    pokemon: Object
  },
  setup() {
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
