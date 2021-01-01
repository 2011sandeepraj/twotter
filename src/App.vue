<template>
 <div id="app">
   <UserProfile/>
   <!-- <SandeepItem/> -->
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

.select{
     background-image:none\9;
        padding: 5px\9;
       
}
</style>