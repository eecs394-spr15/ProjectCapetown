$(document).ready(function(){
 
  $.each($('.flowchart-triangle > img'), function(){
    var width = $(this).width();
    $(this).css("margin-left", -1 * width / 2 + "px");
  });

  $.each($('.flowchart-triangle-content'), function(){
    var width = $(this).width();
    $(this).css("margin-left", -1 * width / 2 + "px");
  });

  $('.flowchart-group').hide();
});

$(document).on('click', '.flowchart-component', function(){
  if (this.parentElement.activated == undefined) {
    this.parentElement.activated = 1;  
    $('#' + $(this).attr('data-next')).show();
  }
});


