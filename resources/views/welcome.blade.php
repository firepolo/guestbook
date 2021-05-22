<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" type="text/css" href="css/app.css">

        <title>Guestbook</title>
    </head>
    <body>
        <div id="app">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <router-view name="navbar"></router-view>
            </nav>
            <main class="container pt-4">
                <router-view></router-view>
            </main>
        </div>
        <script src="js/app.js"></script>
    </body>
</html>
