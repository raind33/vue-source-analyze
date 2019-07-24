import Vue from "vue";
import App from "./App";

let childComp = {
  template: "<div>{{msg}}</div>",
  created() {
    console.log("child created");
  },
  mounted() {
    console.log("child mounted");
  },
  data() {
    return {
      msg: "Hello Vue"
    };
  }
};

Vue.mixin({
  created() {
    console.log("parent created");
  }
});
new Vue({
  el: "#app",
  data() {
    return {
      a: 122
    };
  },
  render: h => h(childComp)
});
