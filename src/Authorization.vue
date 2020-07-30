<template>
    <modal class="auth-modal">
        <template v-slot:header>
            Emperor Authorization
        </template>


        <template v-slot:body>
            <input v-model="password" type="password">
            <p v-if="error" class="error">Denied</p>
        </template>

        <template v-slot:footer>

            <button class="modal-default-button" @click="authSubmit">
            OK
            </button>
        </template>
    </modal>
</template>

<script>
import Modal from "./components/Modal"
export default {
    data() {
        return {
            password : "",
            error : false
        }
    },
    components : {
        modal : Modal
    },
    methods: {
        authSubmit() {
            this.$store.dispatch("submitAuth", this.password).then(success => {
                if (success)
                    this.error = false;
                else
                    this.error = true;
            })
        },
    }
}
</script>


