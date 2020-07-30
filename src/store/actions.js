import axios from "axios"

export default {
    "FOUNDRY_RESTART" ({commit, state}) {
        console.log(state.auth.token)
       axios.post("http://localhost:3000/restart", {}, {headers: {"Authorization" : state.auth.token}})
       .then(function (response) {
           alert("Foundry Restart Successful")
       })
       .catch(function (error) {
           alert("Foundry Restart Failed")
           console.log(error);
       });
    }
}