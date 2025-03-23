<script>
import CarSubmitter from './CarSubmitter.vue'
import CarList from './CarList.vue'

export default {
  components: { CarSubmitter, CarList },

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

    <CarList :cars="cars" @update-cars="cars = $event" />
  </div>

  <div>
    {{ cars }}
  </div>
</template>
