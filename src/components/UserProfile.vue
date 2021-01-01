<template>
    <div class="user-profile">
        <div class="user-profile_user-panel">
            <h1>@{{user.username}}</h1>
            <h4>{{fullName}}</h4>
            <div>Followers:{{ followers }}</div>
            
            
            <button class="user-profile_button" @click="followUser" >
                 Follow Me!
            </button>     
            <form class="user-profile__create-twoot">
                <label for="newTwoot">New Twoot</label>
                <textarea id="newTwoot" rows="4" cols="50"/>
                <label for="newTwootType">Type:</label>
                <select id="newTwootType" class="select">
                    <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
                            {{option.name}}
                    </option>
                </select>
            </form>
               
            

        </div>
        
        <div class="user-profile__twoots-wrapper">
            <!--TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot"/-->
            <div v-for="twoot in user.twoots" :key="twoot.id" class="twoot-item">
                @{{user.username}} says 
                <h3>{{twoot.content}}</h3>
            </div>            
        </div>
          
    </div>
    <!-- <SandeepItem/> -->
</template>

<script>
//import TwootItem from "./TwootItem";
//import SandeepItem from "SandeepItem";



export default {
    name: "UserProfile",
    data() {
        return {
            twootTypes:[{value: 'draft', name: 'Draft'},{value:'instant', name:'Instant Twoot'}],
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
    //components: {SandeepItem}
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
        padding: 50px 5%;
        text-align:left;      
         
    }
    

    .user-profile_button {
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