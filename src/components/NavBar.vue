<template>
  <nav  v-if="user">
      <div>
          <p>Hey {{user.displayName}}</p>
          <p class="email">you logged in with {{user.email}}</p>
      </div>
      <button @click="handleLogout">logout</button>
  </nav>
</template>

<script>
import useLogout from "../composables/useLogout";
import getUser from "../composables/getUser";
import {useRouter} from "vue-router"
export default {

    setup () {
        const router = useRouter();
        const {  errors ,signout } = useLogout();
        const {user} = getUser();

        const handleLogout = async() => {
            await signout();
            if(!errors.value)
            {
                router.push({name:"Welcome"})
            }
        }

        return {handleLogout , user}
    }

}
</script>

<style>
nav
{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p 
{
    font-weight: bold;
    margin: 3px auto;
}
nav .email
{
    color: #333;
}
nav button
{
    width: 200px;
}
</style>