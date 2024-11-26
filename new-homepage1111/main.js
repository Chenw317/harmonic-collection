var colorButton = document.getElementById('color');
var colorContainer = document.getElementById('color-container');

var emotionButton = document.getElementById('emotion');
var emotionContainer = document.getElementById('emotion-container');

var foodButton = document.getElementById('food')
var foodContainer = document.getElementById('food-container')

colorButton.addEventListener('click', function(){
colorButton.classList.toggle('clickedButton');
colorContainer.classList.toggle('show');
emotionContainer.classList.remove('show');
foodContainer.classList.remove('show');
})

emotionButton.addEventListener('click', function(){
emotionContainer.classList.toggle('show');
colorContainer.classList.remove('show');
foodContainer.classList.remove('show');
})


foodButton.addEventListener('click', function(){
foodContainer.classList.toggle('show');
emotionContainer.classList.remove('show');
colorContainer.classList.remove('show');
})