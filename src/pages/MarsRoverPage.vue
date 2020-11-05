<template>
  <div class="roverPage">
    <h1>hello from mars rover page</h1>
    <div class="row">
      <RoverComponent v-for="r in roverData" :key="r.id" :rover="r" />
    </div>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { marsService } from '../services/MarsService'
import { AppState } from '../AppState'
import RoverComponent from '../components/RoverComponent'

export default {
  name: 'RoverPage',
  components: { RoverComponent },
  setup() {
    onMounted(() => { marsService.getAll() })
    return {
      roverData: computed(() => AppState.marsData)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
