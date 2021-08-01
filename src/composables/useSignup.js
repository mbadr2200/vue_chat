import {ref} from "vue";
import {projectAuth} from "../firebase/config.js";
import Swal from 'sweetalert2/src/sweetalert2.js'

const errors = ref();

const signUp = async (email , password , displayName) => {

    errors.value = null
   try
   {
    const res = await projectAuth.createUserWithEmailAndPassword(email , password);

    if (!res)
    {
        throw Error("could not register the user .");
    }

    await res.user.updateProfile({displayName})
    errors.value =  null

    new Swal({
        icon: 'success',
        title: 'Registered!',
        text: `User ${res.user.displayName} Registered successfully`,
        timer: 800
       })

    return res

   }
   catch(err)
   {
       new Swal({
        icon: 'error',
        title: 'Oops...',
        text: err.message
       })
       console.log(err.message)
       errors.value = err.message
   }



};

const useSignUp = () => {
    return {errors , signUp}
}

export default useSignUp