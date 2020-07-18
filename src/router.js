import Calendar from "./calendar/Calendar"
import Salvation from "./Salvation"
import VueRouter from "vue-router"
import Vue from "vue"

Vue.use(VueRouter)

const routes =  [
    {path : "/", component: Salvation},
    {path : "/calendar", component: Calendar},
    {path : "/world", component: Calendar}
]

export default new VueRouter({mode:"history", routes})