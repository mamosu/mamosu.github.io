function setup(){
  $('#submit').click(submit);
  $('#response').hide();

}

function submit(){
  var username = $('#username').val();
  $('#response').text(username);
  $('#response').show();

}

$(document).ready(setup)
