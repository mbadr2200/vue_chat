import {ref} from "vue"
import {projectFirestore} from "../firebase/config";

const useCollection = (collection) => {
  
    const errors = ref(null);

    const addDoc = async(doc) => {
        errors.value = null;
        try
        {

            await projectFirestore.collection(collection).add(doc);
        }
        catch(err)
        {
            console.log(err);
            errors.value = "could not send the message"
        }

    };
    
    return {errors , addDoc}
};

export default useCollection;