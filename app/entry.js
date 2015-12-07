require('./assets/stylesheets/common.scss');

var $ = require('jquery');
var img = $('<img />');
img.attr('src', require('./assets/imgs/tank.png'));
$('body').append(img);