<template>
  <div class="item-card" v-for="item in forSale">
    <img :src="item.img" :alt="item.name" class="item-img">
    <h2 class="item-name">{{ item.name }}</h2>
    <p class="item-price">${{ item.cost }}</p>
    <button @click="addToCart" class="add-button">🛒 Add to Cart</button>
  </div>
</template>

<script setup>
  import { forSale } from '../stores/catalog.js';

  function addToCart() {
        
  }
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
    cursor: pointer;
  }
</style>