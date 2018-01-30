<template>
  <h1 @click="onClick">
    {{message}}
  </h1>
</template>

<script>
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component({})
export default class App extends Vue {
  message = "Hello from class"

  onClick() {
    this.message = "Goodbye"
  }
}
</script>