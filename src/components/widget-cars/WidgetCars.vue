<script>
import CarEditor from './CarEditor.vue'
import CarSubmitter from './CarSubmitter.vue'

export default {
  components: { CarEditor, CarSubmitter },

  data() {
    return {
      cars: [
        {
          brand: 'Audi',
          price: 42000,
        },
      ],
    }
  },
}
</script>

<template>
  <div>
    <h1>Cars</h1>

    <div>
      {{ cars }}
    </div>

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
</template>
