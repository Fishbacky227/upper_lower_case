let input;
let char;
let output;

document.getElementById("submit").onclick=function(){
  input = document.getElementById("textbox").value;
  output = "";
  for (let i = 0; i < input.length; i++){
    char = input[i];
    if (char === char.toUpperCase()){
      output += char.toLowerCase();
    }
    else{
      output += char.toUpperCase();
    }
  }
  if (input === ""){
    output = "Please Enter A Value";
  }
  document.getElementById("label").textContent = output;
};