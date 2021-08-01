<template>
  <div class="welcome container">
    <h1>welcome</h1>
    <div class="signup" v-if="showSignUp">
      <h2>Sign Up</h2>
      <signupForm @signup="enterChat" />
      <p>Alreay registred ? <span @click="showSignUp=false" class="link">Login in </span> here </p>
    </div>
    <div class="signin"  v-else >
      <h2>Sign In</h2>
      <signinForm  @login="enterChat"/>
      <p>Not registred ? <span @click="showSignUp=true" class="link">Sign up </span> here </p>
    </div>
  </div>
</template>

<script>
import signupForm from "../components/signupForm.vue";
import signinForm from "../components/signinForm.vue";
import {ref} from "vue"
import {useRouter} from "vue-router"

export default {
  components:{signupForm , signinForm},
  setup(){

    const router = useRouter();
    let showSignUp = ref(false);

    const enterChat = () => {

      router.push({name:"Chatroom"})

    };

    return {showSignUp , enterChat}
  }

}
</script>

<style>
.welcome
{
  text-align: center;
}
.link
{
  cursor: pointer;
  color: var(--accent_color);
  font-weight: bold;
}
</style>