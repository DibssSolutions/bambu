<?php
    /* Email address which will get the message */
    $to = "vitalik.kopylov@gmail.com";

    /* subject (message theme) */
    $subject = 'Заказ еды на вынос';

    /* form fields (getting by attr name) */
    $name = $_POST['order-name'];
    $phone = $_POST['order-phone'];
    $email = $_POST['order-email'];
    $comments = $_POST['order-comments'];
    
    /* message */
    $body = '
        <html>
        <head>
         <title>' . $subject . '</title>
        </head>
        <body>'
           .' <p>Имя: <strong>' . $name . '</strong></p>'
           .' <p>Телефон: <strong>' . $phone . '</strong></p>'
           .' <p>Емейл: <strong>' . $email . '</strong></p>'
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