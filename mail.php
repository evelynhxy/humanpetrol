<?php
$to = 'e@castella.art'; /* your shop's email */
$subject = 'Draught Order'; /* your desired subject to be displayed on the sent email */

$content = $_POST; /* receiving SimpleCart order array */
$body = ''; /* declaring the email body */

$fullname = 'fullname'; /* extra field variable */
$email_from = 'email'; /* extra field variable */
$phone = 'phone'; /* extra field variable */
$usage = 'usage'; /* extra field variable */
$message = 'message';

$body .= '=================================='."\n";
$body .= "Name: ".$content[$fullname]."\n"; /* using extra field variable */
$body .= "Email: ".$content[$email_from]."\n"; /* using extra field variable */
$body .= "Phone: ".$content[$phone]."\n"; /* using extra field variable */
$body .= "Usage: ".$content[$usage]."\n";
$body .= "Message: ".$content[$message]."\n";
$body .= 'Has placed the following order:'."\n";
$body .= "\n";
$body .= '=================================='."\n";

/* starting the loop to get all orders from the stored array */

for($i=1; $i < $content['itemCount'] + 1; $i++) {
$name = 'item_name_'.$i; /* product name variable */
$quantity = 'item_quantity_'.$i; /* product quantity variable */
$price = 'item_price_'.$i; /* product price variable */
$total = $content[$quantity]*$content[$price]; /* product total price variable (price*quantity) */
$grandTotal += $total; /* accumulating the total of all items */
$body .= 'Order #'.$i.': '.$content[$name]."\n".'Qty x '.$content[$quantity].' --- Unit Price $'.number_format($content[$price], 2, '.', '')."\n".'Subtotal $'.number_format($total, 2, '.', '')."\n"; /* creating a semantic format for each ordered product */
$body .= '=================================='."\n";
}

/* ending the loop to get all orders from the stored array */

$body .= 'Order Total: $'.number_format($grandTotal, 2, '.', '')."\n"; /* total amount of the order */
$body .= '=================================='."\n";
$body .= "\n";
$headers = 'From: ' . $email_from . "\r\n" .
'Reply-To: ' . $email_from."\r\n" .
'X-Mailer: PHP/' . phpversion() .
'MIME-Version: 1.0\r\n'.
'Content-Type: text/html; charset=ISO-8859-1\r\n'; /* essential if you're using HTML tags on your mail */

mail($to, $subject, $body, $headers); /* building the mail() function */


echo $body;

// Header('Location: '); /* declaring the page to redirect if the mail is sent successfully */
?>