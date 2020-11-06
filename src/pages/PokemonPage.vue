<template>
  <div class="PokemonPage">
    <h3>Hello from pokemon land</h3>
    <div class="row">
      <PokemonComponent v-for="p in pokemon" :key="p._id" :pokemon="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import PokemonComponent from '../components/PokemonComponent'
import { AppState } from '../AppState'
import { pokemonService } from '../services/PokemonService'
export default {
  name: 'PokemonPage',
  components: { PokemonComponent },
  setup() {
    onMounted(() => {
      pokemonService.getAll()
    })
    return {
      pokemon: computed(() => AppState.pokemon)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
