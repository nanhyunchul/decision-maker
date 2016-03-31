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
    var imagePanel = document.getElementById('image-panel');
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
    var imagePanel = document.getElementById('image-panel');
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

function userUploads() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/myUploads');
  xhr.send();

  xhr.addEventListener('load', function() {
    result = JSON.parse(xhr.responseText);
    console.log(result);
    for (i = 0; i < result.length; i++) {
      var uploads = document.getElementById('uploads');
      var resultBox = document.createElement('div');
      resultBox.setAttribute('class', 'col-md-6');

      var resultTable = document.createElement('table');
      resultTable.setAttribute('class', 'table');

      var tableRow = document.createElement('tr');
      var tableDataOne = document.createElement('td');
      tableDataOne.setAttribute('align', 'center');
      tableDataOne.setAttribute('valign', 'center');

      var imageOne = document.createElement('img');
      imageOne.setAttribute('src', result[i].picture[0]);
      imageOne.setAttribute('class', 'image-responsive');

      var counterOne = document.createTextNode(result[i].counter[0]);

      var tableDataTwo = document.createElement('td');
      tableDataTwo.setAttribute('align', 'center');
      tableDataTwo.setAttribute('valign', 'center');

      var imageTwo = document.createElement('img');
      imageTwo.setAttribute('src', result[i].picture[1]);
      imageTwo.setAttribute('class', 'image-responsive');

      var counterTwo = document.createTextNode(result[i].counter[1]);

      tableDataOne.appendChild(imageOne);
      tableDataOne.appendChild(counterOne);

      tableDataTwo.appendChild(imageTwo);
      tableDataTwo.appendChild(counterTwo);

      tableRow.appendChild(tableDataOne);
      tableRow.appendChild(tableDataTwo);

      resultBox.appendChild(tableRow);

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
