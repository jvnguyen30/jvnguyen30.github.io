function myFunction()
{
  //var num = 2;
  //var numAsString = num.toString();
  //var str = "myTextArea" + numAsString;
  var x = document.getElementById("myTextArea2").value;
  var empty = " ";
  if(x === "")
  {
    empty = "true";
  }
  else
  {
    empty = "false";
  }
  document.getElementById("demo").innerHTML = empty;
}
