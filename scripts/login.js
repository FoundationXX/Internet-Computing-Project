
(function() {
function loginSubmit(event) {

	var username = $('#user').val(); // get username
    var password = $('#pass').val(); // get password
	var message = $('#messageReturn').val();
	var user;
	var queryString;
	event.preventDefault(); //Prevents the form from submitting itself using the action attribute
	queryString = "http://api.nytimes.com/svc/elections/us/v3/finances/2014/seats/"+"MN"+".json?api-key=047e26251fa1a87be9eec9d2acec5bac:9:69971691";


		$.ajax({
		// the URL for the request
		url: queryString,
	 
		// whether this is a POST or GET request
		type: "GET",
		
		// Whether to cache the result. 
		cache: false,
	 
		// the type of data we expect back
		dataType : "jsonp", // should contain boolean value to indicate whether there is a match; then check if user is coach or student

		success: function( json ) {
			alert('login information has a match');
			//user = json.userType;
			//window.location.assign(user); //navigate to either a student or a coach page
			
			
			
		},
	 
		// code to run if the request fails; the raw request and
		// status codes are passed to the function
		error: function( xhr, status, errorThrown ) {
			alert( "Sorry, there was a problem!" );
			console.log( "Error: " + errorThrown );
			console.log( "Status: " + status );
			window.location.assign('http://www.macalester.edu');
		},
	 
		// code to run regardless of success or failure
		complete: function( xhr, status ) {
			alert("callback evaluation complete");
			
		}
	});
	
	
	
	
} // end the handleSubmit

// This is jquery's way of saying document.addEventListener("DOMContentLoaded", function(){})
// See http://learn.jquery.com/using-jquery-core/document-ready/ for more description
$(document).ready(function() {
	var messageBox = $("#messageBox");
	var currentForm = $(".login_form");
	messageBox.text("Log In");
	$(".login_form").submit(loginSubmit);
	var currentButton = $("#login");
	$(".registration_form").hide();
	$(".passwordReset_form").hide();

	
	$("#login").click(function(){
		currentForm.hide();
		$(".login_form").show();
		currentForm = $(".login_form");
		
		currentButton.css("background-color", "white");
		$(this).css("background-color", "orange")
		currentButton =  $("#login");
		messageBox.text("Log In");
		
	
	});
	
	$("#register").click(function(){
		currentForm.hide();
		$(".registration_form").show();
		currentForm = $(".registration_form");
		currentButton.css("background-color", "white");
		$(this).css("background-color", "orange")
		currentButton =  $("#register");
		messageBox.text("Register New Account");
	
	});
	$("#passwordReset").click(function(){
		currentForm.hide();
		$(".passwordReset_form").show();
		currentForm = $(".passwordReset_form");
		currentButton.css("background-color", "white");
		$(this).css("background-color", "orange")
		currentButton =  $("#passwordReset");
		messageBox.text("Reset Password");
	});

	
}); 

}()); // Close and execute the module function