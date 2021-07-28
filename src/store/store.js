import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [
      {
        name: "aviel",
        age: 28,
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
      },
      {
        name: "dorya",
        age: 29,
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
      },
      {
        name: "dorya",
        age: 29,
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
      },
      {
        name: "dorya",
        age: 29,
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
      },
      {
        name: "dorya",
        age: 29,
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
      },
      {
        name: "dorya",
        age: 29,
        img: "https://cdn.vuetifyjs.com/images/john.jpg",
      },
    ],
  },
});
