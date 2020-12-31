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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F3F5FA;
  display: flex;
  flex-direction: column;
  text-align: center;  
}
</style>