/* let's go! */
var updateGithubUser = function(cb) {
  getGithubInfo(cb, updateDomGithubUser);
}

var getGithubInfo = function(cb, updateDom) {
  var xhr = new XMLHttpRequest();
  var url = "https://api.github.com/users/matjack1";
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var githubObj = JSON.parse(xhr.responseText);
        updateDom(cb, githubObj);
      }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

var updateDomGithubUser = function(cb, obj){
  var username = document.getElementById("github-user-handle");
  username.textContent = obj.name;
  cb();
}
