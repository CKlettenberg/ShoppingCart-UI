<template>
  <div class="container mt-4">
    <h1 class="text-center mb-4">Shopping Cart</h1>

    <!-- Add Product Form -->
    <AddProductForm @add-product="addProduct"/>

    <!-- Cart Table -->
    <CartTable :items="cartItems" @remove-product="removeProduct"/>

    <!-- Cart Summary -->
    <CartSummary :total="cartTotal"/>

  </div>
</template>

<script>
import AddProductForm from "@/components/cart/AddProductFrom.vue";
import CartTable from "@/components/cart/CartTable.vue";
import CartSummary from "@/components/cart/CartSummary.vue";
import { fetchItems, addItem, removeItem, fetchTotal } from "@/api/cart.js";

export default {
  components: { AddProductForm, CartTable, CartSummary },
  data: () => ({
    cartItems: [],
    cartTotal: 0,
  }),
  methods: {
    fetchCart() {
      Promise.all([fetchItems(), fetchTotal()])
          .then(([items, total]) => {
            this.cartItems = items.data;
            this.cartTotal = total.data;
          });
    },
    addProduct(product) {
      addItem(product).then(this.fetchCart);
    },
    removeProduct(name) {
      removeItem(name).then(this.fetchCart);
    },
  },
  mounted() {
    this.fetchCart();
  },
};
</script>