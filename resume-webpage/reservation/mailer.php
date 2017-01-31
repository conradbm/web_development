<?php
    $theName = $_POST["name"];
    $theEmail = $_POST["email"];
    $to = $theEmail;
    $subject = "Blake's Graduation Details";
    
    $message = "Hi, $theName! "."\n\n"."Thanks for letting us know you want to attend Blake's Graduation!" . "\n\n" ."Here are those details as promised (updated 01/28/17)."."\n\n". "Where: Lucas Oil Stadium." . "\n\n" . "When: May 14th." . "\n\n" . "Time: TBA." . "\n\n" . "We'll shoot you an updated email as soon as we receive the latest information regarding time and location.". "\n\n\n\n" . "Very respectfully,"."\n". "Technical Support of Team Blake Conrad";

    $headers = "From: blake@graduation.bmconrad.webutu.com" . "\r\n";

    mail($to,$subject,$message,$headers);

    $txt = "".$theName." ".$theEmail."\n";
    
    $myfile = file_put_contents("logs.txt", $txt.PHP_EOL , FILE_APPEND | LOCK_EX);


     echo "<div class=\"container\" style=\"width:75%;\">
                <h2>Great!</h2><br>
                <div><h4>We look forward to seeing you, <em>$theName</em>. </h4><br>
                     <h4>We just sent details regarding the graduation to: <em>$theEmail</em>.</h4> <br>
                     <h5><strong>Note:</strong> There has been some trouble with emails getting sent to particular email domains (<strong>@aim.com</strong> and <strong>@aol.com</strong> so far).</h5>
                     </div>
            </div>";
    
    
?>  