var firstPicture = document.getElementById('picture-one');
var secondPicture = document.getElementById('picture-two');

var pictureButton = document.getElementById('show-pictures');

pictureButton.addEventListener('click', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/picture');
  xhr.send();

  xhr.addEventListener('load', function() {
    var result = JSON.parse(xhr.responseText);
    if (xhr.status === 200) {
      var pictureOne = document.createElement('img');
      pictureOne.setAttribute('src', result[0]);

      var pictureTwo = document.createElement('img');
      pictureTwo.setAttribute('src', result[1]);

      firstPicture.appendChild(pictureOne);
      secondPicture.appendChild(pictureTwo);
    } else {
      alert('there was an error');
    }
  })
})
