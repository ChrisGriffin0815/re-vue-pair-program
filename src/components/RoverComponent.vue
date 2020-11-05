<template>
  <div class="RoverComponent col-3 card shadow-lg rounded m-1">
    <h3>{{ robot.camera.full_name }}{{ robot.earth_date }}</h3>
    <img class="img-fluid" :src="robot.img_src" alt="">
  </div>
</template>

<script>
import { computed } from 'vue'
// import { AppState } from '../AppState'
export default {
  name: 'RoverComponent',
  components: {},
  props: { rover: Object },
  setup(props) {
    return {
      // rovers: computed(() => AppState.marsData)
      robot: computed(() => props.rover)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
