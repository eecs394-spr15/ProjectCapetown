function Question(id, question, choices, answer) {
  this.id = id;
  this.question = question;
  this.choices = choices.split(",");
  this.answer = answer.split(",");

  for (var i = 0; i != this.choices.length; i++) {
    this.choices[i] = this.choices[i].trim();
  }

  for (var i = 0; i != this.answer.length; i++) {
    this.answer[i] = this.answer[i].trim();
  }
}

function Test(size) {
  this.questions = new Array(size);
  this.count = 0;
}

Test.prototype.getCount = function(){
  return this.count;
}

Test.prototype.setIndex = function(index, answer) {
  this.questions[index] = answer;
  this.count++;
}

Test.prototype.isSet = function(index) {
  return this.questions[index] != undefined;
}

function User(username, count) {
  this.name = username;
  this.pretest = new Test(20);
  this.posttest = new Test(20);
}

function jsonToTest(jsonObject) {
  var test = new Test(jsonObject.questions.length);
  test.questions = jsonObject.questions;
  test.count = jsonObject.count;
  return test;
}

function jsonToUser(jsonObject) {
  var user = new User(jsonObject.name, jsonObject.pretest.questions.length);
  user.pretest = jsonToTest(jsonObject.pretest);
  user.posttest = jsonToTest(jsonObject.posttest);

  return user;
}

function CaseQuestion(question, answers, rightIndex, errors) {
  this.question = question;
  this.answers = answers;
  this.right = rightIndex;
  this.errors = errors;
}

function jsonToCaseQuestion(jsonObject) {
  var question = jsonObject.question;
  var answers = jsonObject.answers;
  var right = jsonObject.right;
  var errors = jsonObject.errors;
  
  return new CaseQuestion(question, answers, right, errors);
}
