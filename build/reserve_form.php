<?php
    /* Email address which will get the message */
    $to = "banket@bamboobar.su";

    /* subject (message theme) */
    $subject = 'Резервирование стола';

    /* form fields (getting by attr name) */
    $date = $_POST['reserve-date'];
    $time = $_POST['reserve-time'];
    $comments = $_POST['reserve-comments'];
    
    /* message */
    $body = '
        <html>
        <head>
         <title>' . $subject . '</title>
        </head>
        <body>'
           .' <p>Дата: <strong>' . $date . '</strong></p>'
           .' <p>Время: <strong>' . $time . '</strong></p>'
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