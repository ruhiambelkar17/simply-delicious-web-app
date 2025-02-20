<script>
import NavBar from "../components/NavBar.vue";
import Carousel from "../components/Carousel.vue";
import Chart from "../components/Chart.vue";



export default {
  components: {
    NavBar,
    Carousel,
    Chart
  },
  data(){
    return {
        isSignInClicked:false,
        num:null
    }
  },
  created(){
    
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
        <div class="row mt-4"> 
            <div class="col-md-4"> 
                <img src="../assets/images/Smoothie.jpeg" class="img-fluid recipe-sub-img rounded shadow"  >
        
            </div>
            <div class="col-md-4"> 
                <img src="../assets/images/Smoothie.jpeg" class="img-fluid recipe-sub-img rounded shadow"  >
        
            </div>
            <div class="col-md-4 "> 
                <img src="../assets/images/Smoothie.jpeg" class="img-fluid recipe-sub-img rounded shadow"  >
        
            </div>
        </div>
       
    </div>
   
  </div>
</template>

<style scoped>

.recipe-img {
    width: 100%;
    height: 300px;
}

.recipe-sub-img {
    width: 100%;
    height: 300px;
}

</style>
