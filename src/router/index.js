import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from "../views/chatroom.vue"
import {projectAuth} from "../firebase/config"

// auth guard 
const requireAuth = (to , from , next) => {

 let user = projectAuth.currentUser;
 if(!user)
 {
   next({name:"Welcome"});
 }
 next();

};

const noAuth = (to , from  , next ) => {

  let user = projectAuth.currentUser;
  if(!user)
  {
    next();
  }
  next({name:"Chatroom"})

};

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome,
    beforeEnter : noAuth
  },
  {
    path : "/chatroom",
    name : "Chatroom",
    component : Chatroom,
    beforeEnter : requireAuth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
