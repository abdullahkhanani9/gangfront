---
permalink: /settings
layout: default
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Settings</title>
    <style>
        .form-container {
            padding: 20px;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }
        .input {
            margin-bottom: 10px;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
    </style>
</head>
<body>
    <div class="form-container">
        <h2>Theme Customization</h2>
        <form id="settings-form">
            <input type="text" id="username" class="input" placeholder="Username">
            <input type="text" id="uid" class="input" placeholder="User ID">
            <input type="password" id="password" class="input" placeholder="Password">
            <input type="text" id="theme" class="input" placeholder="Theme (light/dark)">
            <p id="error-message" style="display: none; color: red;"></p>
            <button type="button" onclick="saveSettings()">Save Changes</button>
        </form>
    </div>
    <script>
        // Function to save settings
        function saveSettings() {
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const theme = document.getElementById("theme").value;
            const uid = document.getElementById("uid").value; // Retrieve uid from input field
            // Save theme setting to localStorage
            localStorage.setItem('theme', theme);
            const data = {
                uid: uid,
                name: username,
                password: password,
                theme: theme
            };
            console.log('Data to be sent:', data); // Add this line to log the data to be sent
            fetch('http://127.0.0.1:8008/api/theme/save_settings', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ settings: data })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('User or theme does not exist.');
                }
                return response.json();
            })
            .then(data => {
                alert('Settings saved successfully');
                console.log(data);
                applyTheme(theme); // Apply theme immediately after saving
            })
            .catch(error => {
                document.getElementById("error-message").innerText = error.message;
                document.getElementById("error-message").style.display = "block";
                console.error('Error:', error);
            });
        }
        // Function to apply theme
        function applyTheme(theme) {
            const formContainer = document.querySelector('.form-container');
            const inputs = document.querySelectorAll('.input');
            if (theme === 'light') {
                document.documentElement.style.setProperty('--primary-color', '#fff');
                document.documentElement.style.setProperty('--secondary-color', '#333');
                formContainer.style.backgroundColor = '#fff'; // Set background color to light
                inputs.forEach(input => {
                    input.style.backgroundColor = '#fff';
                    input.style.color = '#333';
                });
            } else if (theme === 'dark') {
                document.documentElement.style.setProperty('--primary-color', '#333');
                document.documentElement.style.setProperty('--secondary-color', '#fff');
                formContainer.style.backgroundColor = '#333'; // Set background color to dark
                inputs.forEach(input => {
                    input.style.backgroundColor = '#333';
                    input.style.color = '#fff';
                });
            }
        }
        // Retrieve theme setting from localStorage and apply it
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.getElementById("theme").value = savedTheme;
            applyTheme(savedTheme);
        }
    </script>
</body>
</html>
