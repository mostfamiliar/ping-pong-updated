var pingPonger = function(number) {
  var num = parseInt(number);
  var result =[];

  for (var i = 1; i <= num; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      result.push("pingpong");

    }
    else if (i % 3 === 0) {
      result.push("ping");
      }
    else if (i % 5 === 0) {
      result.push("pong");
    }
    else {
      result.push(i);
    }
    var processedOutput = result.join(" ");
  };
   return processedOutput;
};

$(document).ready(function() {
  $("form#numeralProcess").submit(function(event) {
    var number = $("input#numberInput").val();
    console.log(number);
    var output = pingPonger(number);
    $("#textOutput").text(output + "<br>");
    (event).preventDefault();
  })
});
