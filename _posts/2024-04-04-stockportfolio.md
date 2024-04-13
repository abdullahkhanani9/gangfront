---
title: Stocks Portfolio
permalink: /portfolio
layout: nav_ml
description: Varun's CPT Feature aspect regarding stock portfolios.
---

<html>
<a href="/teacher_portfolio/stocks">Back</a>
<a href="/teacher_portfolio/transactionlog">Transaction Log</a>
<head>
    <style>
        .darkmode {
            background: #252525;
            color: #ffffff;
        }
        .lightmode {
            background: #ffffff;
            color: #000000;
        }
        body {
            font-family: Arial, sans-serif;
            background-color: #222;
            margin: 0;
            padding: 0;
            display: flex; /* Change to flex */
            justify-content: center;
            align-items: center;
            min-height: 100vh; /* Change to min-height */
        }
        .container {
            background-color: #333;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            max-width: 100%; /* Change to max-width */
            overflow-x: auto; /* Allow horizontal scrolling */
        }
        h1 {
            text-align: center;
            margin-bottom: 20px;
            color: #fff;
            font-size: 20px;
        }
        label {
            display: block;
            margin-bottom: 10px;
            color: #fff;
            font-size: 16px;
        }
        input[type="text"],
        input[type="password"],
        select {
            width: calc(100% - 20px);
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #555;
            border-radius: 4px;
            box-sizing: border-box;
            background-color: #444;
            color: #fff;
            font-size: 16px;
        }
        button {
            width: calc(100% - 20px);
            padding: 10px;
            background-color: #525252;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 10px;
        }
        button:hover {
            background-color: #454746;
        }
        .canvas-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; /* Adjust as needed */
        }
    </style>
    <link id="theme-style" rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body class="container">
    <h1>User Money Over Transactions Graph</h1>
    <div class="canvas-containter" id="result">
        <canvas id="stockChart" width="400" height="400"></canvas>
    </div>
    <table id="stockTable">
        <thead>
            <tr>
                <th>Symbol</th>
                <th>Total Quantity</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <!-- Table content will be dynamically populated using JavaScript -->
        </tbody>
    </table>
    <script>
        var darkMode = false;
        window.onload = function () {
            var themeStyle = document.getElementById('theme-style');
            var body = document.body;
            var storedTheme = localStorage.getItem('theme');
            if (storedTheme === 'dark') {
                themeStyle.href = "assets/css/dark.css";
                body.classList.remove('lightmode');
                body.classList.add('darkmode');
            } else {
                themeStyle.href = "assets/css/style.css";
                body.classList.remove('darkmode');
                body.classList.add('lightmode');
            }
        }
        document.addEventListener("DOMContentLoaded", function () {
            function fetchData() {
                var url = 'http://127.0.0.1:8008/api/stocks/portfolio';
                const uid = localStorage.getItem("uid");
                var data = {
                    uid: uid
                };
                var json = JSON.stringify(data);
                const authOptions = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: json,
                    credentials: 'include'
                };
                fetch(url, authOptions)
                    .then(response => response.json())
                    .then(data => {
                        updateTable(data.portfolio); // Corrected here
                    })
                    .catch(error => console.error('Error fetching data:', error));
            }
            // Function to update the table with data
            function updateTable(data) {
                const tableBody = document.querySelector('#stockTable tbody');
                tableBody.innerHTML = ''; // Clear existing rows
                data.forEach(portfolio_data => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${portfolio_data.SYMBOL}</td>
                        <td>${portfolio_data.TOTAL_QNTY}</td>
                        <td>${portfolio_data.VALUE}</td>
                    `;
                    tableBody.appendChild(row);
                });
            }
            // Call fetchData when the page loads
            fetchData();
        });
    </script>
    <script>
        function graph(){
            const uid = localStorage.getItem("uid");
            fetch('http://127.0.0.1:8008/api/stocks/graph', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uid: uid })
            })
            .then(response => response.json())
            .then(data => {
                var img = document.createElement('img');
                img.src = 'data:image/png;base64,' + data.image;
                document.getElementById('result').appendChild(img);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
        graph()
    </script>
</body>
</html>
