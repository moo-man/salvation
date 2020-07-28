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
        commit("HIDE_AUTH")
        this.state.modal = "appAdminModal"
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}