<?php
function writeToFile($email) {
	
	$file = "subscriptions.csv";
	$newLine = $email;
	
	$newLine .= "\n";
	file_put_contents($file, $newLine, FILE_APPEND | LOCK_EX);
}

$result = array();
if (isset($_POST['email'])) {
	$result['status'] = "failure";
	$safeEmail = true;
	
	/*
	* Validate the email address
	*/
	if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$safeEmail = true;
	}
	
	/*
	* Handle the case of either error
	*/
	if (!$safeEmail) {
		
		$errorMessage = "Invalid email specified";
		
		$result['status'] = "failure";
		$result['message'] = $errorMessage;
		
		echo json_encode($result);
		die;
	}

	writeToFile($_POST['email']);
	$result['status'] = "success";
	echo json_encode($result);
	die;
} else {

	$result['status'] = "failure";
	$result['message'] = "Incomplete post parameters";
	
	echo json_encode($result);
	die;
}
