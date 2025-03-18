<script>
export default {
  emits: ['car-submitted'],
}
</script>

<template>
  <button @click="$emit('car-submitted', { brand: 'BMW', price: 33000 })">
    Submit
  </button>
</template>

<!-- сделать чтоб свойства можно было вводить руками -->
