<script>
import CarEditor from './CarEditor.vue'

export default {
  components: { CarEditor },

  props: ['cars'],
}
</script>

<template>
  <ul>
    <CarEditor
      v-for="(car, idx) of cars"
      :key="idx"
      :car="car"
      @car-edited="cars[idx] = $event"
    />
  </ul>
</template>

<!-- 
переписать компонент так, чтоб вместо @car-edited="cars[idx] = $event" пропс
cars не мутировал
 -->
