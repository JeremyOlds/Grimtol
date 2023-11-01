<template>
  <div class="container-fluid background-image">
    <div class="row justify-content-center">
      <div class="col-4 text-center">
        <h1 class="textbox-font">Grimtol</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8 textbox-font">
        <p>{{ script }}</p>
        <p>What do you do?</p>
        <div>
          <form @submit.prevent="runCommand()">
            <input class="w-100" v-model="editable.input" type="text">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { AppState } from "../AppState.js"
import Pop from "../utils/Pop.js";
import { zoneService } from "../services/ZoneService.js"
import { logger } from "../utils/Logger.js";

export default {


  setup() {
    const editable = ref({});
    let script = ref('You are At Main Street');

    return {
      editable,
      script,
      activeZone: computed(() => AppState.activeZone),

      runCommand() {
        try {
          logger.log('this is a test')
          const userInput = editable.value
          // debugger;
          const result = zoneService.runCommand(userInput);
          logger.log('top level result: ', result)
          script.value = result.description || result
          editable.value = {}
        } catch (error) {
          Pop.error(error.message)
        }

      }


    }
  }
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Cabin:wght@400;600&family=Metal+Mania&display=swap');

.input {
  background-color: transparent;
  color: rgb(38, 207, 0);
  font-family: Metal-Mania;
}

.textbox-font {
  color: rgb(38, 207, 0);
  font-family: Metal-Mania;

}

.background-image {
  background-image: url(../assets/img/grimtolTownWideLowContrast.png);
  height: 100vh;


}
</style>
