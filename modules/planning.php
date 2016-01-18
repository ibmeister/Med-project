<?php

function writeToFile($fname, $lname, $email, $availableInterests) {
	
	$file = "committee.csv";
	$newLine = $fname . "," . $lname . "," . $email;
	
	foreach($availableInterests as $key => $value) {
		if ($value)
			$newLine .= ",YES";
		else
			$newLine .= ",NO";
	}
	
	$newLine .= "\n";
	file_put_contents($file, $newLine, FILE_APPEND | LOCK_EX);
}

$result = array();
if (isset($_POST['email']) && isset($_POST['interests'])
	&& isset($_POST['fname']) && isset($_POST['lname'])) {
	$result['status'] = "failure";
	$safeEmail = true;
	$safeInterests = true;
	
	
	/*
	* Validate the email address
	*/
	if(!filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
		$safeEmail = true;
	}
	
	/*
	* Validate the interests
	*/
	$availableInterests = array(
		'marketing' => false,
		'finance'	=> false,
		'experience'=> false,
		'logistics'	=> false
	);
	
	$decoded = json_decode($_POST['interests']);
	foreach ($decoded as $key => $value) {
		if (isset($availableInterests[$key]) && is_bool($value)) {
			$availableInterests[$key] = (bool)$value;
		} else {
			$safeInterests = false;
		}
	}
	
	/*
	* Handle the case of either error
	*/
	if (!$safeInterests || !$safeEmail) {
		
		$errorMessage = "";
		if (!$safeEmail) {
			$errorMessage = "Invalid email specified";
		}
		
		if (!$safeInterests) {
			if (!$safeEmail)
				$errorMessage += " and ";
			$errorMessage += "Error in indicated interests";
		}
		
		$result['status'] = "failure";
		$result['message'] = $errorMessage;
		
		echo json_encode($result);
		die;
	}

	writeToFile($_POST['fname'], $_POST['lname'], $_POST['email'], $availableInterests);
	$result['status'] = "success";
	echo json_encode($result);
	die;
} else {

	$result['status'] = "failure";
	$result['message'] = "Incomplete post parameters";
	
	echo json_encode($result);
	die;
}
