<template>

  <div class="container mt-3 align-left w-50" style="background: lightcyan">
    <h1 class="text-center mb-6" style="color: darkslategray">Shopping Cart</h1>

    <form @submit.prevent="addProduct" class="row mb-4">
      <input v-model.number="newProduct.name" placeholder="Product" class="from-control col" required/>
      <input v-model.number="newProduct.price" type="number" placeholder="Price" class="from-control col" required/>
      <input v-model.number="newProduct.quantity" type="number" placeholder="Qty" class="form-control col" required/>
      <button class="btn btn-primary col">Add</button>
    </form>

    <table class="table">
      <thead style="color: blue">
      <tr style="background-color: lightblue">
        <th style="color: chocolate">Product</th>
        <th style="color: chocolate">Price</th>
        <th style="color: chocolate">Quantity</th>
        <th style="color: chocolate">Action</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in cartItems" :key="item">
        <td>{{ item.name }}</td>
        <td>${{ item.price }}</td>
        <td>{{ item.quantity }}</td>
        <td>
          <button @click="removeProduct(item.name)" class="btn btn-warning btn-sm" style="color: maroon">Remove</button>
        </td>
      </tr>
      </tbody>
    </table>

    <h3 class="mt-4" style="color: black">Total without tax: ${{ cartTotal.toFixed(2) }}</h3>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    api: "http://localhost:8089/api/cart",
    newProduct: {name: "", quantity: 1, price: 0.00},
    cartItems: [],
    cartTotal: 0
  }),
  methods: {
    fetchCart() {
      axios.all([
        axios.get(`${this.api}/items`).then(res => (this.cartItems = res.data)),
        axios.get(`${this.api}/total`).then(res => (this.cartTotal = res.data)),
      ]);
    },
    addProduct() {
      axios.post(`${this.api}/add`, this.newProduct).then(this.fetchCart);
      this.newProduct = {name: "", quantity: 1, price: 0.00};
    },
    removeProduct(name) {
      axios.delete(`${this.api}/remove/${name}`).then(this.fetchCart);
    },
  },
  mounted() {
    this.fetchCart();
  },
};
</script>