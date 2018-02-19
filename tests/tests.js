//
// test("add function", function(assert) {
//   var result = add(2, 3);
//   var expected = 5;
//   assert.equal(result, expected, "correctly adds two numbers");
// });

var username = document.getElementById("github-user-handle");

function testUserName() {
  return test("User name is Matteo Giaccone", function(assert) {
    assert.equal(username.textContent, "Matteo Giaccone", "Sets user name");
  });
};

updateGithubUser(testUserName);
