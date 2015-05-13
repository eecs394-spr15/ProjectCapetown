document.addEventListener("deviceready", onReady, false);

var count = 20;

function onReady() {
  $('#home').css('position', 'absolute');
  $('#home').css('top', "50%");
  $('#home').css('left', "50%");
  $('#home').css('margin-top', -1 * $('#home').height() / 2 + "px");
  $('#home').css('margin-left', -1 * $('#home').width() / 2 + "px");

  $('#begin').css('position', 'absolute');
  $('#begin').css('top', "80%");
  $('#begin').css('left', "50%");
  $('#begin').css('margin-top', -1 * $('#begin').height() / 2 + "px");
  $('#begin').css('margin-left', -1 * $('#begin').width() / 2 + "px");
}
