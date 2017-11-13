<!doctype html>
<html>
<head>
<title>
My first page
</title>
</head>

 <script type="text/javascript">
 function show(){
   var no=Number(document.getElementById("a").value);
   var result;
    if(no>0)
     result="positive";
   else if(no==0)
     result="zero";
   else if(no<0)
     result="negative"
     else
         result="invalid input";
    document.getElementById("demo").innerHTML=result;
 }
  </script>

    <body >
<h1 id="mytitle">variable and execution of javascript
</h1>
    <div id="container">
    <div>Enter no:
        <input type="text" id="a"></div> </div>
    <button onclick="show()">submit</button>
    <p id="demo"></p>
    </body>
</html>



