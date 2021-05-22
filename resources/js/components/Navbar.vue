<template>
    <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'home' }">Navbar</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link class="nav-item nav-link" :to="{ name: 'post.index' }">Posts</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>