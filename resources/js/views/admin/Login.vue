<template>
    <div>
        <h1>ADMIN LOGIN</h1>
        <div class="d-flex justify-content-center align-items-center">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form>
                        <div class="form-group mb-2">
                            <label for="email">E-mail</label>
                            <input class="form-control" name="email" type="email" placeholder="E-mail" v-model.trim="email">
                        </div>
                        <div class="form-group mb-2">
                            <label for="password">Password</label>
                            <input class="form-control" name="password" type="password" placeholder="Password" v-model="password">
                        </div>
                        <button class="btn btn-primary" type="submit" @click.prevent="connect">Connect</button>
                    </form>
                </div>
            </div>
        </div>
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