<template>
    <modal class="admin-modal">
        <template v-slot:header>
            <h3>Emperor Actions</h3>
        </template>


        <template v-slot:body>
            <div class="action-list">
                <a @click="restartFoundry">Restart Foundry</a>
                <a href="https://theworld.signin.aws.amazon.com/console/" target="_blank">Access S3 Storage</a>
                <a>Access Calendar Editing</a>
            </div>
        </template>
    </modal>
</template>

<script>
import Modal from "./components/Modal"
import axios from "axios"
export default {
    components : {
        modal : Modal
    },
    methods: {
        restartFoundry() {
            console.log("Sending Restart Request")
            this.$store.dispatch("FOUNDRY_RESTART")
        }
    }
}
</script>

<style scoped>
    .action-list {
        display: flex;
        flex-direction: column;
    }
    .action-list a {
        cursor: pointer;
        color: #6a070a

    }
    .action-list a:hover {
        text-decoration: underline;
    }
</style>
