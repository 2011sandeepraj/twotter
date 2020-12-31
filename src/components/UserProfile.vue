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
         
    </div>
    
</template>

<script>
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
                isAdmin: true
                
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
    }
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
        width:40%;
        height:40% ;
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