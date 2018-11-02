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
  $("#frame4 .choice1").click(function(){
    $(".username").text(name);
    $("#frame4").hide();
    $("#frame5").show();
  });
  $("#frame4 .choice2").click(function(){
    $(".username").text(name);
    $("#frame4").hide();
    $("#frame5").show();
  });
  $("#frame4 .choice3").click(function(){
    $(".username").text(name);
    $("#frame4").hide();
    $("#frame5").show();
  });


  $("#frame5 .choice1").click(function(){
    $(".username").text(name);
    $("#frame5").hide();
    $("#offensive").show();
  });
  $("#frame5 .choice2").click(function(){
    $(".username").text(name);
    $("#frame5").hide();
    $("#frame6").show();
  });
  $("#frame5 .choice3").click(function(){
    $(".username").text(name);
    $("#frame5").hide();
    $("#frame6").show();
  });


  $("#frame6 .choice1").click(function(){
    $(".username").text(name);
    $("#frame6").hide();
    $("#offensive").show();
  });
  $("#frame6 .choice2").click(function(){
    $(".username").text(name);
    $("#frame6").hide();
    $("#frame7").show();
  });
  $("#frame6 .choice3").click(function(){
    $(".username").text(name);
    $("#frame6").hide();
    $("#frame7").show();
  });




  $("#frame7 .choice1").click(function(){
    $(".username").text(name);
    $("#frame7").hide();
    $("#frame8").show();
  });
  $("#frame7 .choice2").click(function(){
    $(".username").text(name);
    $("#frame7").hide();
    $("#frame8").show();
  });
  $("#frame7 .choice3").click(function(){
    $(".username").text(name);
    $("#frame7").hide();
    $("#frame8").show();
  });
  $("#frame7 .choice4").click(function(){
    $(".username").text(name);
    $("#frame7").hide();
    $("#kickedout").show();
  });


  $("#frame8 .choice1").click(function(){
    $(".username").text(name);
    $("#frame8").hide();
    $("#frame9").show();
  });
  $("#frame8 .choice2").click(function(){
    $(".username").text(name);
    $("#frame8").hide();
    $("#frame9").show();
  });
  $("#frame8 .choice3").click(function(){
    $(".username").text(name);
    $("#frame8").hide();
    $("#badEnding").show();
  });


  $("#frame9 .choice1").click(function(){
    $(".username").text(name);
    $("#frame9").hide();
    $("#frame10").show();
  });
  $("#frame9 .choice2").click(function(){
    $(".username").text(name);
    $("#frame9").hide();
    $("#frame10").show();
  });
  $("#frame9 .choice3").click(function(){
    $(".username").text(name);
    $("#frame9").hide();
    $("#frame10").show();
  });


  $("#frame10 .choice1").click(function(){
    $(".username").text(name);
    $("#frame10").hide();
    $("#frame11").show();
  });
  $("#frame10 .choice2").click(function(){
    $(".username").text(name);
    $("#frame10").hide();
    $("#frame11").show();
  });
  $("#frame10 .choice3").click(function(){
    $(".username").text(name);
    $("#frame10").hide();
    $("#frame11").show();
  });




  $("#frame11 .choice1").click(function(){
    $(".username").text(name);
    $("#frame11").hide();
    $("#frame12").show();
  });
  $("#frame11 .choice2").click(function(){
    $(".username").text(name);
    $("#frame11").hide();
    $("#frame12").show();
  });
  $("#frame11 .choice3").click(function(){
    $(".username").text(name);
    $("#frame11").hide();
    $("#frame12").show();
  });



  $("#frame12 .choice1").click(function(){
    $(".username").text(name);
    $("#frame12").hide();
    $("#frame13").show();
  });
  $("#frame12 .choice2").click(function(){
    $(".username").text(name);
    $("#frame12").hide();
    $("#frame13").show();
  });
  $("#frame12 .choice3").click(function(){
    $(".username").text(name);
    $("#frame12").hide();
    $("#frame13").show();
  });
  $("#frame13 button").click(function(){
    $(".username").text(name);
    $("#frame13").hide();
    $("#frame14").show();
  });
  $("#frame13 .choice1").click(function(){
    $(".username").text(name);
    $("#frame13").hide();
    $("#kickedout").show();
  });
  $("#frame13 .choice2").click(function(){
    $(".username").text(name);
    $("#frame13").hide();
    $("#frame14").show();
  });
  $("#frame13 .choice3").click(function(){
    $(".username").text(name);
    $("#frame13").hide();
    $("#frame14").show();
  });

  $("#frame14 .choice1").click(function(){
    $(".username").text(name);
    $("#frame14").hide();
    $("#frame15").show();
  });
  $("#frame14 .choice2").click(function(){
    $(".username").text(name);
    $("#frame14").hide();
    $("#frame15").show();
  });
  $("#frame14 .choice2").click(function(){
    $(".username").text(name);
    $("#frame14").hide();
    $("#frame15").show();
  });


  $("#frame15 choice1").click(function(){
    $(".username").text(name);
    $("#frame15").hide();
    $("#frame15").show();
  });
  $("#frame15 .choice2").click(function(){
    $(".username").text(name);
    $("#frame15").hide();
    $("#kickedout").show();
  });
  $("#frame15 .choice3").click(function(){
    $(".username").text(name);
    $("#frame15").hide();
    $("#frame15").show();
  });
  $("#offensive .choice1").click(function(){
    $(".username").text(name);
    $("#frame15").hide();
    $("#frame15").show();
  });
  $("#offensive .choice2").click(function(){
    $(".username").text(name);
    $("#frame15").hide();
    $("#frame15").show();
  });
  $("#offensive .choice3").click(function(){
    $(".username").text(name);
    $("#frame15").hide();
    $("#frame15").show();
  });
});
