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
            email: 'admin@test.test',
            password: '1234'
        };
    },
    methods: {
        connect() {
            this.$store.dispatch('login', {
                email: this.email,
                password: this.password
            }).then((response => {
                this.$router.replace({ name: 'admin' });
            }));
        }
    }
}
</script>