<?php
if(isset($_POST['email'])) {
    // email addresses where the message will be sent
    $email_info = "info@azbar.hr";
    $email_sales = "sales@azbar.hr";

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $company = $_POST['company'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];
    $subject_text = $_POST['subject-text'];
    $email_subject = $subject_text;

    if($subject == 'comment' || $subject == 'information') {
        $email_to = $email_info;
    } else {
        $email_to = $email_sales;
    } 

     // create email message
     $email_message = "";
     function clean_string($string) {
       $bad = array("content-type","bcc:","to:","cc:","href");
       return str_replace($bad,"",$string);
     }
     $email_message .= "Name: ".clean_string($name)."\n";
     $email_message .= "Email: ".clean_string($email)."\n";
     $email_message .= "Phone: ".clean_string($phone)."\n";
     $email_message .= "Company: ".clean_string($company)."\n";
     $email_message .= "Subject: ".clean_string($email_subject)."\n";
     $email_message .= "Message: ".clean_string($message)."\n";
     
     // create email headers
     $headers = 'From: '.$email."\r\n".
     'Reply-To: '.$email."\r\n" .
     'X-Mailer: PHP/' . phpversion();
  
    if ( ! empty($_POST)) {
        $q = http_build_query(array(
            'secret'    => '6LfBEEUUAAAAAI6NJ6mfvZlRBfPWTJXBnrfrM6iR',
            'response'  => $_POST['g-recaptcha-response'],
            'remoteip'  => $_SERVER['REMOTE_ADDR'],
        ));
        $result = json_decode(file_get_contents('https://www.google.com/recaptcha/api/siteverify?'.$q));
        if ($result->success) {
            @mail($email_to, $email_subject, $email_message, $headers);
            echo "success";
        } else {
            echo "fail";
        }
    }
?>
<?php
}
die();
?>