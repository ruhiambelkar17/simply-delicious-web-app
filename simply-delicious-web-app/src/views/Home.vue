<script>
import NavBar from "../components/NavBar.vue";
import Carousel from "../components/Carousel.vue";

export default {
  components: {
    NavBar,
    Carousel
  },
  data(){
    return {
        isSignInClicked:false
    }
  }
};
</script>

<template>
  <div>
    <NavBar />
   <Carousel></Carousel>
    <div class="container my-3 ">
        <div class="d-flex justify-content-center"> 
            <h3 class="text-center ">Recipes</h3>
        </div>
        <br />
        <div> 
            <img src="../assets/images/Smoothie.jpeg" class="img-fluid recipe-img rounded shadow"  >
        </div>
        <div class="row"> 
            <div class="col-md-12"> </div>
        </div>
       
    </div>
  </div>
</template>

<style scoped>
.recipe-img {
    width: 100%;
    height: 300px;
}
</style>
