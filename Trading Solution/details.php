<?php
if(isset($_POST['submit'])){
$email = $_POST['email'] ;
// $lname = $_POST['lastname'] ;
// $num = $_POST['phone_number'] ;
// $email = $_POST['email'] ;
// $enq = $_POST['enquiry'] ;
$to = "info@earningfx.com";
$subject = "Client Email for Subscribe";
// $headers = "From: $email\n";
$message = 'Email: '.$email ;
// $usersubject = "Thank You";
// $userheaders = "From: you@youremailaddress.com\n";
// $usermessage = "Thank you for subscribing to our mailing list.";
mail($to,$subject,$message);
//mail($user,$usersubject,$usermessage,$userheaders);
// echo "<h2>Message Alert</h2>";
// echo "You have been subscribe Successfully";
header("Location:index.html");
exit;
}
?>
