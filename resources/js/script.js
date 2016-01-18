$(function() {
	
	var committeeLightbox  = {
		OFF: -1,
		CONFIRMATION: 0,
		LOADING: 1,
		CALLBACK: 2
	};
	
	var subscribeLightbox  = {
		OFF: -1,
		CONFIRMATION: 0,
		LOADING: 1,
		CALLBACK: 2
	};
	
	var committeeLightboxState = committeeLightbox.OFF;
	var subscribeLightboxState = subscribeLightbox.OFF;
	
	
	var firstNamePlanning = "";
	var lastNamePlanning = "";
	var signUpEmailPlanning = "";
	var subscribeEmail = "";
	var tagsActive = false;
	
	/*
	*	Boolean values for the volunteer role selection
	*/
	var marketingTag = false;
	var financeTag = false;
	var experienceTag = false;
	var logisticsTag = false;
	
	var rolesLeft = 4;
	var rolesSelectedWidth = 0;
	
	var ROLE_MARGIN = 2;
	
	$("#tags").css("Selections");
	
	function isValidEmailAddress(emailAddress) {
		var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
		return pattern.test(emailAddress);
	};
	
	$("#joinCommitteeButton").click(function(e) {
		
		e.preventDefault();
		$(".backButton").hide();
		$("#joinCommitteeButton").hide();
		$("#committeeFirstName").hide();
		$("#committeeFirstName").css('width', '0px');
		$("#firstStage").show();
		$(".backButton").show();
		$("#fNameContinueButton").hide();
		$("#committeeFirstName").show();
		$("#committeeFirstName").animate({width: '380px'}, 200, 'swing', function() {
			$("#fNameContinueButton").show();
		});
		
		return false;
	});
	
	function handleEmptyFirstName() {
		console.log("First Name field is empty");
	}
	
	function handleEmptyLastName() {
		console.log("Last Name field is empty");
	}
	
	function handleEmptyJoinEmail() {
		console.log("Email not entered");
	}
	
	function handleInvalidEmail() {
		console.log("Invalid email");
	}
	
	function handleEmptyJoinRoles() {
		console.log("Roles field empty");
	}
	
	function handleEmptySubscribeEmail() {
		
		console.log("Subscribe email is empty");
	}
	
	function clearPreviousCommitteeEntries() {
		
		$("#nameEntered .entry").html("");
		$("#emailEntered .entry").html("");
		$("#rolesEntered .entry").html("");
	}
	
	function clearCommitteeLightbox() {
		
		clearPreviousCommitteeEntries();
		$("#committeeLightboxContainer").hide();
		var oldState = committeeLightboxState;
		committeeLightboxState = committeeLightbox.OFF;
		
		if (oldState !== committeeLightbox.CONFIRMATION) {
				
			if (oldState === committeeLightbox.LOADING) {
				
				$(".loading").hide();
			} else if (oldState === committeeLightbox.CALLBACK) {
				
				$(".requestCallback").hide();
			}
			
			$("#committeeLightboxTitle").show();
			$("#nameEntered").show();
			$("#emailEntered").show();
			$("#rolesEntered").show();
			$("#buttons").show();
		}
	}
	
	function clearSubscribeLightbox() {
		
		$("#subscribeEmailEntered .subscribeEntry").html("");
		$("#subscribeLightboxContainer").hide();
		var oldState = subscribeLightboxState;
		subscribeLightboxState = subscribeLightbox.OFF;
		
		if (oldState !== subscribeLightbox.CONFIRMATION) {
				
			if (oldState === subscribeLightbox.LOADING) {
				
				$(".loading").hide();
			} else if (oldState === subscribeLightbox.CALLBACK) {
				
				$(".requestCallback").hide();
			}
			
			$("#subscribeLightboxTitle").show();
			$("#subscribeEmailEntered").show();
			$("#subscribeConfirmationButtons").show();
		}
	}
	
	function displayCommitteeLightbox() {
		
		$("#committeeLightboxContainer").show();
		committeeLightboxState = committeeLightbox.CONFIRMATION;
		
		var boxHeight = $("#committeeLightbox").outerHeight();
		var boxWidth = $("#committeeLightbox").outerWidth();
		var screenHeight = $(window).height();
		var screenWidth = $(window).width();
		console.log("Screen Height: " + screenHeight);
		console.log("Screen Width: " + screenWidth);
		console.log("Box height: " + boxHeight);
		console.log("Box width: " + boxWidth);
		
		var newBoxHeight = (screenHeight - boxHeight) / 2;
		var newBoxWidth = (screenWidth - boxWidth) / 2;
		
		$("#committeeLightbox").css('top', newBoxHeight + 'px');
		$("#committeeLightbox").css('left', newBoxWidth + 'px');
		
		clearPreviousCommitteeEntries();
		var fullName = firstNamePlanning + " " + lastNamePlanning;
		var finalEmail = signUpEmailPlanning;
		$("#nameEntered .entry").html(fullName);
		$("#emailEntered .entry").html(finalEmail);
		
		var rolesContent = "";
		if (marketingTag === true) {
			
			rolesContent += '<div class = "rolesContent">Marketing/Advertising</div>';
		}
		
		if (financeTag === true) {
			
			rolesContent += '<div class = "rolesContent">Finance</div>';
		}

		if (experienceTag === true) {
			
			rolesContent += '<div class = "rolesContent">Hacker Experience</div>';
		}
		
		if (logisticsTag === true) {
			
			rolesContent += '<div class = "rolesContent">Logistics</div>';
		}
		
		console.log( rolesContent);
		$("#rolesEntry").html(rolesContent);
	}
	
	function displaySubscribeLightbox() {
		
		$("#subscribeEmailEntered .subscribeEntry").html("");
		$("#subscribeLightboxContainer").show();
		
		var boxHeight = $("#subscribeLightbox").outerHeight();
		var boxWidth = $("#subscribeLightbox").outerWidth();
		var screenHeight = $(window).height();
		var screenWidth = $(window).width();
		console.log("Screen Height: " + screenHeight);
		console.log("Screen Width: " + screenWidth);
		console.log("Box height: " + boxHeight);
		console.log("Box width: " + boxWidth);
		
		var newBoxHeight = (screenHeight - boxHeight) / 2;
		var newBoxWidth = (screenWidth - boxWidth) / 2;
		
		$("#subscribeLightbox").css('top', newBoxHeight + 'px');
		$("#subscribeLightbox").css('left', newBoxWidth + 'px');
		
		$("#subscribeEmailEntered .subscribeEntry").html(subscribeEmail);
	}
	
	/*
	* The next 3 functions define assign the function of closing the commitee
	* planning lightbox to certain objects, specifically in order,
	* the close (X) button, the cancel button, and anywhere outside the lightbox
	*/
	$("#closeCommitteeLightbox").click(function(e) {
		
		e.preventDefault();
		clearCommitteeLightbox();
		return false;
	});
	
	$("#cancelCommitteeSubmission").click(function(e) {
		
		e.preventDefault();
		clearCommitteeLightbox();
		return false;
	});
	$(document).on('click', function(e) {
		
		console.log(e.target);
		if (!$(e.target).closest('#committeeLightbox').length) {
			e.preventDefault();
			clearCommitteeLightbox();
			return false;
		}
	});
	
	/*
	* The next 3 functions define assign the function of closing the subscription
	* lightbox to certain objects, specifically in order,
	* the close (X) button, the cancel button, and anywhere outside the lightbox
	*/
	$("#closeSubscribeLightbox").click(function(e) {
		
		e.preventDefault();
		clearSubscribeLightbox();
		return false;
	});
	
	$("#cancelSubscribeSubmission").click(function(e) {
		
		e.preventDefault();
		clearSubscribeLightbox();
		return false;
	});
	
	$(document).on('click', function(e) {
		
		if (!$(e.target).closest('#subscribeLightbox').length) {
			e.preventDefault();
			clearSubscribeLightbox();
			return false;
		}
	});
	
	/*
	* This function defines what happens when an actual call to the backend
	* to join the planning committee is made
	*/
	$("#submitCommitteeEntry").click(function(e) {
		
		e.preventDefault();
		
		/*
		* Transition to loading gif
		*/
		
		$("#committeeLightboxTitle").hide();
		$("#nameEntered").hide();
		$("#emailEntered").hide();
		$("#rolesEntered").hide();
		$("#buttons").hide();
		
		$("#committeeLightbox .loading").show();
		committeeLightboxState = committeeLightbox.LOADING;
		
		var boxHeight = $("#committeeLightbox").outerHeight();
		var boxWidth = $("#committeeLightbox").outerWidth();
		var screenHeight = $(window).height();
		var screenWidth = $(window).width();
		
		var newBoxHeight = (screenHeight - boxHeight) / 2;
		var newBoxWidth = (screenWidth - boxWidth) / 2;
		
		$("#committeeLightbox").css('top', newBoxHeight + 'px');
		$("#committeeLightbox").css('left', newBoxWidth + 'px');
		
		/*
		* Build and complete request
		*/
		var url = "planning";
		var interest = {
			'marketing' : marketingTag,
			'finance'	: financeTag,
			'experience' : experienceTag,
			'logistics'	: logisticsTag
		};
		
		var postData = {
			fname: firstNamePlanning,
			lname: lastNamePlanning,
			email: signUpEmailPlanning,
			interests : JSON.stringify(interest)
		};
		$.post("planning", postData, function(data, status) {
			
			$("#committeeLightbox .loading").hide();
			if (status === "success") {
				
				console.log(data);
				console.log(data.status);
				if (data.status === "success") {
					
					$("#committeeLightbox .callbackStatus h2").html("Success!");
					$("#committeeLightbox .callbackMessage p").html("You have been added to the waitlist. You will be notified by email in 1 day if you're selected.");
				} else {
					/*
					* Something was wrong with the parameters
					*/
					$("#committeeLightbox .callbackStatus h2").html("Oops!");
					$("#committeeLightbox .callbackMessage p").html(data.message);
				}
			} else {
				
				/*
				* Something is wrong with the connection
				*/
				$("#committeeLightbox .callbackStatus h2").html("Oops!");
				$("#committeeLightbox .callbackMessage p").html("Something is wrong with the connection");
			}
			
			$("#committeeLightbox .requestCallback").show();
			committeeLightboxState = committeeLightbox.CALLBACK;
			
			var boxHeight = $("#committeeLightbox").outerHeight();
			var boxWidth = $("#committeeLightbox").outerWidth();
			var screenHeight = $(window).height();
			var screenWidth = $(window).width();
			
			var newBoxHeight = (screenHeight - boxHeight) / 2;
			var newBoxWidth = (screenWidth - boxWidth) / 2;
			
			$("#committeeLightbox").css('top', newBoxHeight + 'px');
			$("#committeeLightbox").css('left', newBoxWidth + 'px');
		}, 'json');
		return false;
	});
	
	/*
	* This function defines what happens when an actual call to the backend
	* to join the planning committee is made
	*/
	$("#submitSubscribeEntry").click(function(e) {
		
		e.preventDefault();
		
		/*
		* Transition to loading gif
		*/
		
		$("#subscribeLightboxTitle").hide();
		$("#subscribeEmailEntered").hide();
		$("#subscribeConfirmationButtons").hide();
		
		$("#subscribeLightbox .loading").show();
		subscribeLightboxState = subscribeLightbox.LOADING;
		
		var boxHeight = $("#subscribeLightbox").outerHeight();
		var boxWidth = $("#subscribeLightbox").outerWidth();
		var screenHeight = $(window).height();
		var screenWidth = $(window).width();
		
		var newBoxHeight = (screenHeight - boxHeight) / 2;
		var newBoxWidth = (screenWidth - boxWidth) / 2;
		
		$("#subscribeLightbox").css('top', newBoxHeight + 'px');
		$("#subscribeLightbox").css('left', newBoxWidth + 'px');
		
		var postData = {
			email: subscribeEmail,
		};
		$.post("subscribe", postData, function(data, status) {
			
			$("#subscribeLightbox .loading").hide();
			if (status === "success") {
				console.log(data);
				console.log(data.status);
				if (data.status === "success") {
					
					$("#subscribeLightbox .callbackStatus h2").html("Success!");
					$("#subscribeLightbox .callbackMessage p").html("You will be notified of any developments regarding the event. Thanks!");
				} else {
					/*
					* Something was wrong with the parameters
					*/
					$("#subscribeLightbox .callbackStatus h2").html("Oops!");
					$("#subscribeLightbox .callbackMessage p").html(data.message);
				}
				
				$("#subscribeLightbox .requestCallback").show();
				subscribeLightboxState = subscribeLightbox.CALLBACK;
				
				var boxHeight = $("#subscribeLightbox").outerHeight();
				var boxWidth = $("#subscribeLightbox").outerWidth();
				var screenHeight = $(window).height();
				var screenWidth = $(window).width();
				
				var newBoxHeight = (screenHeight - boxHeight) / 2;
				var newBoxWidth = (screenWidth - boxWidth) / 2;
				
				$("#subscribeLightbox").css('top', newBoxHeight + 'px');
				$("#subscribeLightbox").css('left', newBoxWidth + 'px');
			}
		}, 'json');
		return false;
	});
	
	$("#fNameContinueButton").click(function (e) {

		e.preventDefault();
		
		var firstName = $("#committeeFirstName").val();
		if (firstName.length === 0) {
			
			handleEmptyFirstName();
			return false;
		}
		
		/*
		* Transition to second stage
		*/
		firstNamePlanning = firstName;
		$("#firstStage").hide();
		$("#secondStage").show();
		
		return false;
	});
	
	$("#lNameContinueButton").click(function (e) {
		
		e.preventDefault();
		
		var lastName = $("#committeeLastName").val();
		if (lastName.length === 0) {
			
			handleEmptyLastName();
			return false;
		}
		
		/*
		* Transition to second stage
		*/
		lastNamePlanning = lastName;
		$("#secondStage").hide();
		$("#thirdStage").show();
		
		return false;
	});
	
	$("#committeeContinueButton").click(function(e) {
		
		e.preventDefault();
		
		var email = $("#committeeEmail").val();
		if (email.length === 0) {
			
			handleEmptyJoinEmail();
			return false;
		}
		
		if (isValidEmailAddress(email) === false) {
			
			handleInvalidEmail();
			return false;
		}
		
		signUpEmailPlanning = email;
		/*
		* Transition to Role Selection
		*/
		signUpEmail = email;
		$("#thirdStage").hide();
		$("#fourthStage").show();
		
		return false;
	});
	
	$("#rolesContinueButton").click(function(e) {
		
		e.preventDefault();
		
		var email = $("#committeeEmail").val();
		if (rolesLeft === 4) {
			
			handleEmptyJoinRoles();
			return false;
		}
		
		if (isValidEmailAddress(email) === false) {
			
			handleInvalidEmail();
			return false;
		}
		
		/*
		* Transition to Role Selection
		*/
		signUpEmail = email;
		displayCommitteeLightbox();
		
		$("#roles").fadeOut();
		$("#rolesDropdown").fadeIn();
		
		return false;
	});
	
	$("#committeeRoles").focus(function() {
		
		$("#committeeRoles").css('border-radius', '4px 0 0 0');
		$("#roles").show();
		return false;
	});
	
	$(".addRole").click(function() {
		var id = $(this).attr("id");
		var tagText = null;
		var associative = null;
		
		if (id === "marketingAdd") {
			
			tagText = "Marketing";
			associative = "marketing";
			marketingTag = true;
		} else if (id === "financeAdd") {
			
			console.log("Adding finance");
			tagText = "Finance";
			associative = "finance";
			financeTag = true;
			console.log("finance tag: " + financeTag);
		} else if (id === "experienceAdd") {
			
			tagText = "Hacker Experience";
			associative = "experience";
			experienceTag = true;
		} else if (id === "logisticsAdd") {
			
			tagText = "Logistics";
			associative = "logistics";
			logisticsTag = true;
		} else {
			
			return false;
		}
		
		console.log(tagsActive);
		var operationRoom = $("#committeeRoles");
		
		var wrapper = null;
		if (tagsActive === false) {
			wrapper = $("<div class='tags-wrapper'><ul></ul></div");
			operationRoom.after(wrapper);
			operationRoom.hide();
			//wrapper.append(operationRoom);
			wrapper.niceScroll({ autohidemode: true });
			tagsActive = true;
		}
		
		wrapper = $(".tags-wrapper");
		
		/* Code borrowedd from the original tag plugin */
		/*var all = [];
		var list = $("#committeeRoles").closest(".tags-wrapper").find("li.tag span").each(function() {
			all.push($(this).text());
		});
		all = all.join(",");
		all += "here";
		$("#committeeRoles").val(all);*/
		
		/*$wrapper = $(".tags_wrapper");
		console.log($wrapper);
		$ul = $wrapper.find("ul");
		console.log($ul);
		
		$ul.append("<li class='tag'><span>"+"Here"+"</span><a href='#'>x</a></li>");
		
		// add input
		$ul.append("<li class='tags-input'><input type='text' class='tags-secret'/></li>");
		// add the old element
		
		// size the text
		var $input = $ul.find("input"),
		size = parseInt($input.css("font-size"))-4;*/
		var ul = wrapper.find("ul");
		var li = $("<li class='tag' associative = '" + associative +  "'><span>" + tagText + "</span><a href='#' class = 'deleteTag'>x</a></li>");
		li.css('left', rolesSelectedWidth + 'px');
		ul.append(li);
		var width = li.outerWidth();
		rolesSelectedWidth += width + ROLE_MARGIN;
		$(this).parent().hide();
		
		rolesLeft--;
		console.log(rolesLeft);
		if (rolesLeft === 0) {
			//$(".tags-wrapper").css('border-radius', '4px 0 0 4px');
			$("#emptyRoles p").show();
		}
	});
	
	$('body').on('click', '.deleteTag', function() {
		
		var parent = $(this).parent();
		var associative = parent.attr("associative");
		
		/*
		* Reshow option in dropdown
		*/
		if (associative === "marketing") {
			
			marketingTag = false;
			$("#marketing").show();
		} else if (associative === "finance") {
			
			financeTag = false;
			$("#finance").show();
		} else if (associative === "experience") {
			
			experienceTag = false;
			$("#experience").show();
		} else if (associative === "logistics") {
			
			logisticsTag = false;
			$("#logistics").show();
		}
		
		if (rolesLeft === 0) {
			
			$(".tags-wrapper").css('border-radius', '4px 0 0 0');
			$("#emptyRoles p").hide();
		}
		
		rolesLeft++;
		
		if (rolesLeft === 4) {
			
			$(".tags-wrapper ul").remove();
			var committeeRoles = $(".tags-wrapper #committeeRoles").clone();
			$(".tags-wrapper #committeeRoles").remove();
			
			$("#rolesContinueButton").hide();
			$(".tags-wrapper").hide();
			$("#committeeRoles").show();
			$("#rolesContinueButton").show();
			
			tagsActive = false;
			rolesSelectedWidth = 0;
		}

		/*
		* Delete physical tag and shift the elements after it
		*/

		var parent = $(this).parent();
		var removeWidth = parent.outerWidth() + ROLE_MARGIN;
		var grannie = parent.parent();
		var nextRoles = parent.nextAll("li");
		console.log(nextRoles);
		$(this).parent().remove();
		rolesSelectedWidth -= removeWidth;
		
		nextRoles.each(function() {
			var left = $(this).css("left");
			var left = left.substring(0, left.length - 2) - removeWidth;
			console.log(left);
			$(this).css("left", left + "px");
		});
		
		
		return false;
	});
	
	$(".backButton").click(function() {
		
		var parentId = $(this).parent().attr("id");
		
		if (parentId === "firstStage") {
			
			$("#firstStage").hide();
			$("#joinCommitteeButton").fadeIn(200, 'swing');
			return false;
		} else if (parentId === "secondStage") {
			
			$("#secondStage").hide();
			$("#firstStage").fadeIn(200, 'swing');
			return false;
		} else if (parentId === "thirdStage"){
			
			$("#thirdStage").hide();
			$("#secondStage").fadeIn(200, 'swing');
			return false;
		} else if (parentId === "fourthStage") {
			
			console.log("Clicked here");
			$("#fourthStage").hide();
			$("#roles").hide();
			$("#rolesDropdown").show();
			$("#thirdStage").fadeIn(200, 'swing');
			
			return false;
		} else {
			
			return false;
		}
	});
	
	$("#resetRoles").click(function(e) {
		
		e.preventDefault();
		
		marketingTag = false;
		financeTag = false;
		experienceTag = false;
		logisticsTag = false;
		
		$(".tags-wrapper ul").remove();
		var committeeRoles = $(".tags-wrapper #committeeRoles").clone();
		$(".tags-wrapper #committeeRoles").remove();
		
		$("#rolesContinueButton").hide();
		$(".tags-wrapper").hide();
		$("#committeeRoles").show();
		$("#rolesContinueButton").show();
		
		tagsActive = false;
		rolesSelectedWidth = 0;
		/*
		* Repopulate the roles
		*/
		$("#roles").children().each(function() {
			$(this).show();
		});
		rolesLeft = 4;
		$("#emptyRoles p").hide();
		
		return false;
	});
	
	$("#rolesClose").click(function(e) {
		
		e.preventDefault();
		
		$("#roles").hide();
		$("#rolesDropdown").fadeIn();
		return false;
	});
	
	$("#rolesDropdown").click(function(e){ 
	
		e.preventDefault();
		
		$("#rolesDropdown").fadeOut();
		$("#roles").show();
		
		return false;
	});
	
	$("#subscribeButton").click(function (e) {
		
		e.preventDefault();
		
		var subscribeEntry = $("#interestEmail").val();
		if (subscribeEntry.length === 0) {
			
			handleEmptySubscribeEmail();
			return false;
		}
		
		if (isValidEmailAddress(subscribeEntry) === false) {
			
			handleInvalidEmail();
			return false;
		}
		
		subscribeEmail = subscribeEntry;
		displaySubscribeLightbox();
		
		
		return false;
	});
});