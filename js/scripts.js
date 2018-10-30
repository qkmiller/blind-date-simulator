score = 0;
$(document).ready(function(){
  var name = "";
  $(".click").click(function(){
    $("#title").hide();
    $("#frame1").show();
  });
  $("#frame1 .choice1").click(function(){
    $("#frame1").hide();
    $("#frame2").show();
  });
  $("#frame1 .choice2").click(function(){
    $("#frame1").hide();
    $("#frame2").show();
  });
  $("#frame1 .choice3").click(function(){
    $("#frame1").hide();
    $("#frame2").show();
  });
  $("#frame1 .choice4").click(function(){
    $("#frame1").hide();
    $("#kickedout").show();
  });
  $("#frame2 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame2").hide();
    $("#frame4").show();
  });
});
