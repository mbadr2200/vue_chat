<template>
  <form>
    <textarea
      placeholder="write your message and press enter"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
    <div v-if="errors">{{ errors }}</div>
  </form>
</template>

<script>
import { ref } from "vue";
import { timestamp } from "../firebase/config";
import getUser from "../composables/getUser";
import useCollection from "../composables/useCollection";
export default {
  setup() {
    const { user } = getUser();
    const { errors, addDoc } = useCollection("messages");

    let message = ref("");

    const handleSubmit = async () => {
      const chat = {
        message: message.value,
        name: user.value.displayName,
        createdAt: timestamp(),
      };

      addDoc(chat);
      if (!errors.value) {
        message.value = "";
      }
    };

    return { message, handleSubmit, errors };
  },
};
</script>

<style scoped>
form {
  width: 100%;
}
textarea {
  width: 100%;
  background: var(--main_white_color);
  padding: 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin: 10px;
}
</style>
