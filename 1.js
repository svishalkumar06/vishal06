<!doctype html>
<html>
<head>
<title>
My first page
</title>
</head>

 <script type="text/javascript">
 function show(){
   var no=parseInt(docu<!doctype html>
<html>
<head>
<title>
My first page
</title>
</head>

 <script type="text/javascript">
 function show(){
   var no=parseInt(document.getElementById("a").value);
   var result;
   if(no>0)
     result="positive";
   else if(no==0)
     result="zero";
   else
     result="negative"
    document.getElementById("demo").innerHTML=result;
 }
  </script>

    <body >
<h1 id="mytitle">variable and execution of javascript
</h1>
    <div id="container">
    <div>First no:
        <input type="number" id="a"></div> </div>
    <button onclick="show()">submit</button>
    <p id="demo"></p>
    </body>
</html>



ment.getElementById("a").value);
   var result;
   if(no>0)
     result="positive";
   else if(no==0)
     result="zero";
   else
     result=
    document.getElementById("demo").innerHTML=p;
 }
  </script>

    <body >
<h1 id="mytitle">variable and execution of javascript
</h1>
    <div id="container">
    <div>First no:
<input type="number" id="a"></div>
    <button onclick="show()">submit</button>
    <p id="demo"></p>
    </body>
</html>



