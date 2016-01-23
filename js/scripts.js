var pingpongValidator = function(number) {
  var num = parseInt(number);
  if (isNaN(number)) {
    return false;
  }
  else {
    return true;
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
  $("h1").mouseover(function() {
  $("h1").effect("bounce", {distance: 10, times: 1},"slow")
  });

  $("form#processNumber").submit(function(event) {
    var number = $("input#numberInput").val();
    var validation = pingpongValidator(number);

    if (!validation) {
      $(".form-group").attr("class", "form-group has-error has-feedback");
      event.preventDefault();

    } else {
      var output = pingPonger(number);
      $("#textOutput").empty();
      // $("#textOutput").empty().append("<li>" + output.join("</li><li>"));
      for (var x = 0; x < output.length; x++) {
        looper = output[x];
        var $test = $("<li>").text(looper).hide().delay(100*x).fadeIn(300);
        $("#textOutput").append($test);
      }
    event.preventDefault();
    }

  });
});
