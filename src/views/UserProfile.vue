<template>
    <div class="user-profile">
        <div class="user-profile_user-panel">
            <h1>@{{state.user.username}}</h1>           
            <h4>{{state.fullName}}</h4>
            <div>Followers:{{ state.user.followers }}</div>

            <!-- <button @click="followUser" >
                 Follow Me!
            </button>    -->
            
            <Button  class="userprofile-button" icon="pi pi-user" label="Follow Me!"  @click="followUser"></Button>
            <!-- <ToggleButton v-model="checked2" onLabel="Best Friends, I confirm" offLabel="Not Any more, I reject" onIcon="pi pi-check" offIcon="pi pi-times" style="width: 10em" /> -->
            
            <CreateTwootPanel @add-twoot="addTwoot"/>

        </div>
        
        <div class="user-profile__twoots-wrapper">
            <TwootItem v-for="twoot in state.user.twoots" :key="twoot.id" :username="state.user.username" :twoot="twoot"/>
        </div>
          
       
    </div>
    <div class="cars-panel">
        
         <DataTable :value="cars" :filters="filters" :paginator="true" :rows="5" :scrollable="true"  class="p-datatable-gridlines p-datatable-striped">
             <template #header>
                
                <div style="text-align: center">
                My Cars     
                    <i class="pi pi-search" style="margin: 4px 4px 0px 0px;"></i>
                    <InputText v-model="filters['global']" placeholder="Global Search" size="20" />
              </div>
            </template>           
            <Column v-for="col of columns" :field="col.field"  :header="col.header" :key="col.field" :sortable="true" filterMatchMode="in"></Column>
        </DataTable>  
        </div>
</template>

<script>
import TwootItem from "@/components/TwootItem";
import CreateTwootPanel from "@/components/CreateTwootPanel"
import {useRoute} from 'vue-router';
import {reactive, computed} from 'vue';
import {users} from '../assets/users'
 import {cars} from '../assets/cars'



export default {
    name: "UserProfile",
    components: {TwootItem,CreateTwootPanel},
    setup(){
        
        const route = useRoute();
        const userId = computed(() => route.params.userId);
        const fullName = computed(()=> `${state.user.firstName} ${state.user.lastName}`);
        //const cars = computed(()=> `${state.user.cars}`);
        const state = reactive({ 
            user:users[userId.value-1]||users[0],
           
        });
        const checked2=true
        const filters ={}
        function addTwoot(twoot){
            
             let freshTwoot = {
                id: state.user.twoots.length+1,
                content: twoot
            }
            state.user.twoots.unshift(freshTwoot);
            state.newTwootContent=''; 
          
            
        }

        function followUser() {
            state.user.followers++
        }


        const columns = [ {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}];

        
        return {state, userId,fullName,addTwoot,followUser, cars, columns, filters,checked2}
    },
    

 
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
    /* user-profile__twoots-wrapper {
        margin: 10px;
        padding: 10px;
        display: grid;
        grid-gap: 10px
    } */

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