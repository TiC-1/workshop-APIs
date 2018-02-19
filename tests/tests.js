test("User name is Matteo Giaccone", function(assert) {
  var username = document.getElementById("github-user-handle");

  function assertDomIsSetAfterAjax(){
    assert.equal(username.textContent, "Matteo Giaccone", "Sets DOM user name via Ajax");
  }
  displayNameWithGithubInfo(assertDomIsSetAfterAjax);

  function assertDomIsUpdated(){
    assert.equal(username.textContent, "Tizio Caio", "DOM updates to Tizio Caio");
  }
  displayName(assertDomIsUpdated, "Tizio Caio");

  function assertGithubReturnsName(name){
    assert.equal(name, "Matteo Giaccone", "Ajax call alone works");
  }
  getGithubInfo(assertGithubReturnsName);
});
