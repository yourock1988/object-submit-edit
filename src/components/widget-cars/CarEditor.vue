<script>
export default {
  props: ['car'],

  emits: ['car-edited'],

  data() {
    return {
      localCar: { ...this.car },
    }
  },
  watch: {
    car: {
      deep: true,
      handler(newCar) {
        this.localCar = { ...newCar }
      },
    },
  },
}
</script>

<template>
  <li>
    <input type="text" v-model="localCar.brand" />
    <input type="number" v-model.number="localCar.price" />
    <button @click="$emit('car-edited', { ...localCar })">EDIT</button>
  </li>
</template>
