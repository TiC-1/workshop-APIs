function displayNameWithGithubInfo(cb) {
  getGithubInfo(function(name) {
    displayName(cb, name);
  });
}

function getGithubInfo(cb) {
  var xhr = new XMLHttpRequest();
  var url = "https://api.github.com/users/matjack1";
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var githubObj = JSON.parse(xhr.responseText);
        cb(githubObj.name);
      }
  };
  xhr.open("GET", url, true);
  xhr.send();
}

function displayName(cb, name){
  var username = document.getElementById("github-user-handle");
  username.textContent = name;
  if(typeof cb === "function") {
    cb();
  }
}
