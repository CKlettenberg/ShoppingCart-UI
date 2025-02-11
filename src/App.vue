<template>
  <div id="app">
    <div v-if="!isLoggedIn">
      <LoginForm @login-success="handleLoginSuccess" />
    </div>
    <div v-else>
      <ShoppingCart />
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/cart/LoginFrom.vue";
import ShoppingCart from "@/pages/ShoppingCart.vue";

export default {
  components: {
    LoginForm,
    ShoppingCart
  },
  data() {
    return {
      isLoggedIn: false 
    };
  },
  methods: {
    handleLoginSuccess() {
      this.isLoggedIn = true;

      this.$router.push('/');
    }
  }
};
</script>
