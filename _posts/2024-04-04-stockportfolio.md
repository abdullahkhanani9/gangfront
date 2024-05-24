---
title: Stocks Portfolio
permalink: /portfolio
layout: base
description: Varun's CPT Feature aspect regarding stock portfolios.
---

<html>
<a href="/frontgang/stocks">Back</a>
<a href="/frontgang/transactionlog">Transaction Log</a>
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
            display: block; /* Change to flex */
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
        canvas {
            top: 50%;
            left: 50%;
            width: 500px;
            transform: translate(-50%, -50%);
            position: fixed;
        }
    </style>
    <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js"></script>
    <style type="text/css">      
     html, body, #container { 
        width: 100%; height: 200%; margin: 0; padding: 0; 
      } 
    </style>
</head>
<body class="container">
    <h1>User Money Over Transactions Graph</h1><h3 id= "Balance"></h3>
    <div id="container"></div>
    <table id="stockTable">
        <thead>
            <tr>
                <th>Symbol</th>
                <th>Total Quantity</th>
                <th>Value</th>
                <th>Sell</th>
            </tr>
        </thead>
        <tbody>
            <!-- Table content will be dynamically populated using JavaScript -->
        </tbody>
    </table>
<script type="module">
    import { uri, options1 } from '/frontgang/assets/js/api/config.js';
    document.addEventListener("DOMContentLoaded", function () {
        function fetchData() {
            var url = 'http://127.0.0.1:8476/api/stocks/portfolio';
            const uid = localStorage.getItem("uid");
            var data = {
                uid: uid
            };
            var json = JSON.stringify(data);
            const authOptions = {
                ...options1,
                body: json,
            };
            fetch(url, authOptions)
                .then(response => response.json())
                .then(data => {
                    updateTable(data.portfolio);
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
                    <td><button class="sell-button" data-symbol="${portfolio_data.SYMBOL}">Sell</button></td>
                `;
                tableBody.appendChild(row);
                Balance()
                const sellButton = row.querySelector('.sell-button');
                sellButton.addEventListener('click', function () {
                    var url = 'http://127.0.0.1:8476/api/stocks/singleupdate';
                    var sym = portfolio_data.SYMBOL; // Ensure correct symbol is used
                    console.log(sym);
                    var data = {
                        symbol: sym
                    };
                    var json = JSON.stringify(data);
                    const authOptions = {
                        method: 'POST',
                        credentials: 'include',
                        body: json,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    };
                    console.log(authOptions);
                    fetch(url, authOptions)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            var price = data; // Ensure 'price' is correctly retrieved from 'data'
                            console.log("this is price");
                            console.log(price);
                            sellStock(sym, portfolio_data.TOTAL_QNTY, price); // Call sellStock with the correct arguments
                        })
                        .catch(error => console.error('Error fetching data:', error));
                });
            });
        }
        function sellStock(symbol, quantity, price) {
            console.log(`Selling stock with symbol: ${symbol}`);
            const quantityToSell = prompt(`How many stocks of ${symbol} do you wish to sell? The current price is $${price}`, '1');
            const ownedQuantity = quantity; // Assuming quantity is the available quantity owned by the user
            if (quantityToSell !== null && !isNaN(quantityToSell) && quantityToSell > 0 && quantityToSell <= ownedQuantity) {
                alert(`Selling ${quantityToSell} stocks of ${symbol}`);
                var url = 'http://127.0.0.1:8476/api/stocks/sell';
                const uid = localStorage.getItem("uid");
                var data = {
                    quantity: Number(quantityToSell),
                    symbol: symbol,
                    uid: uid,
                };
                var json = JSON.stringify(data);
                const authOptions = {
                    ...options1,
                    body: json,
                };
                fetch(url, authOptions)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('success', data);
                        fetchData();  // Refresh the data after a successful sell
                        Balance();
                        graph();
                            // Update balance after a successful sell
                    })
                    .catch(error => {
                        //console.error('error', error);
                        fetchData();  // Refresh the data after a successful sell
                        Balance();
                        graph();
                    });
            } else {
                alert('Sell operation canceled or invalid quantity entered.');
            }
        }
        function Balance() {
                    var uid = localStorage.getItem("uid");
                    var data = {
                        uid: uid
                    };
                    var json = JSON.stringify(data);
                    //var authOptions1 = {
                    //    method: 'POST',
                    //    headers: {'Content-Type': 'application/json'},
                    //    body: json,
                    //    mode: 'cors',
                    //    cache: 'no-cache',
                    //    credentials: 'include'
                    //};
                    const authOptions = {
                            ...options1,
                            body:json,
                        };
                    var url = 'http://127.0.0.1:8476/api/stocks/stockmoney';
                    fetch(url, authOptions)
                        .then(response => response.json())
                        .then(data => {
                            document.getElementById('Balance').textContent = `Available Balance for Purchase': ${data}`;
                        })
                        .catch(error => {
                            console.error('Error fetching stock money:', error.message);
                        });
                }
        // Call fetchData when the page loads
        fetchData();
    });
        anychart.onDocumentReady(function() {
    // The main JS line charting code will be here.\
            var url = 'http://127.0.0.1:8476/api/stocks/owned';
            var uid = localStorage.getItem('uid')
            var payload = {
                uid: uid
            }
            var json = JSON.stringify(payload)
            //var authOptions = {
            //    credentials: 'include',
            //    body: json,
            //    method: 'Post',
            //    headers: { 'Content-Type': 'application/json' }        
            //}
            const authOptions = {
                            ...options1,
                            body:json,
                        };
            fetch(url,authOptions)
                .then(response => response.json())
                .then( data =>{
                    console.log(data)
                    var dataSet = anychart.data.set(data);
                    // map the data for all series
                    var firstSeriesData = dataSet.mapAs({x:0, value: 1});
                    // create a line chart
                    var chart = anychart.line();
                    // create the series and name them
                    var firstSeries = chart.line(firstSeriesData);            // add a legend
                    //chart.legend().enabled(true);
                    // add a title
                    chart.title("Account Balance")
                    // specify where to display the chart
                    chart.container("container");
                    chart.background().fill("#333")
                    chart.xAxis().stroke({
                        // set stroke color
                        color: "gold",
                        // set dashes and gaps length
                    });
                    chart.yAxis().stroke({
                        // set stroke color
                        color: "gold",
                        // set dashes and gaps length
                    });
                    chart.xAxis().labels().fontColor("gold");
                    chart.yAxis().labels().fontColor("gold");
                    //chart.xAxis().scale().minimum(0);
                    //chart.xScale().minimum(0);
                    // draw the resulting chart
                    chart.draw();
                })
    });
    </script>
</body>
</html>
