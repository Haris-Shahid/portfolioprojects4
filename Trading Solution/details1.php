<?php

if(isset($_POST['submitdetails'])){
    $name = $_POST['name'] ;
    $email = $_POST['email'] ;
    $num = $_POST['phone'] ;
    $mess = $_POST['message'] ;
    $to = "info@earningfx.com";
    $subject = "Client details form Contact Form";
  
    $message = 'Name: '.$name."\n"."Email: ".$email."\n"."Phone Number: ".$num."\n"."message: ".$mess ;
    // $usersubject = "Thank You";
    // $userheaders = "From: you@youremailaddress.com\n";
    // $usermessage = "Thank you for subscribing to our mailing list.";
    mail($to,$subject,$message);
    //mail($user,$usersubject,$usermessage,$userheaders);
    // echo "<h2>Message Alert</h2>";
    // echo "your Details is successfully Submitted";
    header("Location:contactus.html");
    exit;
}
?>