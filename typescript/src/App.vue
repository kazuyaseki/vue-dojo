<template>
  <div id="app">
    <img src="./assets/logo.png">
    <Hello msg="Vue"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Provide } from "vue-property-decorator";
import axios from "axios";

import Hello from "./components/Hello.vue";

@Component({
  components: {
    Hello
  }
})
export default class App extends Vue {
  @Provide() http = axios;
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
