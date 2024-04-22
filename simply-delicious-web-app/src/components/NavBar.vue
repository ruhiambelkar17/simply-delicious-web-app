<template>
  <div class="">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
              <a class="nav-link"> Recipes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"> Video Recipes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"> Cusine</a>
            </li>
          </ul>
        </div>
        <div>
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
          <span class="ps-2" @click="signInBy">
            <span>{{ user }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="grey"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </nav>

    <!-- <div v-if="loggedIn">
      <button @click="logout">Logout</button>
      <p>The user currently logged in is: {{ user.name }}</p>
    </div> -->
    <div class="d-none" v-if="isSignInClicked">
      <GoogleLogin :callback="callback" prompt auto-login></GoogleLogin>
    </div>
  </div>
</template>

<script>
import {googleLogout,decodeCredential} from "vue3-google-login";
export default {
    data(){
    return {
        isSignInClicked:false,
        user:null,
        callback:(response) => {
            this.user=decodeCredential(response.credential);
            console.log(this.user)
        }
    }
  },
  methods: {
    signInBy() {
      console.log("Clicked on sign in arrow");
      this.isSignInClicked=true;
    },
  },
};
</script>

<style></style>
