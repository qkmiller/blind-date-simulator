var score = 6;
var drinks = 0;
var fire = 0;
var waiter = 0;
var subject = "";
var name = "";
var fistslam = 0;
var frame = 0;
var chances = "second";
function nextFrame(){
  var x=$(".frame").eq(frame);
  x.css("display", "none");
  frame+=1;
  var x=$(".frame").eq(frame);
  x.css("display", "block");
  console.log(score);
};
function scoreCheck(){
  $("div:not(.frame, .jumbotron, .container)").hide();
  if (score>0) {
    nextFrame();
  } else {
    $(".frame").hide();
    $("#offensive").show();
  }
};
function chanceCheck(){
  if (chances==="second") {
    chances="third";
    $("div:not(.frame, .jumbotron, .container)").hide();
    nextFrame();
    $("#chancelevel").text(chances);
  } else {
    $("div:not(.frame, .jumbotron, .container)").hide();
    $("#badend3").show();
  }
};
function endCheck(){
  if (score>=30) {
    $(".frame").hide();
    $("#goodend1").show();
  } else if (score>=15) {
    if (subject==="Startrek") {
      $(".frame").hide();
      $("#trekend1").show();
    } else {
      $(".frame").hide();
      $("#okend").show();
    }
  } else {
    if (subject==="Startrek") {
      $(".frame").hide();
      $("#trekend2").show();
    } else {
      $(".frame").hide();
      $("#badend4").show();
    }
  }
}
$(document).ready(function(){
  $(".click").click(function(){
    $("#title").hide();
    var x=$(".frame").eq(frame);
    x.css("display", "block");
  });
  $("button[name=good]").click(function(){
    score += 2;
    scoreCheck();
  });
  $("button[name=ok]").click(function(){
    score += -1
    scoreCheck();
  });
  $("button[name=neut]").click(function(){
    scoreCheck();
  });
  $("button[name=bad]").click(function(){
    score += -3;
    scoreCheck();
  });
  $("button[name=trump]").click(function(){
    subject = "about Trump";
    score += -5;
    $(".frame").hide();
    $("#trump").show();
  });
  $("button[name=next]").click(function(){
    $("#trump").hide();
    $("#trek").hide();
    $("#drunk1").hide();
    $("#offensive").hide();
    scoreCheck();
  });
  $("button[name=lie]").click(function(){
    subject = "about how you used your superior intelect to make billions from the stock market";
    score += -3;
    scoreCheck();
  });
  $("button[name=trek]").click(function(){
    subject = "Startrek";
    score += 5;
    $(".frame").hide();
    $("#trek").show();
  });
  $("button[name=fire]").click(function(){
    $(".frame").hide();
    $("#fireend").show();
  });
  $("button[name=username]").click(function(){
    username = $("input[type=text]").val();
    nextFrame();
  });
  $("button[name=ditch]").click(function(){
    $(".frame").hide();
    if (score>5) {
      $("#ditchend2").show();
    } else {
      $("#ditchend1").show();
    }
  });
  $("button[name=badend1]").click(function(){
    $(".frame").hide();
    $("#offensive").hide();
    $("#badend1").show();
  });
  $(".drink").click(function(){
    drinks +=1;
    console.log(drinks);
    console.log(score);
    if (drinks>2) {
      $(".frame").hide();
      $("#drunk1").show();
    }
  });
  $(".chance").click(function(){
    chanceCheck();
    score=1;
    console.log(score);
  });
  $(".final").click(function(){
    endCheck();
  });
  $(".noframeskip").click(function(){
    frame+= -1;
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
