<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Guestbook</title>
    </head>
    <body>
        <div id="app">
            <nav>
                <router-link :to="{name:'home'}">Home</router-link>
                <router-link :to="{name:'post.index'}">Posts</router-link>
            </nav>
            <main>
                <router-view></router-view>
            </main>
        </div>
        <script src="js/app.js"></script>
    </body>
</html>
