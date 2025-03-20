<script>
export default {
  emits: ['car-submitted'],
  data() {
    return {
      car: {
        brand: '',
        price: '',
      },
    }
  },
  methods: {
    addCar() {
      console.log(this.car)

      this.$emit('car-submitted', { ...this.car })
      this.car.brand = ''
      this.car.price = ''
    },
  },
}
</script>

<template>
  <div>
    <span>Car brand</span>
    <input type="text" v-model="car.brand" />
  </div>
  <div>
    <span>Car Price</span>
    <input type="number" v-model="car.price" />
  </div>
  <button @click="addCar">Submit</button>
</template>

<!-- сделать чтоб свойства можно было вводить руками -->
