/* let's go! */

(function () {
  var xhr = new XMLHttpRequest();
  var url = "https://api.github.com/users/orionlight231";
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var gitObj = JSON.parse(xhr.responseText);
        document.getElementById("github-user-handle").textContent = gitObj.login;
        document.getElementById("github-user-avatar").src = gitObj.avatar_url;
        document.getElementById("github-user-repos").textContent = gitObj.public_repos;

          console.log(gitObj);

      }
  };

  xhr.open("GET", url, true);
  xhr.send();
})();


(function () {
  var xhr = new XMLHttpRequest();
  var url = "https://api.github.com/users/Orionlight231/repos";
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        var gitObj = JSON.parse(xhr.responseText);
        var countStar = 0;
        var langStr = [];
        for (let i = 0; i < gitObj.length; i++) {
          countStar += gitObj[i].stargazers_count;
          langStr.push(gitObj[i].language);

        }


        document.getElementById("github-repos-stars").textContent = countStar;
        document.getElementById("github-repos-languages").textContent = langStr.join(", ");


          console.log(gitObj);

      }
  };

  xhr.open("GET", url, true);
  xhr.send();
})();
