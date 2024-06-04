<template>
  <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0" class="active" aria-current="true"
        aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="../assets/img/brunch.jpg"
          class="image1 d-block w-100 object-fit-cover " alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/brunch2.jpg"
          class="image2 d-block w-100 object-fit-cover " alt="...">
      </div>
      <div class="carousel-item">
        <img src="../assets/img/brunch3.jpg"
          class="image3 d-block w-100 object-fit-cover   " alt="...">
      </div>
    </div>
    <button class="carousel-control-prev" type="button"
      data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button"
      data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <!-- <Card /> -->
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
}

</script>

<style scoped>
.image1,
.image2,
.image3 {
  height: 85vh;
}
</style>