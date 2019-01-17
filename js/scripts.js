$(document).ready(function() {
  $(".seal").hide();
  $(".giraffe").hide();
  $(".dog").hide();
  $("#form1").submit(function(event) {
  event.preventDefault();
  var animal = parseInt($("#animal").val());
  console.log(animal);

  if(animal === 1) {
    $(".seal").show();
    $(".giraffe").hide();
    $(".dog").hide();
  } else if(animal === 2) {
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
