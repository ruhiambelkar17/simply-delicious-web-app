<template>
    <div class="container mt-3">
        <div id="carouselExampleIndicators" class="carousel slide ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner rounded shadow">
    <div class="carousel-item active">
      <img src="../assets/images/Smoothie.jpeg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded">
        <h5>Welcome to Simply Delicious!!</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>

    </div>
    <div class="carousel-item">
      <img src="../assets/images/Smoothie.jpeg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded">
        <h5>Recipes</h5>
        <p>Strawberry Smoothie</p>
      </div>

    </div>
    <div class="carousel-item">
      <img src="../assets/images/Smoothie.jpeg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-25 rounded">
        <h5>Recipes</h5>
        <p>Veg Cutlets</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .carousel-item {
        height: 500px;
    }
</style>
