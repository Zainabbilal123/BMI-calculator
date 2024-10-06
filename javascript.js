var weight = document.getElementById('weight');
var height =document.getElementById('height');
var buttonresult = document.getElementById('buttonresult');
var results = document.getElementById('results');
var category = document.getElementById('category');


buttonresult.addEventListener('click' , buttonresult);
  
function buttonresult {
    weight.parsefloat('weight');
    height.parsefloat('height');


var formula = height*2/weight;
var calculated = formula.tofixed[2]

results.textContent= 'result: ${result}';

var category
if (calculated < 18.5) {
     category = 'underwight'
} else if (calculated < 24.9) {
    category =" Normal weight"
} else if(calculated < 29.9) {
    category = "overweight"
} else (calculated > 30) {
    category = "obesity"
}

category.textContent = 'category: ${category}';
}
