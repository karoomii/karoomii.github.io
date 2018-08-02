<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$telephone = $_POST['telephone'];

$email_from = 'kareem.sabri23@gmail.com';

$email_subject = "New Form Submission";

$email_body = "User Name: $name\n".
				"User Email: $visitor_email\n".
					"User Telephone: $telephone\n".
						"User Message: $message\n".
						

$to = "kareem.sabri23@gmail.com";

$headers = "From: $email_from \r\n";

$headers = "Reply-To: $visitor_email \r\n";

$headers = "Telephone: $telephone \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: contact.html");

?>