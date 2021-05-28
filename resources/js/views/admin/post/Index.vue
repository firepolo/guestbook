<template>
    <div>
        <h1>ADMIN POST INDEX</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post, index) in posts" v-bind:key="post.id">
                    <th scope="row">{{ index }}</th>
                    <td>{{ post.title }}</td>
                    <td>{{ postContent(post.content) }}</td>
                    <td>{{ post.image }}</td>
                    <td><button class="btn btn-secondary" type="button" @click="edit">Edit</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    methods: {
        postContent(content) {
            return content.substr(0, 32) + '...';
        }
    },
    computed: {
        posts() {
            return this.$store.getters.posts;
        }
    },
    mounted() {
        this.$store.dispatch('fetchPosts');
    }
}
</script>