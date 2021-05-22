<template>
    <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home' }">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup" v-if="logged">
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" :to="{ name: 'admin' }">Dashboard</router-link>
                <router-link class="nav-item nav-link" :to="{ name: 'admin.post.index' }">Posts</router-link>
                <a class="nav-item nav-link ml-auto" href="#" @click.prevent="logout">Logout</a>
            </div>
        </div>
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