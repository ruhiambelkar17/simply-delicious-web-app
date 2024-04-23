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
   <Carousel />

  </div>
</template>
