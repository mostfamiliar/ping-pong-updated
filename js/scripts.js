var pingpongValidator = function(number) {
  var num = parseInt(number);
  if (!isNaN(number)) {
    return true;
  }
  else {
    alert("Please enter a number");
    return false;
  }
};

var pingPonger = function(number) {
  var num = parseInt(number);
  var result =[];

  for (var i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push("pingpong");

    } else if (i % 3 === 0) {
      result.push("ping");

    } else if (i % 5 === 0) {
      result.push("pong");

    } else {
      var numList = i;
      numList.toString();
      result.push(numList);
    }
  };
  return result;
};


$(document).ready(function() {
  $("form#processNumber").submit(function(event) {
    var number = $("input#numberInput").val();
    var validation = pingpongValidator(number);
    var output = pingPonger(number);
    $("#textOutput").empty().append("<li>" + output.join("</li><li>"));
    (event).preventDefault();
  });
});
