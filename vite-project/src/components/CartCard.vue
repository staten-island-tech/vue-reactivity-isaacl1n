<template>
  <div class="cart-card" v-for="item in cart">
    <h3 class="item-name">{{ item.name }}</h3>
    <p class="item-price">${{ item.cost }}</p>
    <div class="quantity">
      <button class="quantity-add" @click="add(item)">+</button>
      <h3 class="quantity-count">{{ item.quantity }}</h3>
      <button class="quantity-subtract" @click="subtract(item)">-</button>
    </div>
  </div>
</template>

<script>
  import { cart } from '../stores/cart.js'

  export default {
    data() {
      return {
        cart: cart,
      };
    },
    methods: {
      add(item) {
        item.quantity++;
      },
      subtract(item, index) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          const index = cart.indexOf(item);
          if (index !== -1) {
            cart.splice(index, 1);
          };
        };
      },
    },
  };
</script>

<style scoped>
  .cart-card {
    margin: 1vw;
    padding-bottom: 3vmin;
    width: 100%;
    background-color: #222222;
  }
  .item-name {
    margin: 5% 0px 2.5% 0px;
    font-size: 4vmin;
  }
  .item-price {
    font-family: "Montserrat", sans-serif;
    font-size: 2vmin;
  }
  .quantity {
    margin-top: 5%;
    display: flex;
    justify-content: center;
  }
  .quantity-count {
    margin: 0% 2% 0% 2%;
    font-family: "Roboto Mono", monospace;
  }
  .quantity-add {
    padding: 0px 10px 0px 10px;
    background-color: green;
    color: white;
    font-family: "Roboto Mono", monospace;
    border-radius: 20px;
    border-style: hidden;
    cursor: pointer;
  }
  .quantity-subtract {
    padding: 0px 10px 0px 10px;
    background-color: red;
    color: white;
    font-family: "Roboto Mono", monospace;
    border-radius: 20px;
    border-style: hidden;
    cursor: pointer;
  }
</style>