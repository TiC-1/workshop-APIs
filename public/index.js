

(function() {
  var xhr = new XMLHttpRequest();
  var url = "https://api.github.com/users/clodpheasant";

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var userData = JSON.parse(xhr.responseText);
      var publicRepos = userData.public_repos;
      var avatarUrl = userData.avatar_url;
      }

      // console.log(userData);
    }
  xhr.open("GET", url, true);
  xhr.send();
})();

(function() {
  var xhr_1 = new XMLHttpRequest();
  var url_1 = "https://api.github.com/users/clodpheasant/repos";

  xhr_1.onreadystatechange = function() {
    if (xhr_1.readyState == 4 && xhr_1.status == 200) {
      var starcounter = 0;
      var languagesUsed = [];
      var userData_1 = JSON.parse(xhr_1.responseText);
      for (let i=0; i<userData_1.length; i++){
        starcounter += userData_1[i].stargazers_count;
        languagesUsed.push(userData_1[i].language);
      }
      console.log(starcounter);
      }
    }
  xhr_1.open("GET", url_1, true);
  xhr_1.send();
})();

// (function() {
//   var xhr_2 = new XMLHttpRequest();
//   var url_2 = "https://api.github.com/repos/clodpheasant/languages";
//
//   xhr_2.onreadystatechange = function() {
//     if (xhr_2.readyState == 4 && xhr_2.status == 200) {
//       var userData_2 = JSON.parse(xhr_2.responseText);
//     var userLanguage = userData_2.length;
//
//     // console.log(userData_2);
//       }
//     }
//   xhr_2.open("GET", url_2, true);
//   xhr_2.send();
// })();


// var giphyObj = JSON.parse(xhr.responseText);
// var newImage;
// var gallery = document.getElementById("gallery");
// gallery.innerHTML = "";
// for (var i = 0; i < giphyObj.data.length; i++) {
//   newImage = document.createElement("img");
//   newImage.src = giphyObj.data[i].images.downsized_medium.url;
//   gallery.appendChild(newImage);
