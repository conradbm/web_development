 <?php 
    
    $username = isset($_POST['name'])? trim($_POST['name']):'';
    $email= isset($_POST['email'])? trim($_POST['email']):'';

    echo '<div id=dynamicDiv>
        <p>Hello, '.$username.'!</p>
        <p>We look forward to contacting you at, '.$email.'</p>
     </div>';

?> 