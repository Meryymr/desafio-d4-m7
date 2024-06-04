<template>
  <div class="products text-center container">
    <h1 class="text-center fw-bold my-3">Productos</h1>
    <h3 class="subtitle my-3"> Conoce nuestra variedad de productos</h3>
    <div class="row g-4">
      <div v-for="(plato, index) in platos" :key="index"
        class="col-12 col-md-6 col-lg-3">
        <Card :plato="plato" />
      </div>
    </div>
    <router-link class="btn my-5" to="/">Volver al
      Inicio</router-link>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "ProductView",
  props: ["platos"],
  components: {
    Card
  },
  created() {
    console.log(this.platos)
  }

}
</script>

<style scoped>
.btn {
  background-color: rgb(185, 0, 86);
  color: white;
}

h1 {
  color: black;
}

.subtitle {
  font-family: "Handlee", cursive;
}
</style>
