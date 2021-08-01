<template>
  <h1>chat room</h1>
  <div class="container">
    <navBar/>
    <ChatWindow/>
  <newChatForm/>
  </div>
</template>

<script>
import { watch } from '@vue/runtime-core';
import {useRouter} from "vue-router";
import NavBar from "../components/NavBar.vue"
import newChatForm from "../components/newChatForm.vue"
import ChatWindow from "../components/ChatWindow.vue"
import getUser from "../composables/getUser"

export default {
  components:{NavBar , newChatForm , ChatWindow},
  setup() {

    const {user} = getUser();
    let router = useRouter();

    watch(user,() => {
      if(!user.value)
      {
        router.push({name:"Welcome"})
      }
    })


  }

}
</script>

<style>

</style>