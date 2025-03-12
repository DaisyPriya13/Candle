<html>
    <body>
   <?php
   if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $num=$_POST['number'];
      $rev=0;
      $x=$num;
      $sum=0;
      while($num){
        $rem=$num%10;
        $num=intval($num/10);
        $rev=$rev*10+$rem;
        $sum=$sum+$rem;

      }
    }
      echo "The reverse of $x is $rev<br>";
        echo "The sum of digits of $x is $sum<br>";
        ?>
        <form method="post" >
        <input type="number" name="number" placeholder="Enter a number"><br>
    <input type="submit" value="Submit">
 </form>

    </body>
</html>