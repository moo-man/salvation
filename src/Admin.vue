<template>
    <modal class="admin-modal">
        <template v-slot:header>
            <h3>Emperor Actions</h3>
        </template>


        <template v-slot:body>
            <div class="action-list">
                <a>Restart Foundry</a>
                <a href="https://theworld.signin.aws.amazon.com/console/">Access S3 Storage</a>
                <a>Access Calendar Editing</a>
            </div>
        </template>

        <template v-slot:footer>
            <button class="modal-default-button" @click="close">
            Close
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
        authClosed() {
            this.$store.commit("HIDE_AUTH")
        },
        restartFoundry() {
            console.log("Sending Restart Request")
            axios.post("https://refresh.moohammer.club/restart", {})
            .then(function (response) {
                alert("Foundry Restart Successful")
            })
            .catch(function (error) {
                alert("Foundry Restart Failed")
                console.log(error);
            });
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
