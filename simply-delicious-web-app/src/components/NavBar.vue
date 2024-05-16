<template>
  <div class="">
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow">
      <div class="container">
        <a class="navbar-brand" href="#">Simply Delicious</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/Recipes"> Recipes</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link"> Video Recipes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"> Cusine</a>
            </li>
          </ul>
        </div>
        <div class="d-inline-flex">
          <span class="pe-3">{{ user?.name }}</span>
          <span v-if="user===null">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>
          </span>
          <span v-else >
            <img class="img-fluid rounded-circle" width="30px" height="30px" :src="user?.picture" />
          </span>
          
          <div   class="dropdown">
            <span
              class="ps-2 dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              
            >
              
              <ul  class="dropdown-menu dropdown-menu-light">
                <li><a class="dropdown-item " href="#" @click="signInBy"> Sign In with Google Account</a>
                    <div  v-if="isSignInClicked">
      <GoogleLogin :callback="callback" prompt auto-login></GoogleLogin>
    </div></li>
                <li><a class="dropdown-item " href="#"> Switch Account</a></li>
                <li><a class="dropdown-item" @click="logOut" href="#">Sign Out</a></li>
                
              </ul>
            </span>
          </div> 
          <!-- <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul class="dropdown-menu dropdown-menu-dark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div> -->
        </div>
      </div>
    </nav>

    <!-- <div v-if="loggedIn">
      <button @click="logout">Logout</button>
      <p>The user currently logged in is: {{ user.name }}</p>
    </div> -->
    
  </div>
</template>

<script>
import { decodeCredential, googleLogout } from "vue3-google-login";
export default {
  data() {
    return {
      isSignInClicked: false,
      user: null,
      callback: (response) => {
        console.log("Logged in");
        this.loggedIn = true;
        this.user = decodeCredential(response.credential);
      },
    };
  },
  methods: {
    signInBy() {
      console.log("Clicked on sign in arrow", this.user);
      this.isSignInClicked = true;
    },
    logOut(){
        googleLogout();
        console.log("Logged out")
        this.isSignInClicked = false;
        this.user=null;
    }
  },
};
</script>

<style></style>
