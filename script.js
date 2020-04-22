$(function () {
  $("#submitButton").click(function () {
    var firstN = $("#firstNumber").val();
    var secondN = $("#secondNumber").val();
    var sum = parseInt(firstN) + parseInt(secondN);
    var prod = parseInt(firstN) * parseInt(secondN);

    if (firstN == secondN) {
      alert("Please enter different numbers!");
    } else {
      $("#sum").html(sum);
      $("#product").html(prod);
      if (firstN < secondN) {
        $("#bigVal").html(
          "The first number (" +
            firstN +
            ") is <b>SMALLER</b> than the second number(" +
            secondN +
            ")"
        );
      } else {
        $("#bigVal").html(
          "The first number (" +
            firstN +
            ") is <b>BIGGER</b> than the second number(" +
            secondN +
            ")"
        );
      }
    }
  });
});
