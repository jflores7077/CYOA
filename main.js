let onDocReady = ()=>{
  const buttons = $(".option");
  let intro = true;
  let chose = [];
  let story1 = new Story(chose);
  let typeNext = story1.getStory();
  let canClick = true;
  var twI = 0;
  var speed = 15; /* The speed/duration of the effect in milliseconds */
  let waitTime= 500;
  $("#bottom").mouseover(function(){
    swipeBottom(story1.ended())
  });
  function type() {
    //If in intro, use back[0]
    if(intro){
      twTxt = back[0];
    }else{
      twTxt = typeNext;
    }
    //typewriter
    let twTxtL = twTxt.length;
    if (twI < twTxtL ) {
      $("#typewriter h3").append(twTxt.charAt(twI));
      twI++;
      setTimeout(type, speed);
    }else{
      canClick = true;
      twI = 0;
      waitTime = (twTxtL);
      if(intro)
        waitTime = (twTxtL*18)
      console.log("calcualted wait"+waitTime)
      setTimeout(function(){
        if(intro){
          console.log("done")
          setTimeout(type, speed);
          $("#typewriter h3").html("");
          $("#head_sky").css("top","-50vh")
          $("#head_background").css("top","0vh")
          intro = false;

        }else{
          $(buttons[0]).html(story1.getChoiceInfo("a"))
          $(buttons[1]).html(story1.getChoiceInfo("b"))

        }
      }, waitTime);
    }
  }
  
  function optionClicked(e){
    swipeTop();
    let clickedOn = e.currentTarget;
    if((!story1.ended()) && canClick){
      let UserClicked = $(clickedOn).attr("id");
      if(UserClicked === "choice_a"){
        story1.addChose("a");
        console.log("clicked a")
      }else{
        story1.addChose("b");
        console.log("clicked b")
      }
      
      dblClicked = false;
      canClick = false;
      typeNext = story1.getStory();
    }
    canType = true;
    type();
  }
  let skip = ()=>{
    skipped = true;
    $("#typewriter h3").html("")
    if(intro){
      twI = back[0].length+1;
      $("#typewriter h3").html(back[0])
    }else{
      twI = typeNext.length+1;
      $("#typewriter h3").html(typeNext)
    }
  }
  let teamIntro = false;
  $("#credits_text").css("opacity","1");
  setTimeout(function(){
    $("#credits_text span").css("opacity","1")
    $("#typewriter").css("width","90%");
  },1500)
  setTimeout(function(){
    $("#shade").addClass("calm");
    $("#shade").css("opacity","0")
    $("#typewriter").css("height","80%");
    $("#typewriter").css("border-radius","20px");
    type();
    $("#credits_text").css("opacity","0");
    setTimeout(function(){
    },4000)

  },5000)
  $("#head").click(skip);
  buttons.mousedown(function(){
    $("#shade").removeClass();
    $("#shade").addClass("clickBefore");
    $("#shade").css("opacity","0.75");
  })
  buttons.mouseout(function(){
    $("#shade").removeClass();
    $("#shade").addClass("clickBefore");
    $("#shade").css("opacity","0");
  })
  buttons.mouseup(function(){
    $("#shade").removeClass();
    $("#shade").addClass("clickAfter");
    $("#shade").css("opacity","0");
  })
  buttons.click(function(e){
    skip = false;
    twI = 0;
    $("#typewriter").scrollTop(0);
    $("#typewriter h3").html("");
    optionClicked(e)
    if(story1.ended()){
      setTimeout(function(){
        $("#head_sky").css("transition-duration","65s");
        $("#head_background").css("transition-duration","35s");
        $("#head").css("transition-duration","25s");
        $("#head_sky").css("top","-100vh");
        $("#head_background").css("top","200vh");
        //$("#head").css("background","rgb(100, 10, 10)");
        

      },1000)
    }
  })
}
$(document).ready(onDocReady);