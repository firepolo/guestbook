<template>
    <div>
        <h1>ADMIN INDEX</h1>
        <a v-if="logged" href="#" @click.prevent="logout">Logout</a>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    computed: {
        logged() {
            return this.$store.state.logged;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
            this.$router.replace({ name: 'admin.login' });
        }
    }
}
</script>