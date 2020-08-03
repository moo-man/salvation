import axios from "axios"

const state = {
    token : undefined,
}

const getters = {
    token : state => {
        return state.token
    }
}

const mutations = {
    "SHOW_AUTH"() {
        this.state.modal = "appAuthModal"
    }
}


const actions = {
    submitAuth({commit}, authData)
    {
        axios.post("http://admin.hof.cards:3000/auth", {password: authData})
        .then(res => {
            if (res.data.token)
            {
                this.state.auth.token = "Bearer " + res.data.token
                commit("HIDE_MODAL")
                commit("SHOW_ADMIN_ACTIONS")
            }
        })
        .catch(e => {
            return false
        })

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}