<template>
  <form @submit.prevent="onAddProduct" class="row mb-4">
    <input
        v-model="newProduct.name"
        placeholder="Product"
        class="form-control col"
        required
    />
    <input
        v-model.number="newProduct.price"
        type="number"
        placeholder="Price"
        class="form-control col"
        required
    />
    <input
        v-model.number="newProduct.quantity"
        type="number"
        placeholder="Qty"
        class="form-control col"
        required
    />
    <button class="btn btn-primary col">Add</button>
  </form>
</template>

<script>
export default {
  props: {
    onAddProduct: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      newProduct: { name: "", price: 0, quantity: 1 },
    };
  },
  methods: {
    handleSubmit() {
      this.onAddProduct(this.newProduct);
      this.newProduct = { name: "", price: 0, quantity: 1 };
    },
  },
};
</script>
