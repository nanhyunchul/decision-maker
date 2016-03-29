var userData = [
  {
    name: 'testUser',
    password: 'password',
    uploads: [
      ['http://g-ecx.images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg', 'http://i3.mirror.co.uk/incoming/article6745694.ece/ALTERNATES/s615b/Ginger-tabby-cat.jpg'],
      ['http://www.medhatspca.ca/sites/default/files/news_photos/2014-Apr-15/node-147/cute-little-cat.jpg', 'http://hdimagesnew.com/wp-content/uploads/2015/11/Cat-Cute-Kitten-HD-Wallpaper.jpg']
    ]
  },
  {
    name: 'testUser2',
    password: 'password',
    uploads: [
      ['https://pajamasmed.hs.llnwd.net/e1/user-content/31/files/2014/02/coke.jpg', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/Pepsi_logo.svg/1280px-Pepsi_logo.svg.png'],
      ['http://defenders.org/sites/default/files/styles/large/public/tiger-dirk-freder-isp.jpg', 'http://dreamatico.com/data_images/lion/lion-8.jpg']
    ]
  },
  {
    name: 'testUser3',
    password: 'password',
    uploads: [
      ['https://www.drum.fit/wp-content/uploads/2016/03/cup-of-coffee.jpg', 'http://healthnotesonline.areavoices.com/files/2016/03/tea.jpg'],
      ['', '']
    ]
  },
  {
    name: 'testUser4',
    password: 'password',
    uploads: [
      ['http://www.sixthseal.com/archive/September2006/bacon_omelet_bacon_done.jpg', 'https://cdn.shopify.com/s/files/1/0206/9470/files/Bacon.jpg?69173'],
      ['', '']
    ]
  },
  {
    name: 'testUser5',
    password: 'password',
    uploads: [
      ['https://pbs.twimg.com/profile_images/573427740709298176/kfy24vLw.jpeg', 'http://dehayf5mhw1h7.cloudfront.net/wp-content/uploads/sites/249/2016/02/04165158/photo.jpg'],
      ['', '']
    ]
  },
  {
    name: 'testUser6',
    password: 'password',
    uploads: [
      ['http://smitedatamining.com/wp-content/uploads/2015/12/playstation_4-3169634.jpg', 'http://gearnuke.com/wp-content/uploads/2015/05/xbox-one.png'],
      ['', '']
    ]
  },
  {
    name: 'testUser7',
    password: 'password',
    uploads: [
      ['http://storage.googleapis.com/ix_choosemuse/uploads/2016/02/android-logo.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2000px-Apple_logo_black.svg.png'],
      ['', '']
    ]
  },
  {
    name: 'testUser8',
    password: 'password',
    uploads: [
      ['http://store.storeimages.cdn-apple.com/4973/as-images.apple.com/is/image/AppleInc/aos/published/images/m/ac/macbook/box/macbook-box-hw-spacegray-201504?wid=569&hei=405&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1453495464940', 'http://static6.businessinsider.com/image/50dddabdeab8ea2063000001/heres-a-ridiculously-good-deal-on-a-windows-8-laptop-from-vizio.jpg'],
      ['', '']
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

// app.get('/login', function(req, res) {
//   if
// });

app.get('/picture', function(req, res) {
  var randomUser = userData[Math.floor(Math.random() * userData.length)];
  var randomPicture = randomUser.uploads[Math.floor(Math.random() * randomUser.uploads.length)]
  res.send(randomPicture);
  console.log(randomUser);
});

app.listen(8080, function() {
  console.log('listening on port 8080')
});
