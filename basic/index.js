import Vue from "vue";

var card = new Vue({
  el: "#card",
  data: {
    title: "Dinosaurs",
    items: [
      { text: "Velociraptor" },
      { text: "トリケラトプス" },
      { text: "プテラノドン" }
    ]
  },
  methods: {
    addItem: function() {
      var input = document.getElementById("itemForm");

      if (input.value !== "") {
        this.items.push({
          text: input.value
        });
        input.value = "";
      }
    },
    deleteItem: function(index) {
      this.items.splice(index, 1);
    }
  }
});
