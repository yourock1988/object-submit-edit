<script>
import WidgetCars from './components/widget-cars/WidgetCars.vue'

export default {
  components: { WidgetCars },

  data() {
    return {
      bike: {
        brand: 'Jawa',
      },
      numbers: [42, 101, 333],
    }
  },

  watch: {
    // numbers: {
    //   deep: true,
    //   handler(newValue) {
    //     console.log('newValue', newValue)
    //   },
    // },
    // bike(newValue) {
    //   console.log('newValue', newValue)
    // },
    // bike: {
    //   deep: true,
    //   handler(newValue) {
    //     console.log('newValue', newValue)
    //   },
    // },
  },
}
</script>

<template>
  <!-- <h1>{{ numbers }}</h1> -->
  <WidgetCars />
</template>
