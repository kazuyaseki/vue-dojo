<template>
  <Settings>
    <Layout slot-scope="{header,footer}">
      <AwesomeHeader slot="header" :header="header" />
      <AwesomeContent slot="content" :limit="4">
        <div><img src="https://robohash.org/mindy?set=set4" alt=""></div>
        <div><img src="https://robohash.org/john?set=set4" alt=""></div>
        <div><img src="https://robohash.org/kim?set=set4" alt=""></div>
        <div><img src="https://robohash.org/joel?set=set4" alt=""></div>
        <div><img src="https://robohash.org/maggie?set=set4" alt=""></div>
      </AwesomeContent>
      <AwesomeFooter slot="footer" :footer="footer" />
    </Layout>
  </Settings>
</template>

<script>
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import Layout from "./Layout.vue";
import Settings from "./Settings.vue";
import { Content, Header, Footer } from "./components";

@Component({
  components: {
    AwesomeContent: Content,
    AwesomeHeader: Header,
    AwesomeFooter: Footer,
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
