<template>
    <div>
        <h1>ADMIN LOGIN</h1>
        <div><input type="email" placeholder="E-mail" v-model.trim="email"></div>
        <div><input type="password" placeholder="Password" v-model="password"></div>
        <button @click.prevent="connect">Connect</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        connect() {
            this.$store.dispatch('login');
        }
    }
}
</script>