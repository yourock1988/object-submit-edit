<script>
export default {
  props: ['car'],

  emits: ['car-edited'],

  data() {
    return {
      localCar: { ...this.car },
    }
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

<!-- @click="$emit('car-edited', { brand: car.brand, price: 777 })" -->
