var closeButton = document.getElementById('closeButton');
var alertBox = document.querySelector('.alert');
var notes = document.querySelector('.notes');
var sparkle = document.getElementById('sparkle');

closeButton.addEventListener('click', function(){
  alertBox.style.display = 'none';
})

notes.addEventListener('mouseover', function(){
  sparkle.classList.add('show');
})

const list = document.getElementById('ingredients-list');
    list.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('crossed-off');
      }
    });
