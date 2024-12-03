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
emotionButton.classList.remove('clickedButton');
foodButton.classList.remove('clickedButton');
})

emotionButton.addEventListener('click', function(){
emotionButton.classList.toggle('clickedButton');
emotionContainer.classList.toggle('show');
colorContainer.classList.remove('show');
foodContainer.classList.remove('show');
colorButton.classList.remove('clickedButton');
foodButton.classList.remove('clickedButton');
})


foodButton.addEventListener('click', function(){
foodButton.classList.toggle('clickedButton');
foodContainer.classList.toggle('show');
emotionContainer.classList.remove('show');
colorContainer.classList.remove('show');
colorButton.classList.remove('clickedButton');
emotionButton.classList.remove('clickedButton');
})