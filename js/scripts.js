$(document).ready(function() {
  $(".seal").hide();
  $(".giraffe").hide();
  $(".dog").hide();
  $("#form1").submit(function(event) {
  event.preventDefault();
  var animal = $("#animal").val();

  if(animal === "Seal") {
    $(".seal").show();
    $(".giraffe").hide();
    $(".dog").hide();
  } else if(animal === "Giraffe") {
    $(".giraffe").show();
    $(".dog").hide();
    $(".seal").hide();
  } else {
    $(".dog").show();
    $(".seal").hide();
    $(".giraffe").hide();
  }
  });
});
