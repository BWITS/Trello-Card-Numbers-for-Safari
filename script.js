'use strict';

function trelloCardNumbers() {
  var elements = document.getElementsByClassName('card-short-id');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('hide');
    elements[i].style.marginRight = '4px';
    elements[i].style.fontWeight = 500;
  }
}

$('#content').bind('DOMSubtreeModified', function(e) {
  if (e.target.innerHTML.length > 0) {
      trelloCardNumbers();
  }
});
