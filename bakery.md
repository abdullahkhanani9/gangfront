---
permalink: /bakery
layout: nav_ml
---

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bakery ML</title>
        <link rel="stylesheet" href="bakery-style.css"> 
    </head>
    <body>
        <div class="container">
            <form class="signUp">
                <h3>Bakery Ml</h3>
                <p id="resultx" aria-hidden="true"></p>
                    <select id="TimeOfDay">
                        <option disabled selected>Time of Day</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                    </select> 
                    <select id="DayOfWeek">
                        <option disabled selected>Day of Week</option>
                        <option value="Weekend">Weekend</option>
                        <option value="Weekday">Weekday</option>
                    </select>
                    <input id="time" type="text" placeholder="Time" onfocus="(this.type='time')">
                <button class="form-btn sx log-in" type="button">Switch</button>
                <button class="form-btn dx"  type="button"  onclick="extra()">Predict</button>
            </form>
            <form class="signIn">
                <h3>
                    No Coffee Ml 
                </h3>
                <p id="resultx1" aria-hidden="true"></p>
                    <p id="resultx" aria-hidden="true"></p>
                    <select id="TimeOfDay1">
                        <option disabled selected>Time of Day</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                    </select> 
                    <select id="DayOfWeek1">
                        <option disabled selected>Day of Week</option>
                        <option value="Weekend">Weekend</option>
                        <option value="Weekday">Weekday</option>
                    </select>
                    <input id="time1" type="text" placeholder="Time" onfocus="(this.type='time')">
                <button class="form-btn sx back" type="button">Back</button>
                <button class="form-btn dx"  type="button"  onclick="extrax()">Predict</button>
            </form>
        </div>
    </body>
</html>
<script>
    document.querySelector(".log-in").addEventListener("click", function() {
        document.querySelector(".signIn").classList.add("active-dx");
        document.querySelector(".signUp").classList.add("inactive-sx");
        document.querySelector(".signUp").classList.remove("active-sx");
        document.querySelector(".signIn").classList.remove("inactive-dx");
    });
    document.querySelector(".back").addEventListener("click", function() {
        document.querySelector(".signUp").classList.add("active-sx");
        document.querySelector(".signIn").classList.add("inactive-dx");
        document.querySelector(".signIn").classList.remove("active-dx");
        document.querySelector(".signUp").classList.remove("inactive-sx");
    });
</script>
<script>
    function extra() {
            var dom = document.getElementById('resultx');
            var TOD = document.getElementById('TimeOfDay').value;
            var DOW = document.getElementById('DayOfWeek').value;
            var time = document.getElementById('time');
            var enteredTime = time.value + ":00"
            var payload = {
                Time: enteredTime,
                DayPart: TOD,
                DayType: DOW,
            };
            var url = 'http://127.0.0.1:8086/api/food/predict'
            var json = JSON.stringify(payload);
            console.log(json)
            const authOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: json,
                credentials: 'include'
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
                    dom.innerText = "Predicted Item: " + data["item"]
                // Display in alert
                    alert("Predicted Item: " + data["item"]);
                })                
                .catch(error => {
                    console.error('error', error);
                    // Handle error
                    dom.innerText = "Error occurred";
                });
        }
    function extrax() {
            var dom = document.getElementById('resultx1');
            var TOD = document.getElementById('TimeOfDay1').value;
            var DOW = document.getElementById('DayOfWeek1').value;
            var time = document.getElementById('time1');
            var enteredTime = time.value + ":00"
            var payload = {
                Time: enteredTime,
                DayPart: TOD,
                DayType: DOW,
            };
            var url = 'http://127.0.0.1:8086/api/bakery/predict'
            var json = JSON.stringify(payload);
            console.log(json)
            const authOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: json,
                credentials: 'include'
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
                    dom.innerText = "Predicted Item: " + data["item"]
                // Display in alert
                    alert("Predicted Item: " + data["item"]);
                })                
                .catch(error => {
                    console.error('error', error);
                    // Handle error
                    dom.innerText = "Error occurred";
                });
        }
</script>