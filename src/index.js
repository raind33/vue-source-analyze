import Vue from "vue";
import App from "./App";

new Vue({
  el: "#app",
  data() {
    return {
      a: 122
    };
  },
  render(h) {
    return h(
      "div",
      {
        attrs: {
          class: "#app1"
        }
      },
      this.a
    );
  },
  mounted() {
    console.log(this.a); // 122
    console.log(this._data.a); // 122
  }
});
