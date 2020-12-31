<template>
    <div class="user-profile">
        <div class="user-profile_user-panel">
            <h1>@{{user.username}}</h1>
            <h4>{{fullName}}</h4>
            <div>Followers:{{ followers }}</div>
            
            
            <button class="user-profile_button" @click="followUser" >
                 Follow Me!
            </button>     
        </div>
        <div class="user-profile_twoots-wrapper">          
            <!--TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot"/-->
            <!-- <div v-for="twoot in user.twoots" :key="twoot.id">
                {{twoot.content}}
            </div> -->
            
        </div>
          
    </div>
    <SandeepItem/>
</template>

<script>
//import TwootItem from "./TwootItem";
import SandeepItem from "SandeepItem";



export default {
    name: "UserProfile",
    data() {
        return {
            followers: 0,
            user:{
                id:1,
                username:'singhsandeepraj',
                firstName: 'Sandeepraj',
                lastName: 'Singh',
                email: 'sandeepraj.tandon@cgi.com',
                isAdmin: true,
                twoots: [
                    {id: 1, content:'Welcome to my twooter profile'},
                    {id: 2, content:'I am blah blah and blah and passionate about plah plah and plan!'}
                ]
                
            }
        }
    },
    watch:{
        followers(newFollowerCount, oldFollowerCount){
            if(newFollowerCount>oldFollowerCount){
                console.log(`${this.user.username} gained a new follower!`)
            }
        }
    },
    computed: {
        fullName() {
        return `${this.user.firstName} ${this.user.lastName}`; 
    },
    components: {SandeepItem}
  },
  methods: {
    followUser() {
      this.followers++
    }
  } 
}


</script>



<style scoped>
    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 100%;
        padding: 50px 5%;
        text-align:left;        
    }

    .user-profile_button {
        margin-top:20px;       
        margin-right: auto;
    }

    .user-profile_user-panel {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
    }
</style>