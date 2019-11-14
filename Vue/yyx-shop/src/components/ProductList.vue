<template>
  <div>
    <li v-for="product in products" :key="product.key">
      {{product.title}}-{{product.price}}
      <button @click="addProductToCart(product)">add cart</button>
    </li>
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState({
    products: state => state.products.all
  }),
  created() {
    this.$store.dispatch('products/getAllProducts')
  },
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
}
</script>

<style scoped>

</style>
