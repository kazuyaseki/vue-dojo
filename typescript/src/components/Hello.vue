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
import { Component, Prop, Watch } from "vue-property-decorator";
import colorDirective from "../color-directive";
import MyCheckbox from "./MyCheckbox.vue";

@Component({
  directives: {
    colorDirective
  },
  components: {
    MyCheckbox
  }
})
export default class Hello extends Vue {
  message: string = "Hey";
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

  //computed props are gette
  get fullMessage() {
    return `${this.message} ${this.msg}`;
  }

  sumUp() {
    this.count.acum++;
  }
}
</script>
