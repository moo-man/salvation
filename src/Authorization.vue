<template>
    <modal class="auth-modal">
        <template v-slot:header>
            Emperor Authorization
        </template>


        <template v-slot:body>
            <input type="password">
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
    components : {
        modal : Modal
    },
    methods: {
        authSubmit() {
            this.$store.dispatch("submitAuth")
        },
    }
}
</script>