var score = 5;
var drinks = 0;
var fire = 0;
var waiter = 0;
var subject = "";
var name = "";
var fistslam = 0;
var frame
function nextFrame(){
  
};
$(document).ready(function(){
  $(".click").click(function(){
    $("#title").hide();
    $("#frame1").show();
  });
  $("button[name=good]").click(function(){
    score = score + 1;
  });
  $("button[name=ok]").click(function(){

  });
  $("button[name=bad]").click(function(){
    score = score -3;
  });
  $("button[name=trump]").click(function(){
    subject = "trump"
  });
  $("button[name=lie]").click(function(){
    subject = "how you used your superior intelect to make billions from the stock market"
  });
  $("button[name=trek]").click(function(){
    subject = "Startrek"
  });
});
//   $("#frame1 .choice1").click(function(){
//     $("#frame1").hide();
//     $("#frame2").show();
//   });
//   $("#frame1 .choice2").click(function(){
//     $("#frame1").hide();
//     $("#frame2").show();
//   });
//   $("#frame1 .choice3").click(function(){
//     $("#frame1").hide();
//     $("#frame2").show();
//   });
//   $("#frame1 .choice4").click(function(){
//     $("#frame1").hide();
//     $("#kickedout").show();
//   });
//   $("#frame2 button").click(function(){
//     name = $("input[type=text]").val();
//     $(".username").text(name);
//     $("#frame2").hide();
//     $("#frame4").show();
//   });
//   $("#frame4 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame4").hide();
//     $("#frame5").show();
//   });
//   $("#frame4 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame4").hide();
//     $("#frame5").show();
//   });
//   $("#frame4 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame4").hide();
//     $("#frame5").show();
//   });
//
//
//   $("#frame5 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame5").hide();
//     $("#offensive").show();
//   });
//   $("#frame5 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame5").hide();
//     $("#frame10").show();
//   });
//   $("#frame5 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame5").hide();
//     $("#frame6").show();
//   });
//
//
//   $("#frame6 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame6").hide();
//     $("#offensive").show();
//   });
//   $("#frame6 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame6").hide();
//     $("#frame7").show();
//   });
//   $("#frame6 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame6").hide();
//     $("#frame7").show();
//   });
//
//
//
//
//   $("#frame7 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame7").hide();
//     $("#frame9").show();
//   });
//   $("#frame7 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame7").hide();
//     $("#frame9").show();
//   });
//   $("#frame7 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame7").hide();
//     $("#frame9").show();
//   });
//   $("#frame7 .choice4").click(function(){
//     $(".username").text(name);
//     $("#frame7").hide();
//     $("#kickedout").show();
//   });
//
//
//   $("#frame8 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame8").hide();
//     $("#frame9").show();
//   });
//   $("#frame8 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame8").hide();
//     $("#frame9").show();
//   });
//   $("#frame8 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame8").hide();
//     $("#badEnding").show();
//   });
//
//
//   $("#frame9 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame9").hide();
//     $("#frame11").show();
//   });
//   $("#frame9 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame9").hide();
//     $("#frame11").show();
//   });
//   $("#frame9 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame9").hide();
//     $("#frame11").show();
//   });
//
//
//   $("#frame10 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame10").hide();
//     $("#frame11").show();
//   });
//   $("#frame10 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame10").hide();
//     $("#frame6").show();
//   });
//   $("#frame10 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame10").hide();
//     $("#frame11").show();
//   });
//
//   $("#frame11 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame11").hide();
//     $("#offensive").show();
//   });
//   $("#frame11 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame11").hide();
//     $("#frame12").show();
//   });
//   $("#frame11 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame11").hide();
//     $("#frame12").show();
//   });
//
//
//
//   $("#frame12 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame12").hide();
//     $("#frame13").show();
//   });
//   $("#frame12 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame12").hide();
//     $("#frame13").show();
//   });
//   $("#frame12 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame12").hide();
//     $("#frame13").show();
//   });
//
//   $("#frame13 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame13").hide();
//     $("#kickedout").show();
//   });
//   $("#frame13 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame13").hide();
//     $("#frame8").show();
//   });
//   $("#frame13 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame13").hide();
//     $("#frame8").show();
//   });
//
//   $("#frame14 .choice1").click(function(){
//     $(".username").text(name);
//     $("#frame14").hide();
//     $("#frame15").show();
//   });
//   $("#frame14 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame14").hide();
//     $("#frame15").show();
//   });
//   $("#frame14 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame14").hide();
//     $("#frame15").show();
//   });
//
//
//   $("#frame15 choice1").click(function(){
//     $(".username").text(name);
//     $("#frame15").hide();
//     $("#frame15").show();
//   });
//   $("#frame15 .choice2").click(function(){
//     $(".username").text(name);
//     $("#frame15").hide();
//     $("#kickedout").show();
//   });
//   $("#frame15 .choice3").click(function(){
//     $(".username").text(name);
//     $("#frame15").hide();
//     $("#frame15").show();
//   });
//
//   $("#offensive .choice1").click(function(){
//     $(".username").text(name);
//     $("#offensive").hide();
//     $("#frame6").show();
//   });
//   $("#offensive .choice2").click(function(){
//     $(".username").text(name);
//     $("#offensive").hide();
//     $("#badEnding").show();
//   });
//   $("#offensive .choice3").click(function(){
//     $(".username").text(name);
//     $("#offensive").hide();
//     $("#badEnding").show();
//   });
// });
