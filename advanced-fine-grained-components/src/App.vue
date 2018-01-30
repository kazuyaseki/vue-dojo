<template>
  <Settings>
    <Layout slot-scope="{header,footer}">
      <AwesomeHeader slot="header" :header="header" />
      <Cats slot="content" :names="names" :limit="limit"></Cats>
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

const Cats = {
  functional: true,
  render: (h, { props }) => (
    <div>
      {props.names
        .map(name => `https://robohash.org/${name}?set=set4`)
        .map(url => <img src={url} alt="" />)
        .slice(0, props.limit)}
    </div>
  )
};

@Component({
  components: {
    AwesomeContent: Content,
    AwesomeHeader: Header,
    AwesomeFooter: Footer,
    Cats,
    Layout,
    Settings
  }
})
export default class App extends Vue {
  names = ["mindy", "john", "kim", "joel", "ben"];
  limit = 3;
}
</script>
