const state = {
    token : undefined,
    showAuth : false
}

const getters = {
    auth : state => {
        return state.token
    },
    showAuth : state => {
        return state.showAuth
    }
}

const mutations = {
    "SHOW_AUTH"(state) {
        state.showAuth = true;
    },
    "HIDE_AUTH"(state) {
        state.showAuth = false;
    }
}


const actions = {
    submitAuth({commit}, authData)
    {
        commit("HIDE_AUTH")
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}