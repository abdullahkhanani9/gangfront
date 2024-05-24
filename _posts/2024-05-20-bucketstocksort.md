---
permalink: /sort
layout: base
title: Stocks Displaying
description: Varun's CPT Feature of displaying stocks.
---
<html>
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
            max-width: 110%; /* Change to max-width */
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
    </style>
<head>
    <script src=
"https://cdn.jsdelivr.net/npm/chart.js">
    </script>
</head>
<body class = "container">
    <h1>Looking for more stocks? Searching by sectors</h1>
    <div>
        <!-- Create a canvas element to render the chart -->
        <canvas id="pieChart" width="400" height="400">
        </canvas>
    </div>
    <script>
        // Get the 2D rendering context of the canvas
        let ctx = document.getElementById('pieChart')
            .getContext('2d');
        let dataValue = {
            // Labels for each segment of the pie
            labels: ['Communication Services',
                'Consumer Discretionary',
                'Consumer Staples',
                'Energy',
                'Financials',
                'Health Care',
                'Industrials',
                'Information Technology',
                'Materials',
                'Real Estate',
                'Utilities'],
            // Datasets for the chart
            datasets: [{
                data: [10.7, 9.9, 7.2, 3.6, 12.2,14,8.9,24.4,2.5,3.1,3.5],
                // Data points for each segment
            }]
        }
        // Create a new Pie Chart
        let pieChart = new Chart(ctx, {
            // Specify the chart type
            type: 'pie',
            // Provide data for the chart
            data: dataValue,
            // Additional options for the chart
            options: {
                responsive: true, // It make the chart responsive
                // This plugin will display Title of chart
                // Event handler for a click on a chart element
                onClick: function (event, elements) {
                    const clickedElement = elements[0];
                    const datasetIndex = clickedElement.index;
                    const label = dataValue.labels[datasetIndex];
                    const labelValue = dataValue.datasets[0].data[datasetIndex];
                    // Show an alert with information about the clicked segment
                    alert(`Clicked on: ${label} and it accounts of ${labelValue} % of the S&P 500`);
                    console.log(label)
                    var url ='http://127.0.0.1:8476/api/sort/sort'
                    var data = {
                        'GICS Sector': label
                    }
                    var json = JSON.stringify(data)
                    const authOptions = {
                        method: 'POST', // *GET, POST, PUT, DELETE, etc.
                        credentials: 'include', // include, same-origin, omit
                        body: json,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    };
                    fetch(url, authOptions)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            window.localStorage.setItem('GICS Sector', json);
                            window.location.href = "/frontgang/stocksort" 
                        })
                        .catch(error => console.error('Error fetching data:', error));
                }
            }
        });
    </script>
    
</body>
 
</html>