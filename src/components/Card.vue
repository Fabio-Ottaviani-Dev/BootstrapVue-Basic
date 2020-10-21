<template>

  <b-col md="3">
    <b-card
      :title="name"
      :img-src="image"
      img-alt="Image aa"
      img-top
      tag="article"
      :footer="price"
      footer-tag="footer"
      style="max-width: 20rem;"
      class="mb-2">
      <b-card-text>{{ description }}</b-card-text>
      <b-button href="#" variant="success">Go somewhere</b-button>
      <template v-slot:footer></template>
    </b-card>
  </b-col>

</template>

<script>
  export default {
    props: ['name', 'image', 'description', 'price']
  }
</script>

<style lang="scss" scoped>

</style>


<!-- https://youtu.be/-DyKeMa5tYY?t=2265 -->
