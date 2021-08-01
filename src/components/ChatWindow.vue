<template>
  <div class="chat-window">
    <div class="errors" v-if="errors">{{ errors }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div class="single" v-for="doc in formattedDocuments" :key="doc.id">
        <span class="created_at">{{ doc.createdAt }}</span>

        <span class="name">{{ doc.name }} : </span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from "../composables/getCollection";
import {formatDistanceToNow} from "date-fns"
import { computed, onUpdated , ref } from '@vue/runtime-core';
import format from 'date-fns/format/index';
export default {
  setup() {
    const { errors, documents } = getCollection("messages");

    const formattedDocuments = computed(() =>{
        if(documents.value)
        {
           return documents.value.map((doc) => {
               let time = formatDistanceToNow(doc.createdAt.toDate());
               return {...doc , createdAt:time}
            })
        }
    })
    //auto scroll 
    const messages = ref(null);

    onUpdated(() => {
        messages.value.scrollTop = messages.value.scrollHeight
    })

    return { errors, documents , formattedDocuments , messages };
  },
};
</script>

<style>
.chat-window {
  background: var(--main_white_color);

  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
}
.messages {
  max-height: 250px;
  overflow: auto;
}
.single {
    margin: 10px;
    padding: 10px;
    background: #eee;
}
.created_at {
    margin:10px;
    display: block;
}
.name {
font-weight: bold;
}
.message {
}
</style>
