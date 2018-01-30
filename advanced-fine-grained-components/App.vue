<template>
  <Layout>
  </Layout>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Layout from "./Layout.vue";

@Component({
  components: {
    Layout
  }
})
export default class App extends Vue {
  @Prop({ default: "this is default msg" })
  message;

  onClick() {
    this.message = "Goodbye";
  }
}
</script>
