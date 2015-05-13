var questions = Array();
var index = 0;
var user = jsonToUser(JSON.parse(localStorage.current_user));

document.addEventListener("deviceready", onReady, false);

$(window).bind('beforeunload', function(){
  localStorage[user.name] = JSON.stringify(user);
  localStorage.current_user = JSON.stringify(user);
})

var tag = 0;
var finished = false;
// pre-test: 1
// post-test: 2

function finishTest() {
  if (tag == 1 && user.pretest.getCount() == questions.length) {
    $('#question').text("You have completed this part!");  
    $('#choices').html("");
    $('#next').html("Back");
    finished = true;
    return true;
  }
  else if (tag == 2 && user.posttest.getCount() == questions.length) {
    $('#question').text("You have completed this part!");  
    $('#choices').html("");
    $('#next').html("Back");
    finished = true;
    return true;
  }

  return false;
}

function onReady() {
  if (location.href.indexOf("pre-test") != -1) {
    tag = 1;
  }
  else {
    tag = 2;
  }

  $(document).on('click', '#next', function(){
    if (finished) {
      location.href = 'training.html';
      return;
    }

    var answerArray = new Array();
    var arrayIndex = 0;

    $("input").each(function(index){
      if ($(this).prop("checked")) {
        answerArray[arrayIndex++] = $(this).val(); 
      }
    });

    if (answerArray.length == 0) {
      alert("You must have a least one choice");
      return;
    }

    if (tag == 1) {
      user.pretest.setIndex(index - 1, answerArray);
    }
    else {
      user.posttest.setIndex(index - 1, answerArray);
    }

    if (finishTest()) {
      return; 
    }

    showNextQuestion();
  });

  $.ajax({
    url: "res/data/questions",
    async: false,
    success: function(data) {
      var result = JSON.parse(data).questions;   
      for (var i = 0; i != result.length; i++) {
        questions.push(new Question(result[i].id, result[i].question, result[i].choices, result[i].answer));
      }
      console.log(questions);

      if (finishTest())
        return;

      showNextQuestion();
    }
  });
}

function showNextQuestion() {
  if (index >= questions.length) {
    return;
  }

  if (tag == 1)  {
    while (user.pretest.isSet(index))
      index++;
  }
  else if (tag == 2) {
    while (user.posttest.isSet(index))
      index++;
  }

  $('#question').text(questions[index].question);  

  var choices = questions[index].choices;

  $('#choices').html("");

  for (var i = 0; i != choices.length; i++) {
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'answer';
    input.value = (i + 1);
    $('#choices').append($(input));
    $('#choices').html($('#choices').html() + choices[i] + "<br/>");
  }

  index++;

  if (index >= questions.length) {
    return;
  }
}

