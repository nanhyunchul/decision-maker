function showPicturesOne() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/pictureOne');
  xhr.send();

  xhr.addEventListener('load', function() {
    var imagePanel = document.getElementById('image-panel');
    var result = JSON.parse(xhr.responseText);
    var resultPicture = result.picture
    while (imagePanel.firstChild) {
      imagePanel.removeChild(imagePanel.firstChild);
    }
    if (xhr.status === 200) {
      var pictureOne = document.createElement('img');
      pictureOne.setAttribute('src', resultPicture[0]);
      pictureOne.setAttribute('class', 'img-responsive img-thumbnail padding-0 border-0')
      pictureOne.setAttribute('directory', '/pictureOne');

      var pictureTwo = document.createElement('img');
      pictureTwo.setAttribute('src', resultPicture[1]);
      pictureTwo.setAttribute('class', 'img-responsive img-thumbnail padding-0 border-0')
      pictureTwo.setAttribute('directory', '/pictureTwo')

      var buttonOne = document.createElement('button');
      buttonOne.setAttribute('type', 'button');
      buttonOne.setAttribute('class', 'padding-0 border-0');

      var buttonTwo = document.createElement('button');
      buttonTwo.setAttribute('type', 'button');
      buttonTwo.setAttribute('class', 'padding-0 border-0');

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
    var imagePanel = document.getElementById('image-panel');
    var result = JSON.parse(xhr.responseText);
    var resultPicture = result.picture
    while (imagePanel.firstChild) {
      imagePanel.removeChild(imagePanel.firstChild);
    }
    if (xhr.status === 200) {
      var pictureOne = document.createElement('img');
      pictureOne.setAttribute('src', resultPicture[0]);
      pictureOne.setAttribute('class', 'img-responsive img-thumbnail padding-0 border-0')
      pictureOne.setAttribute('directory', '/pictureOne');

      var pictureTwo = document.createElement('img');
      pictureTwo.setAttribute('src', resultPicture[1]);
      pictureTwo.setAttribute('class', 'img-responsive img-thumbnail padding-0 border-0')
      pictureTwo.setAttribute('directory', '/pictureTwo')

      var buttonOne = document.createElement('button');
      buttonOne.setAttribute('type', 'button');
      buttonOne.setAttribute('class', 'padding-0 border-0');

      var buttonTwo = document.createElement('button');
      buttonTwo.setAttribute('type', 'button');
      buttonTwo.setAttribute('class', 'padding-0 border-0');

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
    var imagePanel = document.getElementById('image-panel');
    var result = JSON.parse(xhr.responseText);
    var resultPicture = result.picture
    while (imagePanel.firstChild) {
      imagePanel.removeChild(imagePanel.firstChild);
    }
    if (xhr.status === 200) {
      var pictureOne = document.createElement('img');
      pictureOne.setAttribute('src', resultPicture[0]);
      pictureOne.setAttribute('class', 'img-responsive img-thumbnail padding-0 border-0')
      pictureOne.setAttribute('directory', '/pictureOne');

      var pictureTwo = document.createElement('img');
      pictureTwo.setAttribute('src', resultPicture[1]);
      pictureTwo.setAttribute('class', 'img-responsive img-thumbnail padding-0 border-0')
      pictureTwo.setAttribute('directory', '/pictureTwo')

      var buttonOne = document.createElement('button');
      buttonOne.setAttribute('type', 'button');
      buttonOne.setAttribute('class', 'padding-0 border-0');

      var buttonTwo = document.createElement('button');
      buttonTwo.setAttribute('type', 'button');
      buttonTwo.setAttribute('class', 'padding-0 border-0');

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

function userUploads() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/myUploads');
  xhr.send();

  xhr.addEventListener('load', function() {
    var uploads = document.getElementById('uploads');
    var result = JSON.parse(xhr.responseText);
    while (uploads.firstChild) {
      uploads.removeChild(uploads.firstChild);
    }

    var uploadTextDiv = document.createElement('div');
    uploadTextDiv.setAttribute('class', 'col-md-6 col-md-offset-3');

    var uploadText = document.createElement('h2');
    uploadText.textContent = 'My Upload History';

    uploadTextDiv.appendChild(uploadText);
    uploads.appendChild(uploadTextDiv);

    for (i = 0; i < result.length; i++) {
      var resultBox = document.createElement('div');
      resultBox.setAttribute('class', 'col-md-6 col-md-offset-3');

      var uploadPanel = document.createElement('div');
      uploadPanel.setAttribute('class', 'panel panel-default space-30');

      var uploadBody = document.createElement('div');
      uploadBody.setAttribute('class', 'panel-body bottom-0');

      var uploadFooter = document.createElement('div');
      uploadFooter.setAttribute('class', 'panel-footer');

      var imageTable = document.createElement('table');
      imageTable.setAttribute('class', 'table bottom-margin-0');

      var counterTable = document.createElement('table');
      counterTable.setAttribute('class', 'table bottom-margin-0');


      var imageTableRow = document.createElement('tr');
      var counterTableRow = document.createElement('tr');

      var imageTdOne = document.createElement('td');
      imageTdOne.setAttribute('align', 'center');
      imageTdOne.setAttribute('valign', 'center');

      var counterTdOne = document.createElement('td');
      counterTdOne.setAttribute('align', 'center');
      counterTdOne.setAttribute('valign', 'center');

      var imageOne = document.createElement('img');
      imageOne.setAttribute('src', result[i].picture[0]);
      imageOne.setAttribute('class', 'image-responsive thumbnail');

      var counterOne = document.createTextNode(result[i].counter[0] + ' ' + 'Votes');

      var imageTdTwo = document.createElement('td');
      imageTdTwo.setAttribute('align', 'center');
      imageTdTwo.setAttribute('valign', 'center');

      var counterTdTwo = document.createElement('td');
      counterTdTwo.setAttribute('align', 'center');
      counterTdTwo.setAttribute('valign', 'center');

      var imageTwo = document.createElement('img');
      imageTwo.setAttribute('src', result[i].picture[1]);
      imageTwo.setAttribute('class', 'image-responsive thumbnail');

      var counterTwo = document.createTextNode(result[i].counter[1] + ' ' + 'Votes');

      imageTdOne.appendChild(imageOne);
      counterTdOne.appendChild(counterOne);

      counterTdOne.appendChild(counterOne);

      imageTdTwo.appendChild(imageTwo);
      counterTdTwo.appendChild(counterTwo);

      counterTdTwo.appendChild(counterTwo);

      imageTableRow.appendChild(imageTdOne);
      imageTableRow.appendChild(imageTdTwo);

      counterTableRow.appendChild(counterTdOne);
      counterTableRow.appendChild(counterTdTwo);

      imageTable.appendChild(imageTableRow);
      counterTable.appendChild(counterTableRow);

      uploadBody.appendChild(imageTable);
      uploadFooter.appendChild(counterTable);

      uploadPanel.appendChild(uploadBody);
      uploadPanel.appendChild(uploadFooter);

      resultBox.appendChild(uploadPanel);

      uploads.appendChild(resultBox);
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
  if (id == '/myUploads') {
    userUploads();
  }
});

//sliding navbar function //
(function ($) {
    'use strict';
    // Toggle classes in body for syncing sliding animation with other elements
    $('#bs-example-navbar-collapse-2')
        .on('show.bs.collapse', function (e) {
            $('body').addClass('menu-slider');
        })
        .on('shown.bs.collapse', function (e) {
            $('body').addClass('in');
        })
        .on('hide.bs.collapse', function (e) {
            $('body').removeClass('menu-slider');
        })
        .on('hidden.bs.collapse', function (e) {
            $('body').removeClass('in');
        });
})(jQuery);
