<?php
$content = $_POST; /* receiving SimpleCart order array */
$body = ''; /* declaring the email body */

$fullname = ''; /* extra field variable */
$email = ''; /* extra field variable */
$phone = ''; /* extra field variable */
$usage = ''; /* extra field variable */
$message = ''; /* extra field variable */


$body .= '=================================='."\n";
$body .= "Name: ".$content[$fullname]."\n"; /* using extra field variable */
$body .= "Email: ".$content[$email]."\n"; /* using extra field variable */
$body .= "Phone: ".$content[$phone]."\n"; /* using extra field variable */
$body .= "Usage: ".$content[$usage]."\n"; /* using extra field variable */
$body .= "Message: ".$content[$message]."\n"; /* using extra field variable */
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
$body .= 'Comanda#'.$i.': '.$content[$name]."\n".'Cantitate '.$content[$quantity].' --- Pret per bucata $'.number_format($content[$price], 2, '.', '')."\n".'Sub-total $'.number_format($total, 2, '.', '')."\n"; /* creating a semantic format for each ordered product */
$body .= '=================================='."\n";
}
/* ending the loop to get all orders from the stored array */
$body .= 'Total: $'.number_format($grandTotal, 2, '.', '')."\n"; /* total amount of the order */
$body .= '=================================='."\n";
$body .= "\n";
    $headers    = "Content-Type: text/plain; charset=iso-8859-1\n";
    $headers    .= "From: ".$content[$firstname]." ".$content[$lastname]."  <".$content[$email].">\n";
    $recipient  = "e@castella.art";
    $subject    = "Comanda noua pentru K";
mail($recipient, $subject, $body, $headers); /* building the mail() function */
header("location: thankyou.html"); /* declaring the page to redirect if the mail is sent successfully */

if (mail($recipient, $subject, $message, $headers))
{
    echo "Message accepted";
}
else
{
    echo "Error: Message not accepted";
}
?>