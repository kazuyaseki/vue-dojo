<template>
  <div class="hello">
    <h1>{{ fullMessage }}</h1>
    <router-link to="/">Hello</router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class HelloTS extends Vue {
  //computed props are gette
  get fullMessage() {
    return `Whatsup`;
  }

  created() {
    console.log("created");
  }
}
</script>
