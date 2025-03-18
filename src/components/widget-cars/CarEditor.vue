<script>
export default {
  props: ['car'],

  emits: ['car-edited'],

  data() {
    return {
      //
    }
  },
}
</script>

<template>
  <li @click="$emit('car-edited', { brand: car.brand, price: 777 })">
    {{ car }}
  </li>
</template>
