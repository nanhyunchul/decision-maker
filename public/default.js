var imagePanel = document.getElementById('image-panel');
imagePanel.setAttribute('id', 'images');

function showPictures() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/picture');
  xhr.send();

  xhr.addEventListener('load', function() {
    var result = JSON.parse(xhr.responseText);
    while (imagePanel.firstChild) {
      imagePanel.removeChild(imagePanel.firstChild);
    }
    if (xhr.status === 200) {
      var pictureOne = document.createElement('img');
      pictureOne.setAttribute('src', result[0]);
      pictureOne.setAttribute('class', 'img-responsive')

      var pictureTwo = document.createElement('img');
      pictureTwo.setAttribute('src', result[1]);
      pictureTwo.setAttribute('class', 'img-responsive')

      var buttonOne = document.createElement('button');
      buttonOne.setAttribute('directory', '/pictures');
      buttonOne.setAttribute('type', 'button');

      var buttonTwo = document.createElement('button');
      buttonTwo.setAttribute('directory', '/pictures')
      buttonTwo.setAttribute('type', 'button');

      var firstPanel = document.createElement('div');
      firstPanel.setAttribute('class', 'col-md-5');

      var secondPanel = document.createElement('div');
      secondPanel.setAttribute('class', 'col-md-5 col-md-offset-2');

      var or = document.createElement('div');
      or.setAttribute('class', 'col-md-2 text-center');
      or.setAttribute('id', 'or')
      or.textContent = 'OR';

      buttonOne.appendChild(pictureOne);
      buttonTwo.appendChild(pictureTwo);

      firstPanel.appendChild(buttonOne);
      secondPanel.appendChild(buttonTwo);

      imagePanel.appendChild(firstPanel);
      imagePanel.appendChild(or);
      imagePanel.appendChild(secondPanel);
    } else {
      alert('there was an error');
    }
  })
}

var body = document.body;
body.addEventListener('click', function(event) {
  event.preventDefault();
  var id = event.target.getAttribute('directory');
  if (id == '/picture') {
    console.log(event);
    showPictures();
  }
});
