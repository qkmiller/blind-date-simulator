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
  $("#frame4 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame4").hide();
    $("#frame5").show();
  });
  $("#frame5 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame5").hide();
    $("#frame6").show();
  });
  $("#frame6 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame6").hide();
    $("#frame7").show();
  });
  $("#frame7 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame7").hide();
    $("#frame8").show();
  });
  $("#frame8 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame8").hide();
    $("#frame9").show();
  });
  $("#frame9 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame9").hide();
    $("#frame10").show();
  });
  $("#frame10 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame10").hide();
    $("#frame11").show();
  });
  $("#frame11 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame11").hide();
    $("#frame12").show();
  });
  $("#frame12 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame12").hide();
    $("#frame13").show();
  });
  $("#frame13 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame13").hide();
    $("#frame14").show();
  });
  $("#frame14 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame13").hide();
    $("#frame14").show();
  });
  $("#frame15 button").click(function(){
    name = $("input[type=text]").val();
    $(".username").text(name);
    $("#frame15").hide();
    $("#frame15").show();
  });
});
