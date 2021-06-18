// Import stylesheets
// import 'style.css';

// Write Javascript code!
var apiURL = 'https://source.unsplash.com/1600x900/?';
var images = 3;

var searchButton = document.querySelector('#search-button');
console.log(searchButton)
var searchInput = document.querySelector('#search-text');

searchButton.onclick = function () {
  for (var i = 0; i < images; i++) {
    console.log('asking for image #', i);
    fetch(apiURL + searchInput.value + '&' + i).then(function (result) {
      console.log('result of image #' + i, result.url);
      var img = document.createElement('img');
      img.src = result.url;
      document.getElementById('#search-result').append(img);
    });
  }
};
