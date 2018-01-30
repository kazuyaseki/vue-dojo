//import "tailwindcss/dist/tailwind.css";
import Vue from "vue";
import App from "./App.vue";

new Vue({
  el: "#root",
  render: h => (
    <App message="aaa">
      <h2 slot="header">Header</h2>
      <h3 slot="footer">Footer</h3>
    </App>
  )
});
