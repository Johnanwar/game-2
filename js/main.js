var player1 = 0;
var player2 = 0;
var cuurent1 =0;
var cuurent2 =0;
var qurrent1 = document.getElementById("current_0");
var qurrent2 = document.getElementById("current_1");
var score1 = document.getElementById("score_1");
var score2 = document.getElementById("score_2");
img = document.getElementById("dices");
var about = document.querySelector(".about")
var randomNumber ;


  $(".btn-roll").click( function(){
    randomNumber = Math.floor( Math.random()*6 + 1);

  // player 1 active
    if ($(".playerOne").hasClass("active") )
    {
            if (randomNumber !==1)
                  {
                    img.style.display ="block";
                    img.src = "./images/dice-"+randomNumber+".png";
                    cuurent1 += randomNumber;
                    qurrent1.textContent = cuurent1
                    player1 = cuurent1
                  } 
            else
                  {
                    img.style.display ="block";
                    img.src = "./images/dice-"+randomNumber+".png";
                    $(".playerOne").removeClass("active")
                    $(".playerTow").addClass("active")
                    cuurent1 = 0
                    qurrent1.textContent = cuurent1 
                  }
  }
      // player 2 active

  else 
  {
  
                  if (randomNumber !=1){
                      img.style.display ="block";
                      img.src = "./images/dice-"+randomNumber+".png";
                      cuurent2 += randomNumber;
                      qurrent2.textContent = cuurent2
                      player2 = cuurent2

                    } else
                    {
                      img.style.display ="block";
                      img.src = "./images/dice-"+randomNumber+".png";
                      $(".player").addClass("active")
                      cuurent2 = 0
                      qurrent2.textContent = cuurent1 ;
                      $(".playerOne").addClass("active")
                      $(".playerTow").removeClass("active")
                    }
    
  
  
  }
  
  });

//hold function

  $(".btn-hold").click(function() {
   var header = document.querySelector(".heading")
   var players = document.querySelector(".players")
   var playerrkm2 = document.querySelector(".playerTow")
   var hold = document.querySelector(".btn-hold ")


    if($(".playerOne").hasClass("active"))
        {
          $(".playerOne").removeClass("active")
          $(".playerTow").addClass("active")
           score1.textContent= player1

          if( player1 > 99)
          {
            players.style.display="none"
            hold.style.display="none"
            playerrkm2.style.display="none"
            header.style.display ="block";
            img.style.display ="none";
          }

        }
    else
        {
          $(".playerOne").addClass("active")
          $(".playerTow").removeClass("active")
          score2.textContent= player2
        }
        if(cuurent2 > 99)
        {
          players.style.display="none"
          playerrkm2.style.display="none"
          hold.style.display="none"
          header.style.display="block";
          img.style.display ="none";
          header.textContent="Congratualtions player tow  win the game"
        }


  });
  // reload page 
  $(".btn-new").click(function(){
    location.reload();
  })

  // exit about page 
  $(".exit").click(function(){
    $(".about").hide();
  });
  

    // display about page 
    $(".abou").click(function(){
      about.style.display="block";
    });
 



