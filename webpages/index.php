<!DOCTYPE html>
<html lang="en">

<head>
</head>
	<meta charset="utf-8">
	<title>Med Proj</title>
	<meta name = "description" content = "PantherHacks App Contest Top Hackathon">
	
	<!-- Latest compiled and minified CSS -->
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">

	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" integrity="sha384-aUGj/X2zp5rLCbBxumKTCw2Z50WgIr1vs/PFN4praOTvYXWlVyh2UtNUU0KAUhAX" crossorigin="anonymous">
	
	<link rel="stylesheet" href="resources/css/style.css">
	<link rel="stylesheet" href="resources/css/tags.css">
<body>


	<div id = "committeeLightboxContainer">
		
		<div id = "committeeLightbox">
			<div id = "committeeLightboxTitle">
				<h2>Your Details</h2>
			</div>
			<div id = "nameEntered" class = "committeeEntry">
				<div class = "labelContainer">
					<label id = "fullname">Full Name:</label>
				</div>
				<p class = "entry"></p>
			</div>
			<div id = "emailEntered" class = "committeeEntry">
				<div class = "labelContainer">
					<label id = "fullname">Email:</label>
				</div>
				<p class = "entry"></p>
			</div>
			<div id = "rolesEntered" class = "committeeEntry">
				<div class = "labelContainer">
					<label id = "fullname">Roles selected:</label>
				</div>
				<div class = "entry" id = "rolesEntry"></div>
				
			</div>
			<div id = "buttons" class = "committeeEntry">
				<button id = "submitCommitteeEntry" type = "button">
					Join Committee
				</button>
				<button id = "cancelCommitteeSubmission" type = "button">
					Cancel
				</button>
			</div>
			<a href = "#" class = "closeXButton" id = "closeCommitteeLightbox">X</a>
			<div class = "loading">
				<img src = "resources/gif/loading.GIF" class = "loadingGif" id = "committeeGif" />
			</div>
			<div class = "requestCallback">
				<div class = "callbackStatus">
					<h2></h2>
				</div>
				<div class="callbackMessage">
					<p></p>
				</div>
			</div>
		</div>
	</div>
	
	<div id = "subscribeLightboxContainer" class = "box">
		<div id = "subscribeLightbox">
			<div id = "subscribeLightboxTitle">
				<h2>Confirm your email</h2>
			</div>
			<div id = "subscribeEmailEntered" class = "committeeEntry">
				<p class = "subscribeEntry"></p>
			</div>
			<a href = "#" class = "closeXButton" id = "closeSubscribeLightbox">X</a>
			
			<div id = "subscribeConfirmationButtons" class = "committeeEntry">
				<button id = "submitSubscribeEntry" type = "button">
					Yes, my details are correct
				</button>
				<button id = "cancelSubscribeSubmission" type = "button">
					Cancel
				</button>
			</div>
			
			<div class = "loading">
				<img src = "resources/gif/loading.GIF" class = "loadingGif" id = "subscribeGif" />
			</div>
			<div class = "requestCallback">
				<div class = "callbackStatus">
					<h2></h2>
				</div>
				<div class="callbackMessage">
					<p></p>
				</div>
			</div>
		</div>
	</div>
	<!-- Navbar -->
	<nav class = "navbar navbar-inverse navbar-fixed-top" id = "myNavBar">
		<!-- Start of Nav container -->
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				
				<a href="#" class="navbar-brand"><img src="resources/icons/logo.png" /></a>
			</div>
			<div class="collapse navbar-collapse" id = "navbar-collapse">
				<ul class="nav navbar-nav">
					<li><a href="#home">Home</a></li>
					<li><a href="#about">About</a></li>
					<li><a href="#contact">Contact Us</a></li>
				</ul>
			</div>
		</div><!-- End of Nav container -->
	</nav>
	<!-- End Navbar -->
	
	<!-- Jumbotron -->
	<div class = "jumbotron" id = "homeJumbotron">
		<!-- Start of Jumbotron container -->
		<div class = "container" id = "jumbotronContainer">
			<!-- The text contained in jumbotron -->
			<div id = "jumboWritings">
				<h1>PantherHacks</h1>
				<div id = "jumboDescription">
					<p>Be part of a celebration of <span class = "bold">Creativity</span> and <span class="bold">Innovation</p>
					<p>The <span class = "bold">biggest Hackathon</span> in the <span class = "bold">Space Coast</span>
				</div>
				<div id = "joinCommittee">
					<div id = "firstStage">
						<img src = "resources/icons/back.png" class = "backButton" />
						<input type = "text" id = "committeeFirstName" placeholder="Enter your First Name" />
						<button id = "fNameContinueButton" type = "button">
							Continue
						</button>
					</div>
					<div id = "secondStage">
						<img src = "resources/icons/back.png" class = "backButton" />
						<input type = "text" id = "committeeLastName" placeholder="Enter your Last Name" />
						<button id = "lNameContinueButton" type = "button">
							Continue
						</button>
					</div>
					<div id = "thirdStage">
						<img src = "resources/icons/back.png" class = "backButton" />
						<input type = "email" id = "committeeEmail" placeholder="youremail@my.school.edu" />
						<button id = "committeeContinueButton" type = "button">
							Continue
						</button>
					</div>
					<div id = "fourthStage">
						<img src = "resources/icons/back.png" class = "backButton" />
						<input type = "text" id = "committeeRoles" placeholder="What roles would you prefer?" readonly />
						<button id = "rolesContinueButton" type = "button">
							Finish
						</button>
						<div id = "roles">
							<div id = "marketing">
								<p class = "roleDescription">Advertising/Marketing</p>
								<img src = "resources/icons/add.png" class = "addRole" id = "marketingAdd" />
							</div>
							<div id = "finance">
								<p class = "roleDescription">Finance</p>
								<img src = "resources/icons/add.png" class = "addRole" id = "financeAdd" />
							</div>
							<div id = "experience">
								<p class = "roleDescription">Hacker Experience</p>
								<img src = "resources/icons/add.png" class = "addRole" id = "experienceAdd" />
							</div>
							<div id = "logistics">
								<p class = "roleDescription">Logistics</p>
								<img src = "resources/icons/add.png" class = "addRole" id = "logisticsAdd" />
							</div>
							<div id = "emptyRoles">
								<p class = "roleDescription">All roles selected</p>
								<a href = "#" id = "resetRoles">Reset</a>
							</div>
							<a href = "#" id = "rolesClose">X</a>
						</div>
						<div id = "leftPadding"></div>
						<div id = "rightPadding">
							<a href = "#" id = "rolesDropdown">
								<img src = "resources/icons/drop.png" />
							</a>
						</div>
					</div>
					<button id = "joinCommitteeButton" type="button">
						Join the Planning Committee
					</button>
				</div>
			</div>
			<!-- End of  text -->
		</div>
		<!-- End of Jumbotron container -->
		<!-- The little transparent black div under the jumbotron -->
		<div id = "endTransparency"></div>
	</div>
	<!-- End of Jumbotron -->
	
	<!-- About Section -->
	<div class = "container" id = "about">
		<div id = "aboutIcon">
			<img src = "resources/icons/loading_sand.png" />
		</div>
		<div id = "aboutDescription">
			<div id = "aboutHeader">
				<h2>Full Details Coming Soon</h2>
			</div>
			<div id = "aboutText">
				<p id = "fullAbout">
					This year's event will be hosted on Florida Institute of Technology campus. We have an amazing list of events planned out
					to make this the ultimate hackathon experience. Think you have what it takes to make our event even more
					kick-ass? Click the link above to join the planning committee.
				</p>
				
				<div id = "indicateInterest">
					<p id = "interestQuery">Interested in Competing?</p>
					<form id = "interestSubmit">
						<input type = "email" id = "interestEmail" placeholder="youremail@my.school.edu" />
						<button type="submit" id = "subscribeButton">Keep Me Updated <small>(No Spam, I promise)</small></button>
					</form>
				</div>
			</div>
		</div>
	</div>
	
	<footer class = "container">
		<div id = "copyright">
			<p>&copy; PantherHacks 2016</p>
		</div>
	</div>
	
	<!-- JQuery Library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<!-- Latest compiled and minified JavaScript -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>
	<!-- Custom javascript file -->
	<script src="resources/js/script.js"></script>
	<script src="resources/js/tags.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.nicescroll/3.6.0/jquery.nicescroll.min.js"></script>
</body>

</html>