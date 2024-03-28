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
                <h3>Create Your Account</h3>
                <p>Just enter your email address</br>
        and your password for join.
                </p>
                    <select id="TimeOfDay">
                        <option disabled selected>Time of Day</option>
                        <option value="Morning">Morning</option>
                        <option value="Afternoon">Afternoon</option>
                    </select>
                    </br>
                    <select id="DayOfWeek">
                        <option disabled selected>Day of Week</option>
                        <option value="Weekend">Weekend</option>
                        <option value="Weekday">Weekday</option>
                    </select>
                    </br>
                    <input id="time" type="text" placeholder="Time" onfocus="(this.type='time')">
                    <button type="button" onclick="extra()">Predict</button>
                <button class="form-btn sx log-in" type="button">Log In</button>
                <button class="form-btn dx" type="submit">Sign Up</button>
            </form>
            <form class="signIn">
                <h3>
                    WelcomeBack !
                </h3>
                <input type="email" placeholder="Insert eMail" autocomplete='off' reqired />
                <input type="password" placeholder="Insert Password" reqired />
                <button class="form-btn sx back" type="button">Back</button>
                <button class="form-btn dx" type="submit">Log In</button>
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