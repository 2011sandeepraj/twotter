<template>
 <div id="app">
  <nav>
    <router-link to="/">
        <div class="navigation__logo">
          My Twootter
        </div>
    </router-link>
    <div class="navigation__user" v-if="user">
      {{user.username}}
    </div>
    
  </nav>  
     <!-- <button @click="goToHome()"> </button> -->
  <router-view/>

 </div>

 
</template>

<script>

import {useStore} from 'vuex'
import {computed} from 'vue'


export default {
  name: 'App',
  setup(){
    //Composition API way of accessing the store
    const store = useStore();
    const user = computed(() => store.state.User.user);
    // goToHome(){
    //   this.$router.push('/home'); 
    //  }

    return {
      user
    }

  }
} 
</script>

<style>
#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #3378c2;
  background-color: #F3F5FA;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  
}
nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 5%;
    background-color: rgb(15, 241, 241);
    color: white;
 
}
 .navigation__logo {
      font-weight: bold;
      font-size: 45px;
    }
.select{
     background-image:none\9;
        padding: 5px\9;
       
}
</style>