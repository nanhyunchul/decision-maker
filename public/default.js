var imagePanel = document.getElementById('image-panel');

var pictureButton = document.getElementById('show-pictures');

pictureButton.addEventListener('click', function() {
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

      var firstPanel = document.createElement('div');
      firstPanel.setAttribute('class', 'col-md-6');

      var secondPanel = document.createElement('div');
      secondPanel.setAttribute('class', 'col-md-6');

      firstPanel.appendChild(pictureOne);
      secondPanel.appendChild(pictureTwo);

      imagePanel.appendChild(firstPanel);
      imagePanel.appendChild(secondPanel);
    } else {
      alert('there was an error');
    }
  })
})
