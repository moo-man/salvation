import Vue from "vue"
import Vuex from "vuex"

import auth from "./modules/auth"
import mutations from "./mutations"
import state from "./state"
import getters from "./getters"

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    state,
    mutations,
    modules : {
        auth,
    }
})