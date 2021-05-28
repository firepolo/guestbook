<template>
    <div>
        <h1>POST INDEX</h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col">Image</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post, index) in posts" v-bind:key="post.id">
                    <th scope="row">{{ index }}</th>
                    <td>{{ post.title }}</td>
                    <td>{{ postContent(post.content) }}</td>
                    <td>{{ post.image }}</td>
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