<template>
  <div class="hello">
    <h1 v-colorDirective="{ color: 'white', background: '#25aeac'}">{{ fullMessage }}</h1>
    <router-link to="hello-ts">HelloTS</router-link>
    <MyCheckbox :title="checkbox.title" :value="checkbox.value" v-model="checkbox.checked"/>
    <button @click="sumUp">Hit me</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createDecorator } from "vue-class-component";
import { Component, Inject, Prop, Watch } from "vue-property-decorator";

import colorDirective from "../color-directive";
import MyCheckbox from "./MyCheckbox.vue";

const Log = (str?: string) => {
  return createDecorator((component, key) => {
    console.log("Component: ", component);
    console.log("Decorated key: ", key);
  });
};
const NoCache = createDecorator((component: any, key) => {
  if (component.computed && component.computed[key]) {
    component.computed[key].cache = false;
  } else {
    throw Error("Not a computed property");
  }
});

@Component({
  directives: {
    colorDirective
  },
  components: {
    MyCheckbox
  }
})
export default class Hello extends Vue {
  @Log() message: string = "Hey";
  checkbox = {
    title: "Fancy checkbox",
    value: "checkbox-id",
    checked: true
  };
  count = {
    acum: 0
  };

  //deep:true を指定することによってオブジェクト内の値の変更も検知できるようになる
  @Watch("count", { deep: true })
  watchCount(newVal, oldVal) {
    console.log(newVal, oldVal);
  }

  @Prop({ type: String, default: "World" })
  msg: string;

  @Inject() http;

  get fullMessage() {
    return `${this.message} ${this.msg}`;
  }

  sumUp() {
    this.count.acum++;
  }

  created() {
    /*this.http.get("https://jsonplaceholder.typicode.com/users").then(data => {
      this.message = JSON.stringify(data.data);
    });*/
  }
}
</script>
