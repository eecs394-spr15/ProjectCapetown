var questions = Array();
var currentIndex = 0;
var answerSlot = Array();
var correctNum = 0;

var canReturn = false;

document.addEventListener("deviceready", onReady, false);

function onReady() {
  var tmpIndex = location.href.substr(location.href.indexOf("=") + 1);
  var target = "case" + tmpIndex;

  $(document).on('click', '#next', function(){
    if (canReturn) {
      location.href = 'cases.html';
      return;
    }

    $('#hint').hide();

    var error = questions[currentIndex - 1].errors;
    var correctSelection = 0;
    var errorSelection = 0;

    $("input").each(function(){
      var tmpIndex = parseInt($(this).val());
      if ($(this).prop("checked")) {
        if (answerSlot[tmpIndex] == 0) {
          errorSelection++;
          $('#hint').show();
          $('#' + (tmpIndex - 1)).html(error[tmpIndex - 1]);
        } else {
          correctSelection++;
        }
      } else {
        $('#' + (tmpIndex - 1)).html("");
      }
    });

    if (correctNum == correctSelection && errorSelection == 0) {
      if (currentIndex != questions.length)
        showNextQuestion();
      else {
        $('#question').text("Congratulations! You have complete this case");
        $('#choices').hide();
        canReturn = true;
      }
    } else {
      $('#hint').show();
    }
  });

  $('#hint').hide();

  $.ajax({
    url: "res/data/" + target,
    async: false,
    success: function(data) {
      var result = JSON.parse(data);   
      for (var i = 0; i != result.length; i++) {
        questions.push(jsonToCaseQuestion(result[i]));
      }

      console.log(questions);

      showNextQuestion();
    }
  });
}

function showNextQuestion() {
  if (currentIndex >= questions.length) {
    return;
  }

  var index = currentIndex;
  var tmp = questions[index].question;

  $('#question').text(tmp);  

  var choices = questions[index].answers;

  $('#choices').html("");

  for (var i = 0; i != choices.length; i++) {
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'answer';
    input.value = (i + 1);
    $('#choices').append($(input));
    var error = document.createElement('span');
    error.className = 'red';
    error.id = i + "";
    $('#choices').html($('#choices').html() + choices[i] + "<br/>");
    $('#choices').append(error);
    $('#choices').append(document.createElement('br'));
  }
  
  answerSlot = Array();

  var answer = questions[index].right;

  for (var i = 0; i != choices.length; i++) {
    answerSlot.push(0);
  }

  for (var i = 0; i != answer.length; i++) {
    var index = parseInt(answer[i]);
    answerSlot[index] = 1;
  }

  correctNum = answer.length;

  currentIndex++;

  if (currentIndex >= questions.length) {
    return;
  }
}

function getSelected() {
  var array = new Array();

  $("input").each(function(index){
    if ($(this).prop("checked")) {
      array.push($(this).val());
    }
  });

  return array;
}

