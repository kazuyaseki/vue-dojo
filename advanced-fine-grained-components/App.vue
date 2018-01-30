<template>
  <Settings>
    <Layout slot-scope="{header,footer}">
      <h1 slot="header">{{header}}</h1>
      <div slot="content">Amazing content</div>
      <h2 slot="footer">{{footer}}</h2>
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Layout from "./Layout.vue";
import Settings from "./Settings.vue";

@Component({
  components: {
    Layout,
    Settings
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
