<template>
    <div class="user-profile">
        <div class="user-profile_user-panel">
            <h1>@{{user.username}}</h1>
            <h4>{{fullName}}</h4>
            <div>Followers:{{ followers }}</div>

            <button class="userprofile-button" @click="followUser" >
                 Follow Me!
            </button>   
            
            <CreateTwootPanel @add-twoot="addTwoot"/>
        </div>
        
        <div class="user-profile__twoots-wrapper">
            <TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot"/>
        </div>
          
    </div>
    
</template>

<script>
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from "@/components/CreateTwootPanel"

export default {
    name: "UserProfile",
    components: {TwootItem,CreateTwootPanel},
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
                    {id: 2, content:'I am blah blah and blah and passionate about plah plah and plah!'}
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

    },
    
    methods: {
        followUser() {
            this.followers++
        }, 
        addTwoot(twoot){
             let freshTwoot = {
                id: this.user.twoots.length+1,
                content: twoot
            }
            this.user.twoots.unshift(freshTwoot);
            this.newTwootContent = '';
            console.log(`newtwootcontent should have been cleared ${this.newTwootContent}`);
            
        }

   } //methods ends
} //export default ends


</script>



<style scoped>
    .user-profile {
        display: grid;
        grid-template-columns: 1fr 3fr;       
        padding: 50px 5%;
        text-align:left;      
         
    }
    

    .userprofile-button {
      padding: 5px 20px;
      border-radius: 5px;
      border: none;
      background-color: deeppink;
      color: white;
      font-weight: bold;
      margin-top:20px;       
      margin-right: auto;
      margin-bottom:20px;  
    } 
    

    .user-profile_user-panel {
        display: flex;
        flex-direction: column;
      
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
    }

    h1{
        margin: 0;
    }
    
    user-profile__create-twoot {
     
        display: flex;
        flex-direction: column;
        margin-top: 20px;
       
    }
    user-profile__twoots-wrapper {
        margin: 10px;
        padding: 10px;
        display: grid;
        grid-gap: 10px
    }

    .--exceeded{
        color: red;
        border-color:red;
    
    }
    
    .twoot-item{
        margin-left: 50px; 
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
        box-sizing: border-box;
        cursor: pointer;
        transition:all 0.25s ease;
        
    }

    .twoot-item:hover{
        transform: scale(1.15, 1.15)
    }

    .twoot-item__user{
        font-weight: bold;
    }
</style>