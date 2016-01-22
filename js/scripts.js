var pingPonger = function(number) {
  var num = parseInt(number);

  for (var i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      var result = "ping pong";
    }
    else if (i % 3 === 0) {
      var result = "ping";
      }
    else if (i % 5 === 0) {
      var result = "pong";
    }
    else {

    }
  };
  return result;
};

$(document).ready(function() {
  $("form#numeralProcess").submit(function(event) {
    var num = $("#numberInput").val();
    var output = pingPonger(num);
    $("#textOutput").text(output);
    (event).preventDefault();
  })
});
