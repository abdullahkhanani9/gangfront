---
permalink: /ml
layout: nav_ml
---
<html>
<head>
	<title>Slide Navbar</title>
	<link rel="stylesheet" type="text/css" href="ml-styles.css">
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet">
</head>
<body>
	<div class="main">  	
		<input type="checkbox" id="chk" aria-hidden="true">
			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Titanic Survial predictor</label>
					<p id="result" for="chk" aria-hidden="true"></p>
					<input id ="Name"  placeholder="Name" required="">
					<select id="class" required>
					    <option disabled selected>Passenger class</option>
						<option value="1st">1st</option>
						<option value="2nd">2nd</option>
						<option value="3rd">3rd</option>
					</select>
                    <input id="sex" placeholder="Sex" >
                    <input id="age" placeholder="Age">
                    <input id="price" placeholder="Ticket Price">
                    <select id="embark">
						<option disabled selected>Embark</option>
						<option value="C">Cherbourg</option>
						<option value="Q">Queenstown</option>
						<option value="S">Southampton</option>
					</select>
                    <input id="sibsp" placeholder="# of sibiling/spouses aboard" >
                    <input id="parch" placeholder="# of parents/children aboard" >
					<select id="alone" >
					    <option disabled selected>Are you traveling alone?</option>
						<option value="True">True</option>
						<option value="False">False</option>
					</select>
					<button onClick= "mltitanic()">Predict</button>
				</form>
			</div>
			<div class="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required="">
					<input type="password" name="pswd" placeholder="Password" required="">
					<button>Login</button>
				</form>
			</div>
	</div>
</body>
</html>
<script>
	function mltitanic(){
		var dom = document.getElementById('result')
		var name = document.getElementById('Name').value
		var pclass = document.getElementById('class').value
		var sex = document.getElementById('sex').value
		var age = document.getElementById('age').value
		var fare = document.getElementById('price').value
		var embarked = document.getElementById('embark').value
		var sibsp = document.getElementById('sibsp').value
		var parch = document.getElementById('parch').value
		var alone = document.getElementById('alone').value
		passenger = {
			name: name,
			pclass: pclass,
			sex: sex,
			age: age,
			sibsp: sibsp,
			parch: parch,
			fare: fare,
			embarked: embarked,
			alone: alone
		}
		console.log(passenger)
		url = ''
		var json = JSON.stringify(passenger)
		console.log(json)
		const authOptions = {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: json,
               credentials: 'include'
           }
		fetch(url,authOptions)
			.then(responce => {
				if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
			})
			.then(data => {
                console.log('success', data);
			})
			.catch(error => {
				console.error('error', error);
				tableBody.innerHTML = '';
				var newdata = dom.innerHTML("hi")
				tableBody.appendChild(newdata);
			})
	}
</script>