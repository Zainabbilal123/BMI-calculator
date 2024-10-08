const weight = document.getElementById('weight')
const height =document.getElementById('height');
const resultValue = document.getElementById('buttonresult');
const bmiResult = document.getElementById('results');
const categoryList = document.getElementById('category');


resultValue.addEventListener('click', calculatedBMI);


  
function calculatedBMI() {
   const weightValue = parseFloat(weight.value);
    const heightValue = parseFloat(height.value);

   
const formula = weightValue / ( heightValue ** 2);
const solvedNumber = formula.toFixed(2);

     bmiResult.textContent= `BMI: ${solvedNumber};`
     
let categoryMsg;
if (formula <= 18.5) {
     categoryMsg = 'underweight';
} else if (formula <= 24.9) {
    categoryMsg =" Normal weight";
} else if(formula <= 29.9) {
    categoryMsg = "overweight";
} else  {
    categoryMsg = "obesity";
}

  categoryList.textContent = categoryMsg;

  weight.value = ""
  height.value = ""

  
}


