<script>
const makeId = () => ((Math.random() * 0xffffffff) >>> 0).toString(16)

const initCar = () => ({
  id: makeId(),
  brand: '',
  price: 0,
})

export default {
  emits: ['car-submitted'],

  data() {
    return {
      car: initCar(),
    }
  },

  methods: {
    addCar() {
      if (this.car.brand === '' || this.car.price === 0) return
      this.$emit('car-submitted', this.car)
      this.car = initCar()
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
    <input type="number" v-model.number="car.price" />
  </div>

  <button @click="addCar">Submit</button>
</template>

<!-- сделать чтоб свойства можно было вводить руками -->
