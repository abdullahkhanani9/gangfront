---
comments: True
layout: base
title: Book Recommendation 
description: Gives users suggested books to read
courses: {'compsci': {'week': 4}}
type: hacks
permalink: /bookreccom
---


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Find a book, perfect for you!</title>
    <style>
        body, input, button, div, h3, p, a, h1 {
            font-family: 'Times New Roman', Times, serif;
        }
        body {
            margin: 50px;
        }
        .container {
            display: flex;
            align-items: center;
        }
        .book-search {
            margin-left: 20px;
        }
        .book-card {
            border: 1px solid #ddd;
            margin-bottom: 20px;
            padding: 10px;
        }
        .book-card img {
            max-width: 100px;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>Book Recommendation System</h1> 
    <!-- Input box for favorite book -->
    <div>
        <input type="text" id="favoriteBookInput" placeholder="Enter your favorite book">
        <button onclick="getRecommendation()">Get Recommendation</button>
    </div>
    <!-- Display recommended books here -->
    <div id="recommendationResults">
        <!-- Recommended books will be displayed here -->
    </div>

<script>
    async function getRecommendation() {
        const favoriteBookInput = document.getElementById("favoriteBookInput").value.trim();
        if (favoriteBookInput === "") {
            alert("Please enter your favorite book.");
            return;
        }
        const url = '/get_recommendations';
        const data = { favorite_book: favoriteBookInput };
        const recommendationResults = document.getElementById("recommendationResults");
        recommendationResults.innerHTML = ''; // Clear previous results
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const recommendations = await response.json();
            if (recommendations && recommendations.length > 0) {
                displayRecommendations(recommendations);
            } else {
                recommendationResults.innerHTML = 'No recommendations found.';
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            recommendationResults.innerHTML = 'An error occurred while fetching data.';
        }
    }

    function displayRecommendations(recommendations) {
        const recommendationResults = document.getElementById("recommendationResults");
        recommendations.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book-card");
            bookElement.innerHTML = `
                <h3>${escapeHTML(book[1])}</h3>
                <img src="${book[2] || 'No image available'}" alt="${escapeHTML(book[1])}">
                <p>Author: ${book[3] || 'Unknown'}</p>
                <p>Rating: ${book[4] || 'Not available'}</p>
                <p>Plot: ${book[5] || 'Not available'}</p>
                <a href="${book[6]}" target="_blank">More info</a>
            `;
            recommendationResults.appendChild(bookElement);
        });
    }

    function escapeHTML(html) {
        return html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
</script>
</body>
</html>
