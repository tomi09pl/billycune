<?php

header ("Access-Control-Allow-Origin: *");
header ("Access-Control-Allow-Headers: origin, x-requested-with, content-type");
header ("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// get refferer server
if($_SERVER['HTTP_REFERER'] === "https://billycune.com/" || $_SERVER['HTTP_REFERER'] === "https://www.billycune.com/" || $_SERVER['HTTP_REFERER'] === "https://billycune.pl/"){
    // extract the data from $_POST
    $data = json_decode(file_get_contents('php://input'), true);
    $decodedData = $data!=null ? $data : null;

    if($decodedData['name'] && $decodedData['message'] && $decodedData['email']){
    
        //Load composer's autoloader
        require 'vendor/autoload.php';

        $mail = new PHPMailer(true);
        try{
            // SMTP server configuration
            $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = '';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = '';           // SMTP username
            $mail->Password   = '';                        // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom('contact@billycune.com', 'billycune.com');
            $mail->addAddress('contact@billycune.com');     // Add a recipient
            $mail->addReplyTo($decodedData['email']);

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = 'Client request from billycune.com';
            $mail->Body    = 'Name: ' . $decodedData['name'] . '<br />Email: ' . $decodedData['email'] . '<br />Art Name: ' . $decodedData['id'] .
            '<br /><br /><b>Message:</b> ' . $decodedData['message'];

            if($mail->send())
                echo "Message has been sent!";
        }catch (Exception $e){
            echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
        }
    }else{
        echo "All the fileds are required!";
    }
}else{
    echo "You can't use this server!";
}
?>