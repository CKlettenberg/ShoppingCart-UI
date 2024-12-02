<template>
  <h3 class="mt-4" style="color: black">
    Total without tax: ${{ total.toFixed(2) }}
  </h3>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      required: true,
    },
  },
};
</script>
