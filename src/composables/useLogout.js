import {ref} from "vue";
import {projectAuth} from "../firebase/config.js";
import Swal from 'sweetalert2/src/sweetalert2.js'

const errors = ref();

const signout = async () => {

    errors.value = null
   try
   {
     await projectAuth.signOut()

    errors.value =  null

    // new Swal({
    //     icon: 'success',
    //     title: 'logged in!',
    //     text: `User ${res.user.displayName} logged in successfully`,
    //     timer: 800
    //    })

   }
   catch(err)
   {
       new Swal({
        icon: 'error',
        title: 'error loggin out',
        text: err.message
       })
       errors.value = err.message
   }



};

const useLogout = () => {
    return {errors , signout}
}

export default useLogout