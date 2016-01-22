var pingPonger = function(number) {
  var num = parseInt(number);
  var result =[];

  for (var i = 1; i <= num; i++) {
    if (i % 3 === 0) {
      result.push("ping");
      }
    else if (i % 5 === 0) {
      result.push("pong");
    }
    else if (i % 5 === 0 && i % 3 === 0) {
      result.push("pingpong");
    }
    else {
      var numList = i;
      numList.toString();
      console.log(numList);
      result.push(numList);
    }
//    var processedOutput = result.join();
  };
  console.log(result);
   return result;
};

$(document).ready(function() {
  $("form#numeralProcess").submit(function(event) {
    var number = $("input#numberInput").val();
    console.log(number);
    var output = pingPonger(number);
    $("#textOutput").text(output);
    (event).preventDefault();
  })
});
