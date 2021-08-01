<template>
  <form  @submit.prevent="handleSubmit">
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Password" v-model="password" required>
      <button>Sign In</button>
  </form>
</template>

<script>
import {ref} from "vue" ;
import useSignin from "../composables/useSingin.js";

export default {

    setup(props ,context){

        const {errors , signIn } = useSignin();
        //refs 
        let email = ref();
        let password = ref();

        const handleSubmit = async () => {
            await signIn( email.value , password.value)
             if(!errors.value)
             {
                context.emit("login");
             }
        }
        return {email , password , handleSubmit}
    }
}
</script>

<style>

</style>