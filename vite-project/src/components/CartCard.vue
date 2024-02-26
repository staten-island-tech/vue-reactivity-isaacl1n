<template>
  <div class="cart-card">
    <h3 class="item-name"></h3>
    <p class="item-price"></p>
    <div class="quantity">
      <button class="quantity-add"></button>
      <h3 class="quantity-count"></h3>
      <button class="quantity-subtract"></button>
    </div>
  </div>
</template>

<script setup>

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