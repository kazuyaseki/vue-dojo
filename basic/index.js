import Vue from "vue";
import _ from "lodash";

var card = new Vue({
  el: "#card",
  data: {
    title: "Dinosaurs",
    input: "",
    buttonText: "Add Dinosaur",
    speciesUpdated: 0,
    dinosUpdated: 0,
    items: [
      { text: "Tyrannosaurus", quantity: 5 },
      { text: "Triceratops", quantity: 3 },
      { text: "Stegosaurus", quantity: 6 }
    ]
  },
  computed: {
    buttonDisabled: function() {
      return this.input == "";
    },
    totalDinos: function() {
      this.dinosUpdated += 1;
      var sum = 0;
      var items = this.items;

      for (var i in items) {
        sum += items[i].quantity;
      }

      return sum;
    },
    totalSpecies: function() {
      this.speciesUpdated += 1;
      return this.items.length;
    }
  },
  watch: {
    input: _.debounce(function() {
      this.buttonText =
        this.input !== "" ? "Add " + this.input : "Add Dinosaur";
    }, 250)
  },
  methods: {
    addItem: function(e) {
      e.preventDefault();
      if (!this.input) return;

      this.items.push({ text: this.input, quantity: 1 });
      this.input = "";
    },
    removeItem: function(item) {
      this.items.splice(item, 1);
    }
  }
});
