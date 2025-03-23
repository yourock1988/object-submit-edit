<script>
import CarEditor from './CarEditor.vue'

export default {
  components: { CarEditor },

  props: ['cars'],

  emits: ['update-cars'],

  data() {
    return {
      // localCars: { ...this.cars },
    }
  },
  methods: {
    updateCar(idx, updatedCar) {
      const updatedCars = [...this.cars]
      updatedCars[idx] = updatedCar
      this.$emit('update-cars', updatedCars)
      console.log('this.cars', this.cars)
      console.log('updatedCars', updatedCars)
    },
  },
  watch: {
    cars: {
      deep: true,
      handler(newCars) {
        // console.log('cars', newCars)
        // console.log('localCars', this.localCars)
      },
    },
  },
}
</script>

<template>
  <ul>
    <CarEditor
      v-for="(car, idx) of cars"
      :key="idx"
      :car="car"
      @car-edited="updateCar(idx, $event)"
    />
  </ul>
</template>

<!--
переписать компонент так, чтоб вместо @car-edited="cars[idx] = $event" пропс
cars не мутировал
 -->
