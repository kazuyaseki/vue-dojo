<template>
  <div>
    <slot name="header"></slot>
    <h1 @click="onClick">
      {{message}}
    </h1>
    <slot name="footer"></slot>
  </div>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  @Prop({ default: "this is default msg" })
  message;

  onClick() {
    this.message = "Goodbye";
  }
}
</script>
