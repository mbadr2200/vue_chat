import {ref} from "vue";
import {projectAuth} from "../firebase/config.js";
import Swal from 'sweetalert2/src/sweetalert2.js'

const errors = ref();

const signIn = async (email , password) => {

    errors.value = null
   try
   {
    const res = await projectAuth.signInWithEmailAndPassword(email , password);

    if (!res)
    {
        throw Error("Email/Password incorrect .");
    }

    errors.value =  null

    new Swal({
        icon: 'success',
        title: 'logged in!',
        text: `User ${res.user.displayName} logged in successfully`,
        timer: 800
       })

    return res

   }
   catch(err)
   {
       new Swal({
        icon: 'error',
        title: 'Oops...',
        text: "Email/Password incorrect ."
       })
       console.log(err.message)
       errors.value = err.message
   }



};

const useSignin = () => {
    return {errors , signIn}
}

export default useSignin