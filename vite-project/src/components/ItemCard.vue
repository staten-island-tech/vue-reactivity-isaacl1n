<template>
  <div class="item-card" v-for="item in forSale" :key="item.name">
    <img :src="item.img" :alt="item.name" class="item-img">
    <h2 class="item-name">{{ item.name }}</h2>
    <p class="item-price">${{ item.unitCost }}</p>
    <button @click="addToCart(item)" class="add-button">🛒 Add to Cart</button>
  </div>
</template>

<script>
  import { forSale } from '../stores/catalog.js';
  import { cart } from '../stores/cart.js'

  export default {
    data() {
      return {
        forSale: forSale,
      };
    },
    methods: {
      addToCart(item) {
        let duplicate = false;
        for(let i = 0; i < cart.length; i++) {
          if (cart[i].name === item.name) {
            duplicate = true;
            cart[i].quantity++;
            cart[i].itemTotal = cart[i].unitCost * cart[i].quantity;
          };
        };
        if (!duplicate) {
          cart.push({
            name: item.name,
            unitCost: item.unitCost,
            quantity: 1,
            itemTotal: item.unitCost,
          });
        };
        console.log(cart);
      },
    },
  };
</script>

<style scoped>
  .item-card {
    margin: 2vw;
    background-color: #222222;
    flex: 0 0 50%;
    max-width: 40vh;
    text-align: center;
  }
  .item-img {
    margin-top: 10%;
    max-width: 75%;
  }
  .item-name {
    margin: 2.5%;
  }
  .item-price {
    margin-top: 2.5%;
    font-family: "Montserrat", sans-serif;
  }
  .add-button {
    margin: 10%;
    padding: 10px;
    border-style: hidden;
    font-family: "Montserrat", sans-serif;
    font-size: 100%;
    transition: transform .5s;
    cursor: pointer;
  }
  .add-button:hover {
    transform: scale(1.25);
  }
</style>