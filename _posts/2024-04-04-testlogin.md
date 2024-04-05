---
permalink: /login
title: Sign In
layout: nav_ml
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #222;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: #333;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            width: 400px;
        }
        h1 {
            text-align: center;
            margin-bottom: 30px;
            color: #fff;
        }
        label {
            display: block;
            margin-bottom: 10px;
            color: #fff;
        }
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #555;
            border-radius: 4px;
            box-sizing: border-box;
            background-color: #444;
            color: #fff;
        }
        button {
            width: 100%;
            padding: 10px;
            background-color: #525252;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #454746;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Login</h1>
        <form>
            <label for="name">Username:</label>
            <input type="text" name="name" id="name" required>
            <label for="uid">User ID:</label>
            <input type="text" name="uid" id="uid" required>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password" required>
            <button type="button" onclick="sign_in()">Login</button>
        </form>
    </div>
    <script>
        window.sign_in = function signin(){
            const authurl = 'http://127.0.0.1:8008/api/users/authenticate';
            const body = {
                name: document.getElementById('name').value,
                uid: document.getElementById('uid').value,
                password: document.getElementById('password').value
            };
            const authOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
                cache: 'no-cache',
                credentials: 'include'
            };
            // Fetch the JWT
            fetch(authurl, authOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // Console log the success
                var users = document.getElementById('users');
                if(users) {
                    users.innerHTML = JSON.stringify(data);
                }
                alert("User Doesnt Exist");
                // window.location.href = "/register";
            })
            .catch(err => {
                console.error(err);
                alert("User Authenticated Successfully");
                userBody = "{" + "uid: " + document.getElementById('uid').value + "," + " password: " + document.getElementById('password').value + "}";
                console.log(userBody);
                window.localStorage.setItem('uid', document.getElementById('uid').value);
                window.localStorage.setItem('userBody', userBody);
                console.log(window.localStorage.getItem('userBody'));
                console.log("User Auth Token Stored Successfully");
                console.log(document.getElementById('uid').value);
                if (document.getElementById('uid').value == 'admin' || document.getElementById('uid').value == 'Admin'){
                    window.location.href = "/AtlasIndex/display";
                    return;
                }
                else{
                    window.location.href = "/teacher_portfolio/blogs/";
                }             
            });
        }
    </script>
</body>
</html>
