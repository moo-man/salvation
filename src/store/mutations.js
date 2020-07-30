export default {
        "HIDE_MODAL"(state) 
        {
            state.modal = ""
        },
        "SHOW_ADMIN_ACTIONS"(state) {
            if (state.auth.token)
                state.modal = "appAdminModal"
        }
    
    }