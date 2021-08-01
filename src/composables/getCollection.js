import {ref, watchEffect} from "vue"
import {projectFirestore} from "../firebase/config";

const getCollection = (collection) => {

    const errors = ref();
    const documents = ref([]);

    let collectionRef = projectFirestore.collection(collection).orderBy("createdAt");

    const unsub = collectionRef.onSnapshot((snap) => {

        let results = [];

        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({...doc.data() , id : doc.id})
        })

        documents.value = results
        errors.value = null


    },(err)=>{
        console.log(err);
        documents.value = null
        errors.value = "could not fetch the data "
    });

watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
})


    return {errors , documents}
};
export default getCollection;