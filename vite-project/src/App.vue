<script setup>
  import { ref } from 'vue'
  import { storeToRefs } from 'pinia';
  const header = ref('header')
  const store = ref('store')
  import {useCatalog} from "@/stores/catalog.js"
    const catalog = useCatalog()
    // console.log(catalog)
    const {items} = storeToRefs(catalog)
    console.log(items)
</script>

<template>
  <div :id="header">
    <img src="https://clipart-library.com/img/1922483.png">
    <div>
      <h1>The Dump</h1>
      <h2>Secondhand Objects Store</h2>
    </div>
  </div>
  <div id="website">
    <!-- <h1 style="color:white" v-for="item in items">{{ item }}</h1> -->
    <div id="cart">
      <h2>Your Cart</h2>
    </div>
    <div id="catalog">
      <h2>Catalog</h2>
    </div>
  </div>
</template>

<style scoped>
  #header {
    padding: 2vw;
    color: white;
    display: flex;
    justify-content: center;
  }
  #header img {
    margin-right: 10px;
    max-height: 75px;
  }
  #website {
    margin: 0;
    display: flex;
    justify-content: center;
  }
  #cart {
    width: 33%;
    height: 100%;
    color: white;
    text-align: center;
    border-right: solid white thin;
  }
  #catalog {
    width: 66%;    
    height: 100%;
    color: white;
    text-align: center;
  }
</style>
