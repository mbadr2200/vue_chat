<template>
  <form  @submit.prevent="handleSubmit">
      <input type="text" placeholder="Display Name" v-model="displayName" required>
      <input type="email" placeholder="Email" v-model="email" required>
      <input type="password" placeholder="Password" v-model="password" required>
      <button>SignUp</button>
  </form>
</template>

<script>
import {ref} from "vue" ;
import useSignup from "../composables/useSignup";

export default {

    setup(props , context){

        const {errors , signUp } = useSignup();
        //refs 
        let displayName = ref();
        let email = ref();
        let password = ref();

        const handleSubmit = async () => {
            await signUp( email.value , password.value , displayName.value );
            if(!errors.value)
            {
                context.emit("signup")
            }

        }
        return { displayName , email , password , handleSubmit}
    }
}
</script>

<style>

</style>