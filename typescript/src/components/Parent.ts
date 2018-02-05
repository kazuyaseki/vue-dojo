import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Parent extends Vue{
  message: string = "I'm your father";
  
  parentClicked() {
    console.log("parent clicked");
  }

  beforeRouteEnter(to, from, next) {
    console.log("Enter");
    next();
  }
}

