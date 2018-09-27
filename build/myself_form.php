<?php
    /* Email address which will get the message */
    $to = "banket@bamboobar.su";

    /* subject (message theme) */
    $subject = 'Заказ с собой';

    /* form fields (getting by attr name) */
    $name = $_POST['myself-name'];
    $phone = $_POST['myself-phone'];
    $email = $_POST['myself-email'];
    $comments = $_POST['myself-comments'];
    
    /* message */
    $body = '
        <html>
        <head>
         <title>' . $subject . '</title>
        </head>
        <body>'
           .' <p>Имя: <strong>' . $name . '</strong></p>'
           .' <p>Телефон: <strong>' . $phone . '</strong></p>'
           .' <p>Имейл: <strong>' . $email . '</strong></p>'
           .' <p>Комментарий: <strong>' . $comments . '</strong></p>'
        .'</body>
        </html>';

    /* For sending HTML email you can set up headers Content-type. */
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<b>Message send!</b>";
    } else {
        echo "Send error!";
    }
?>