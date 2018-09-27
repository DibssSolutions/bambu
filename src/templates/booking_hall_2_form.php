<?php
    /* Email address which will get the message */
    $to = "banket@bamboobar.su";

    /* subject (message theme) */
    $subject = 'Бронирование 2го этажа';

    /* form fields (getting by attr name) */
    $name = $_POST['hall-2-name'];
    $phone = $_POST['hall-2-phone'];
    $people = $_POST['hall-2-number-of-people'];
    $date = $_POST['hall-2-date'];
    $time = $_POST['hall-2-time'];
    $comments = $_POST['hall-2-comments'];
    
    /* message */
    $body = '
        <html>
        <head>
         <title>' . $subject . '</title>
        </head>
        <body>'
           .' <p>Имя: <strong>' . $name . '</strong></p>'
           .' <p>Телефон: <strong>' . $phone . '</strong></p>'
           .' <p>Количество людей: <strong>' . $people . '</strong></p>'
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