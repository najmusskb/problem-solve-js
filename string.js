<!DOCTYPE html>
<html>
  
<head>
    <title>
        String to a character array
    </title>
</head>
  
<body style="text-align:center;">
  
    <h1>GeeksforGeeks</h1>
          
    <p id = "one" >GeeksforGeeks: A computer science portal</p>
      
    <input type="button" value="Click Here!" onclick="myGeeks()">
      
    <script>
        function myGeeks() {
            var str = document.getElementById("one").innerHTML;
            document.getElementById("one").innerHTML = str.split("");
        }
    </script>
</body>
  
</html>  