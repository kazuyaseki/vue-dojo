<template>
  <div class="hello">
    <h1 v-colorDirective="{ color: 'white', background: '#25aeac'}">{{ message }}</h1>
    <button @click="parentClicked">Hello</button>
    <router-link to="hello-ts">HelloTS</router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import colorDirective from "../color-directive";

@Component({
  directives: {
    colorDirective
  }
})
export default class Hello extends Vue {
  message: string = "Hey";
  @Prop({ type: String, default: "World" })
  msg: string;

  //computed props are gette
  get fullMessage() {
    return `${this.message} ${this.msg}`;
  }

  created() {
    console.log("created");
  }
}
</script>
