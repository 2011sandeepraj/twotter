<template>
  <table style="width:100%">
    <tr>
      <td cols="12">
        <h1>Welcome to Twooter</h1>
      </td>
    </tr>
    <template v-if="isAuthenticated">
      <tr>
        <td align-self="center" cols="12">
          <button depressed color="secondary" @click="logout">Logout</button>
        </td>
      </tr>
    </template>
    <template v-else>
      <tr>
        <td cols="12">
          
          <h4>Use one of below options to get access to the portal</h4>
        </td>
      </tr>
      <tr>
        <td cols="12">
          <button depressed color="primary" @click="login('bcsc')">Login using BCSC</button>
        </td>
      </tr>
      <tr>
        <td align-self="center" cols="12">
          <button depressed color="primary" @click="login('bceid')">Login using BCeID</button>
        </td>
      </tr>
    </template>
  </table>
</template>

<script>

import {useStore} from 'vuex';
import { computed } from 'vue';
//import keycloak from "../Helpers/AuthHelper.ts"


export  default {
    name: "Login",
    setup(){
        //Composition API way of accessing the store
        const store = useStore();
        const isAuthenticated = computed(() => store.state.Login.isAuthenticated);

        function login(idp){
             console.log(`Key Cloak Login ${idp}`)
             //keycloak.login({idpHint: idp});
            store.dispatch('Login/setAuthenticate', true);
         
            
        }

        function logout(){
            // console.log('Key Cloak Logout')
            //keycloak.logout();
            store.dispatch('Login/setAuthenticate', false);
          
        }     

        return {isAuthenticated, login, logout}
    }

}


</script>