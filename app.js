var userData = [
  {
    name: 'testUser',
    password: 'password',
    uploads: [
      {
        picture: ['http://g-ecx.images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg', 'http://i3.mirror.co.uk/incoming/article6745694.ece/ALTERNATES/s615b/Ginger-tabby-cat.jpg'],
        counter: [0, 0]
      },
      {
        picture: ['http://www.medhatspca.ca/sites/default/files/news_photos/2014-Apr-15/node-147/cute-little-cat.jpg', 'http://hdimagesnew.com/wp-content/uploads/2015/11/Cat-Cute-Kitten-HD-Wallpaper.jpg'],
        counter: [0, 0]
      }
    ]
  },
  {
    name: 'testUser2',
    password: 'password',
    uploads: [
      {
        picture: ['https://pajamasmed.hs.llnwd.net/e1/user-content/31/files/2014/02/coke.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Pepsi_logo.svg/1280px-Pepsi_logo.svg.png'],
        counter: [0, 0]
      },
      {
        picture: ['http://defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg', 'http://dreamatico.com/data_images/lion/lion-8.jpg'],
        counter: [0, 0]
      }
    ]
  },
  {
    name: 'testUser3',
    password: 'password',
    uploads: [
      {
        picture: ['https://www.drum.fit/wp-content/uploads/2016/03/cup-of-coffee.jpg', 'http://healthnotesonline.areavoices.com/files/2016/03/tea.jpg'],
        counter: [0, 0]
      },
      {
        picture: ['http://2.bp.blogspot.com/-919AZkQmDnM/TjA98CLzW2I/AAAAAAAADLk/uOZgtfyasIg/s1600/yes.gif', 'http://www.filmnotes.net/wp-content/uploads/2015/12/No.jpg'],
        counter: [0, 0]
      }
    ]
  },
  {
    name: 'testUser4',
    password: 'password',
    uploads: [
      {
        picture: ['http://www.sixthseal.com/archive/September2006/bacon_omelet_bacon_done.jpg', 'https://cdn.shopify.com/s/files/1/0206/9470/files/Bacon.jpg?69173'],
        counter: [0, 0]
      },
      {
        picture: ['http://www.keybiscaynesoccerclub.com/imgs/Left%20arrow.jpg', 'http://www.designofsignage.com/application/symbol/hospital/image/600x600/arrow-right.jpg'],
        counter: [0, 0]
      }
    ]
  },
  {
    name: 'testUser5',
    password: 'password',
    uploads: [
      {
        picture: ['https://pbs.twimg.com/profile_images/573427740709298176/kfy24vLw.jpeg', 'http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/249/2016/02/04165158/photo.jpg'],
        counter: [0, 0]
      },
      {
        picture: ['http://www.clipartbest.com/cliparts/aTe/8oL/aTe8oLAT4.png', 'http://www.clipartbest.com/cliparts/xcg/q9o/xcgq9oocA.png'],
        counter: [0, 0]
      }
    ]
  },
  {
    name: 'testUser6',
    password: 'password',
    uploads: [
      {
        picture: ['http://smitedatamining.com/wp-content/uploads/2015/12/playstation_4-3169634.jpg', 'http://gearnuke.com/wp-content/uploads/2015/05/xbox-one.png'],
        counter: [0, 0]
      },
      {
        picture: ['http://static.comicvine.com/uploads/original/13/138572/2824589-13260-gamesrocks-superman.jpg', 'http://static.comicvine.com/uploads/original/11126/111264223/4978219-4440144695-21085.jpg'],
        counter: [0, 0]
      }
    ]
  },
  {
    name: 'testUser7',
    password: 'password',
    uploads: [
      {
        picture: ['http://storage.googleapis.com/ix_choosemuse/uploads/2016/02/android-logo.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png'],
        counter: [0, 0]
      },
      {
        picture: ['https://pbs.twimg.com/profile_images/573984336271122432/k8vEBoCW.jpeg', 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3d/DC_Comics_logo.svg/1024px-DC_Comics_logo.svg.png'],
        counter: [0, 0]
      }
    ]
  },
  {
    name: 'testUser8',
    password: 'password',
    uploads: [
      {
        picture: ['http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/box/macbook-box-hw-spacegray-201504?wid=569&hei=405&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1453495464940', 'http://static6.businessinsider.com/image/50dddabdeab8ea2063000001/heres-a-ridiculously-good-deal-on-a-windows-8-laptop-from-vizio.jpg'],
        counter: [0, 0]
      },
      {
        picture: ['http://ecx.images-amazon.com/images/I/519XnhLGWCL.jpg', 'http://www.zeroto60times.com/blog/wp-content/uploads/2013/02/lamborghini-cars-logo-emblem.jpg'],
        counter: [0, 0]
      }
    ]
  }
];

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var cookieParser = require('cookie-parser');

app.use(cookieParser());

app.use(express.static('./public'));

app.get('/pictureOne', cookieParser(), function(req, res) {
  function randomPick() {
    return randomUser = userData[Math.floor(Math.random() * userData.length)];
  }
  (function selectUser() {
    randomPick();
    if (randomUser.name ===req.cookies.username) {
      selectUser();
    }
  })();
  var randomPicture = randomUser.uploads[Math.floor(Math.random() * randomUser.uploads.length)];
  randomPicture.counter[0]++;
  res.send(randomPicture);
});

app.get('/pictureTwo', function(req, res) {
  function randomPick() {
    return randomUser = userData[Math.floor(Math.random() * userData.length)];
  }
  (function selectUser() {
    randomPick();
    if (randomUser.name ===req.cookies.username) {
      selectUser();
    }
  })();
  var randomPicture = randomUser.uploads[Math.floor(Math.random() * randomUser.uploads.length)];
  randomPicture.counter[1]++;
  res.send(randomPicture);
});

app.get('/skip', function(req, res) {
  function randomPick() {
    return randomUser = userData[Math.floor(Math.random() * userData.length)];
  }
  (function selectUser() {
    randomPick();
    if (randomUser.name ===req.cookies.username) {
      selectUser();
    }
  })();
  var randomUser = userData[Math.floor(Math.random() * userData.length)];
  var randomPicture = randomUser.uploads[Math.floor(Math.random() * randomUser.uploads.length)];
  res.cookie('username', 'testUser')
  res.send(randomPicture);
});

app.get('/myUploads', function(req, res) {
  for (i = 0; i < userData.length; i++) {
    if (req.cookies.username === userData[i].name) {
      res.send(userData[i].uploads);
    }
  }
});

app.listen(8080, function() {
  console.log('listening on port 8080')
});
