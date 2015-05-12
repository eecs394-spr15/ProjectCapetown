document.addEventListener("deviceready", onReady, false);

var count = 20;

function onReady() {
  $(document).on('click', '#log', function(){
    var username = $('#username').val();

    if (localStorage[username] == undefined) {
      localStorage[username] = JSON.stringify(new User(username, count));
      alert("New User");
    }
    else {
      alert("Welcome Back");
    }

    localStorage.current_user = localStorage[username];

    location.href = "main.html";
  });
}
