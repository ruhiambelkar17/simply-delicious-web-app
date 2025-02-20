<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data(){
    return{
      cardsArr:[
        {cardTitle:"Veg Recipes",cardText:"Exciting amd tasty recipes.",btnText:"Take a look",img:"@/assets/images/Smoothie.jpeg"},
        {cardTitle:"Non-Veg Recipes",cardText:"Exciting and mouthwatering recipes.",btnText:"Take a look",img:"@/assets/images/Smoothie.jpeg"},
        {cardTitle:"Veg Recipes",cardText:"Exciting and Delicious desserts.",btnText:"Take a look",img:"@/assets/images/Smoothie.jpeg"}
      ]
    }
  }
};
</script>

<template>
  <div class="">
    <NavBar />
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-12" >
          <div class="row " >
            <div class="col-md-4 " v-for="(item,index) in cardsArr" :key="index">
              <div class="card" style="height:300px">
                <img :src="item.img" class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">{{ item.cardTitle }}</h5>
                  <p class="card-text">
                    {{ item.cardText }} 
                    <img :src="item.img" />
                  </p>
                  <a href="#" class="btn btn-primary">{{ item.btnText }}</a>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
