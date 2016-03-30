var imagePanel = document.getElementById('image-panel');
imagePanel.setAttribute('id', 'images');

function showPicturesOne() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/pictureOne');
  xhr.send();

  xhr.addEventListener('load', function() {
    var result = JSON.parse(xhr.responseText);
    var resultPicture = result.picture
    while (imagePanel.firstChild) {
      imagePanel.removeChild(imagePanel.firstChild);
    }
    if (xhr.status === 200) {
      var pictureOne = document.createElement('img');
      pictureOne.setAttribute('src', resultPicture[0]);
      pictureOne.setAttribute('class', 'img-responsive')
      pictureOne.setAttribute('directory', '/pictureOne');

      var pictureTwo = document.createElement('img');
      pictureTwo.setAttribute('src', resultPicture[1]);
      pictureTwo.setAttribute('class', 'img-responsive')
      pictureTwo.setAttribute('directory', '/pictureTwo')

      var buttonOne = document.createElement('button');
      buttonOne.setAttribute('type', 'button');

      var buttonTwo = document.createElement('button');
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

function showPicturesTwo() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/pictureTwo');
  xhr.send();

  xhr.addEventListener('load', function() {
    var result = JSON.parse(xhr.responseText);
    var resultPicture = result.picture
    while (imagePanel.firstChild) {
      imagePanel.removeChild(imagePanel.firstChild);
    }
    if (xhr.status === 200) {
      var pictureOne = document.createElement('img');
      pictureOne.setAttribute('src', resultPicture[0]);
      pictureOne.setAttribute('class', 'img-responsive')
      pictureOne.setAttribute('directory', '/pictureOne');

      var pictureTwo = document.createElement('img');
      pictureTwo.setAttribute('src', resultPicture[1]);
      pictureTwo.setAttribute('class', 'img-responsive')
      pictureTwo.setAttribute('directory', '/pictureTwo')

      var buttonOne = document.createElement('button');
      buttonOne.setAttribute('type', 'button');

      var buttonTwo = document.createElement('button');
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

function showPicturesSkip() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/skip');
  xhr.send();

  xhr.addEventListener('load', function() {
    var result = JSON.parse(xhr.responseText);
    var resultPicture = result.picture
    while (imagePanel.firstChild) {
      imagePanel.removeChild(imagePanel.firstChild);
    }
    if (xhr.status === 200) {
      var pictureOne = document.createElement('img');
      pictureOne.setAttribute('src', resultPicture[0]);
      pictureOne.setAttribute('class', 'img-responsive')
      pictureOne.setAttribute('directory', '/pictureOne');

      var pictureTwo = document.createElement('img');
      pictureTwo.setAttribute('src', resultPicture[1]);
      pictureTwo.setAttribute('class', 'img-responsive')
      pictureTwo.setAttribute('directory', '/pictureTwo')

      var buttonOne = document.createElement('button');
      buttonOne.setAttribute('type', 'button');

      var buttonTwo = document.createElement('button');
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
  if (id == '/pictureOne') {
    showPicturesOne();
  }
  if (id == '/pictureTwo') {
    showPicturesTwo();
  }
  if (id == '/skip') {
    showPicturesSkip();
  }
});
