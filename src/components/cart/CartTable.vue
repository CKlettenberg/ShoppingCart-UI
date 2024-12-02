<template>
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
    <tr v-for="item in items" :key="item.name">
      <td>{{ item.name }}</td>
      <td>${{ item.price }}</td>
      <td>{{ item.quantity }}</td>
      <td>
        <button
            @click="onRemoveProduct(item.name)"
            class="btn btn-warning btn-sm"
            style="color: maroon"
        >
          Remove
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    onRemoveProduct: {
      type: Function,
      required: true,
    },
  },
};
</script>
