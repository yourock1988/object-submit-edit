<script>
import CarEditor from './CarEditor.vue'
import CarSubmitter from './CarSubmitter.vue'

export default {
  components: { CarEditor, CarSubmitter },

  data() {
    return {
      cars: [],
    }
  },
}
</script>

<template>
  <div>
    <h1 @click="cars[0].price = 77777">Cars</h1>

    <CarSubmitter @car-submitted="cars.push($event)" />

    <ul>
      <CarEditor
        v-for="(car, idx) of cars"
        :key="idx"
        :car="car"
        @car-edited="cars[idx] = $event"
      />
    </ul>
  </div>

  <div>
    {{ cars }}
  </div>
</template>
