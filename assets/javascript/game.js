$(document).ready(function() {
  var randomNum = Math.floor(Math.random() * 110) + 20;
  $(".randomNum").html(randomNum);
  var gem1 = Math.floor(Math.random() * 12);
  var gem2 = Math.floor(Math.random() * 12);
  var gem3 = Math.floor(Math.random() * 12);
  var gem4 = Math.floor(Math.random() * 12);
  console.log(gem1);
  console.log(gem2);
  console.log(gem3);
  console.log(gem4);
  var yourWins = 0;
  var yourLosses = 0;
  var totalScore = 0;
  $("#totalScore").text(totalScore);
  function numberOfWins() {
    yourWins = yourWins + 1;
    $("#yourWins").text(yourWins);
  }
  function numberOfLosses() {
    yourLosses = yourLosses + 1;
    $("#yourLosses").text(yourLosses);
  }
  $("#gem1").click(function() {
    totalScore = totalScore + gem1;
    $("#totalScore").text(totalScore);
    if (totalScore === randomNum) {
      numberOfWins();
      resetTotalScore();
      resetGemNum();
    } else if (totalScore > randomNum) {
      numberOfLosses();
      resetTotalScore();
      resetGemNum();
    }
  });
  $("#gem2").click(function() {
    totalScore = totalScore + gem2;
    $("#totalScore").text(totalScore);
    if (totalScore === randomNum) {
      numberOfWins();
      resetTotalScore();
      resetGemNum();
    } else if (totalScore > randomNum) {
      numberOfLosses();
      resetTotalScore();
      resetGemNum();
    }
  });
  $("#gem3").click(function() {
    totalScore = totalScore + gem3;
    $("#totalScore").text(totalScore);
    if (totalScore === randomNum) {
      numberOfWins();
      resetTotalScore();
      resetGemNum();
    } else if (totalScore > randomNum) {
      numberOfLosses();
      resetTotalScore();
      resetGemNum();
    }
  });
  $("#gem4").click(function() {
    totalScore = totalScore + gem4;
    $("#totalScore").text(totalScore);
    if (totalScore === randomNum) {
      numberOfWins();
      resetTotalScore();
      resetGemNum();
    } else if (totalScore > randomNum) {
      numberOfLosses();
      resetTotalScore();
      resetGemNum();
    }
  });
  function resetTotalScore() {
    totalScore = 0;
    $("#totalScore").text(totalScore);
  }
  function resetGemNum() {
    randomNum = Math.floor(Math.random() * (100 - 10 + 1) + 10);
    $(".randomNum").html(randomNum);
    gem1 = Math.floor(Math.random() * (15 - 1 + 1) + 1);
    gem2 = Math.floor(Math.random() * (13 - 1 + 1) + 1);
    gem3 = Math.floor(Math.random() * (11 - 1 + 1) + 1);
    gem4 = Math.floor(Math.random() * (9 - 1 + 1) + 1);
  }
});
