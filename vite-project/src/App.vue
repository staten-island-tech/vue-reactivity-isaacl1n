<script setup>
  import { computed, ref } from 'vue'
  import ItemCard from './components/ItemCard.vue'
  import CartCard from './components/CartCard.vue'
  import { cart } from './stores/cart.js'

  const header = ref('header')
  const finalCost = computed(() => {
    return cart.reduce((total, item) => 
      total + item.itemTotal, 0
    );
  });
</script>

<template>
  <div :id="header">
    <img src="https://clipart-library.com/img/1922483.png">
    <div>
      <h1>The Dump</h1>
      <h2>"Everything You Need"</h2>
    </div>
  </div>
  <div id="website">
    <div id="cart">
      <h2 class="subtitle">Your Cart</h2>
      <h3 id="total-cost">Total Cost: ${{finalCost}}</h3>
      <div id="cart-content">
        <CartCard/>
      </div>
    </div>
    <div id="catalog">
      <h2 class="subtitle">Catalog</h2>
      <div id="catalog-content">
        <ItemCard/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #header {
    margin: 1vw 0px 2vw 0px;
    padding: 2vw;
    color: white;
    display: flex;
    justify-content: center;
  }
  #header h2 {
    font-family: "Montserrat", sans-serif;
    font-size: larger;
  }
  #header img {
    margin-right: 10px;
    max-height: 75px;
  }
  #website {
    display: flex;
    justify-content: center;
  }
  .subtitle {
    font-size: xx-large;
  }
  #cart {
    width: 33%;
    height: 100%;
    color: white;
    text-align: center;
    font-size: x-large;
  }
  #catalog {
    width: 66%;    
    height: 100%;
    border-left: solid white thin;
    color: white;
    text-align: center;
  }
  #catalog-content {
    margin: 2vw 0px 2vw 0px;
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
  }
  #cart-content {
    margin-top: 2vw;
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
  }
  #total-cost {
    margin-top: 3vw;
    font-family: "Montserrat", sans-serif;
  }

  /* CSS beyond this point is for testing */


</style>
