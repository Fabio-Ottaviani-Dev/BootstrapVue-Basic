<template>
  <b-container>
    <b-row align-v="center">
      <card v-for="item in items"
        :key="item.id"
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :image="item.image">
      </card>
    </b-row>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      @input="paginate(currentPage)"
      align="center">
    </b-pagination>
  </b-container>
</template>

<script>
const API_URL = "http://localhost:5000";

// @ is an alias to /src
import Card from "@/components/Card.vue";
import {mapGetters} from "vuex";

export default {
  name: "Home",
  components: { "card": Card },
  computed: {
    ...mapGetters(["items"])
  },
  mounted(){
    this.query = `?_page=${this.currentPage}&_limit=${this.perPage}`;
    this.fetchData(`${this.url}${this.query}`);
  },
  data() {
    return {
      //items: [],
      currentPage: 1,
      rows: 1,
      perPage: 4,
      url: `${API_URL}/items`,
      query: ""
    };
  },
  methods: {
    async fetchData(url){
      await this.$store.dispatch("fetchItems");
      console.log("TEST: --> ", this.$store.getters.getItems.items);
      console.log(url);
      //const res = await fetch(url);
      //const val = await res.json();
      //this.items = val;
      // TODO: Get it from json tot_rows value.
      this.rows = 10;

    },
    paginate(currentPage){
      this.query = `?_page=${currentPage}&_limit=${this.perPage}`;
      this.fetchData(`${this.url}${this.query}`);
      console.log(`${this.url}${this.query}`);
    }
  }
};
</script>
