<template lang="">
  <!-- cartas -->
        <div class="card h-100">
          <img :src="plato.imagen" class="imgCard card-img-top">
          <div class="card-body">
            <h5 class="card-title fw-bold">{{plato.nombre}}</h5>
            <p class="card-text"> {{plato.descripcion}}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${{plato.precio}}</li>
            <li class="list-group-item">{{plato.cantidad}}</li>
          </ul>
          <div class="card-body">
            <button href="#" class="btnComprar btn">Comprar 💰</button>
          </div>
        </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    plato: Object,
  }
}
</script>
<style scoped>
.subtitle,
h5 {
  font-family: "Handlee", cursive;
}

.imgCard {
  height: 200px;
  object-fit: cover;
}

.btnComprar {
  background-color: rgb(2, 135, 80);
  color: white
}
</style>