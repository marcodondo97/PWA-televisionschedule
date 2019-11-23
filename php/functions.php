<?php  




include ("simple_html_dom.php");
$mattino= file_get_html ("https://hyle.appspot.com/palinsesto/mattina");
$pomeriggio= file_get_html ("https://hyle.appspot.com/palinsesto/pomeriggio");
$sera= file_get_html ("https://hyle.appspot.com/palinsesto/serata");


for ($i=0; $i<=6; $i++){

$mat= $mattino->find ("div.g3 > ul",$i)->innertext;
  $pom= $pomeriggio->find ("div.g3 > ul",$i)->innertext;
   $ser= $sera->find ("div.g3 > ul",$i)->innertext;
    echo"<ul class='list-group' id='list".$i."'>".$mat, $pom ,$ser. "</ul>";

     
   
}

?>