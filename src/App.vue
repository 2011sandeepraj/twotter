<template>
 <div id="app">
  <nav>
    <div class="navigation__logo">
        My Twootter
    </div>
  </nav>  

   <UserProfile/>
  
 </div>
</template>

<script>
import UserProfile from "./components/UserProfile";

//import SandeepItem from './components/SandeepItem.vue';


export default {
  name: 'App',
  components: {
    UserProfile
    //,
   // SandeepItem
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
    padding: 5px 6%;
    background-color: rgb(15, 241, 241);
    color: white;
 
}
 .navigation__logo {
      font-weight: bold;
      font-size: 50px;
    }
.select{
     background-image:none\9;
        padding: 5px\9;
       
}
</style>