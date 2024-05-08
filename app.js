let displays = document.getElementById("display");

function clickV(value){
  displays.value += value;
}
function clearDisplay(){
  displays.value = "";
}
function calculate (){
  try{
    displays.value= eval(displays.value)
  } catch(error) {
    displays.value = "Error";
  }
}
// var num1 = document.getElementById('num')
// console(num1)
// var num2 = document.getElementById('num')
// var calculation_result = document.getElementById('num')
// console.log(num1)


// function calculate (sign) {
//     var num1Value = num1.innerHTML
//     var num2Value = num2.innerHTML
    

    
//     if (sign == '+')
//       calculation_result.innerText = parseInt(num1Value) + parseInt(num2Value)
  
//   }