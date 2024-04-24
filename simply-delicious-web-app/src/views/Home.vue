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
    <div class="my-3 d-flex justify-content-center">
        <h3 class="text-center ">Recipes</h3>
        <br />
        <hr style=" width: 200px;" class="" /> 
    </div>
  </div>
</template>
