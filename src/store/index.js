import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    rows: 0
  },
  mutations: {
    SET_ITEMS(state, items) {
      state.items = items;
    },
    SET_ROWS(state, rows) {
      state.rows = rows;
    },
    SET_DISPLAY_ITEMS(state, displayItems) {
      state.displayItems = displayItems;
    }
  },
  actions: {
    // https://youtu.be/G2krb6FaZco?t=350
    async fetchData(){
      return new Promise(resolve => {
        setTimeout(async () => {
        const res = await fetch("items.json");
        const val = await res.json();
        //sconsole.log(val);
        resolve(val);
        }, 1000);
      });
    },
    async fetchItems({dispatch, commit}){
      const myJson = await dispatch("fetchData");
      commit("SET_ITEMS", myJson);
      commit("SET_ROWS", myJson.length);
    }
  },
  getters: {
    getItems(state) {
      return state.items;
    },
    getRows(state) {
      return state.rows;
    },
    getDisplayItems(state) {
      return state.displayItems;
    }
  },
  modules: {}
});
