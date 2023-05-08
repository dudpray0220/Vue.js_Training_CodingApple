import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state() {
    return {
      name: "byh",
      age: 20,
      likes: [20, 35, 40],
      likeClicked: [false, false, false],
      more: {},
    };
  },
  mutations: {
    changeName(state) {
      state.name = "Bae YoungHyun";
    },
    plusAge(state, index) {
      state.age += index;
    },
    plusMinusLikes(state, index) {
      if (!state.likeClicked[index]) {
        state.likes[index]++;
        state.likeClicked[index] = true;
      } else {
        state.likes[index]--;
        state.likeClicked[index] = false;
      }
    },
    setMore(state, data) {
      state.more = data;
    },
  },
  actions: {
    getData(context) {
      axios.get(`https://codingapple1.github.io/vue/more1.json`).then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
