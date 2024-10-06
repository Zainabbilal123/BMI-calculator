var weight = document.getElementById('weight');
var height =document.getElementById('height');
var buttonresult = document.getElementById('buttonresult');
var results = document.getElementById('results');
var category = document.getElementById('category');


buttonresult.addEventListener('click' , buttonresult);
  
function buttonresult {
    weight.parsefloat('weight');
    height.parsefloat('height');
}

var formula = height*2/weight;
var calculated = formula.tofixed[2]

var 