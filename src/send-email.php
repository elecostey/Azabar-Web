<?php
if(isset($_POST['email'])) {
    // email addresses where the message will be sent
    $email_info = "lecostey.e@gmail.com";
    $email_sales = "elodie_lecostey@hotmail.com";

    function died($error) {
        echo $error;
        die();
    }

    if(!isset($_POST['name']) ||
        !isset($_POST['subject']) ||
        !isset($_POST['email']) ||
        !isset($_POST['message'])) {
        died('I am sorry, but there appears to be a problem with the form you submitted.');
    }

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

    // Check the user inputs for errors
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if(!preg_match($email_exp,$email)) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
    }

    $string_exp = "/^[A-Za-z .'-]+$/";
    if(!preg_match($string_exp,$name)) {
        $error_message .= 'The Name you entered does not appear to be valid.<br />';
    }

    $phone_exp = "/^[0-9\-\(\)\/\+\s]*$/";
    if(!preg_match($phone_exp,$phone)) {
        $error_message .= 'The Phone Number you entered does not appear to be valid.<br />';
    }

    if(strlen($message) < 2) {
        $error_message .= 'The message you entered do not appear to be valid.<br />';
    }

    if(strlen($error_message) > 0) {
        died($error_message);
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
            echo "Thank you for your interest we will get back to you shortly";
        } else {
            echo "Please check im not a robot";
        }
    }
?>

<?php
}
die();
?>