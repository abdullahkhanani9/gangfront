---
permalink: /filter
layout: base
title: Stocks Filtering
description: Aditya's final project of using merge sorting to filter stock data.
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Date Range Slider and Table</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.css">
</head>
<body>
    <h2>Select Date Range</h2>
    <div id="slider-range"></div>
    <p>
        <label for="amount">Date range:</label>
        <input type="text" id="amount" readonly style="border:0; color:#f6931f; font-weight:bold;">
    </p>
    <button id="submit">Submit</button>

<h3>Companies Founded Within Range</h3>
    <table id="dataTable">
        <thead>
            <tr>
                <th>Company Name</th>
                <th>Founded</th>
                <th>GICS Sector</th>
            </tr>
        </thead>
        <tbody id="dataBody">
        </tbody>
    </table>

<script src="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.js"></script>
    
<script>
        document.addEventListener('DOMContentLoaded', function () {
            const slider = document.getElementById('slider-range');
            const amount = document.getElementById('amount');
            const submitBtn = document.getElementById('submit');
            const dataBody = document.getElementById('dataBody');

            noUiSlider.create(slider, {
                start: [1900, 2024],
                connect: true,
                range: {
                    'min': 1800,
                    'max': new Date().getFullYear()
                },
                step: 1
            });

            slider.noUiSlider.on('update', function (values, handle) {
                amount.value = values.join(' - ');
            });

            submitBtn.addEventListener('click', function () {
                const startYear = slider.noUiSlider.get()[0];
                const endYear = slider.noUiSlider.get()[1];

                fetch('http://127.0.0.1:8008/api/found/filter', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        dates: [startYear + '-01-01', endYear + '-12-31']
                    })
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    renderData(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    alert('Error fetching data:', error);
                });

                function renderData(data) {
                    dataBody.innerHTML = ''; // Clear previous data
                    if (data.length === 0) {
                        dataBody.innerHTML = '<tr><td colspan="3">No companies found in this range.</td></tr>';
                    } else {
                        data.forEach(function (company) {
                            const row = document.createElement('tr');
                            row.innerHTML = `<td>${company['Company Name']}</td><td>${company['Founded']}</td><td>${company['GICS Sector']}</td>`;
                            dataBody.appendChild(row);
                        });
                    }
                }
            });
        });
    </script>
</body>






