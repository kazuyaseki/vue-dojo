<template>
  <Settings>
    <Layout slot-scope="{header,footer}">
      <Header slot="header" :header="header"></Header>
      <div slot="content" class="flex-grow p-4">Amazing Content</div>
      <Footer slot="footer" :footer="footer"></Footer>
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Layout from "./Layout.vue";
import Settings from "./Settings.vue";
import { Header, Footer } from "./components";

@Component({
  components: {
    Header,
    Footer,
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
