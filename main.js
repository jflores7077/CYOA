let onDocReady = ()=>{
  $("#shade").addClass("calm");
  $("#shade").css("opacity","0")
  const buttons = $(".option");
  const headDiv = $("#head");
  const headCont = $("#head_cont");
  const typewriteDiv = $("#typewriter h3")
  let intro = true;
  let done = false;

  let JamiePullThatUp = ()=>{
    if(!intro){
      $("#head_background").css("top","0vh")
      $("#head_sky").css("top","0vh")
      //typeNext = story1.getStory()
      headCont.css("top","-27.5vh")
      headDiv.toggleClass("user story")
      headDiv.css("animation-name","head-min");
      $("#head_background").css("top","-55vh")
      $("#head_sky").css("top","-55vh")
      $(buttons[0]).html(story1.getChoiceInfo("a"))
      $(buttons[1]).html(story1.getChoiceInfo("b"))
      type();
    }else{
      window.setTimeout(function(){
        //type();
        console.log('AAAA')
      },1000)
      intro = false;
    }
  }
  let JamiePutThatAway = ()=>{
    headCont.css("top","0vh")
    headDiv.toggleClass("user story")
    headDiv.css("animation-name","head-max");
    $("#head_background").css("top","0vh")
    $("#head_sky").css("top","-100vh")
  
  }
  let chose = [];
  let skipped = false;
  let story1 = new Story(chose);
  let dblClicked = false;
  let typeNext = story1.getStory();
  let canClick = true;
  
  //typewriteDiv.html(back[0])
  //typewriteDiv.on("webkitAnimationEnd", JamiePullThatUp);
  
  var twI = 0;
  var speed = 50; /* The speed/duration of the effect in milliseconds */
  let canType = true;
  let waitTime= 1000;
  function type() {
    canClick = true;
    if(intro){
      twTxt = back[0];
    }else{
      twTxt = typeNext;
    }
    let twTxtL = twTxt.length;
    console.log(twTxt)
    if (twI < twTxtL ) {
      $("#typewriter h3").append(twTxt.charAt(twI));
      twI++;
      setTimeout(type, speed);
    }else if(canType){
      console.log(2)
      if(skipped){
        waitTime = 1000+(twTxtL*55);
      }else{
        waitTime = 1000;
      }
      setTimeout(function(){
        twI = 0;
        intro = false;
        $("#typewriter h3").html("")
        if(!intro && !story1.ended()&&twI < twTxtL){
          JamiePullThatUp()
          type()
        }else{
          $("#typewriter h3").append(twTxt.charAt(twI));
          twI++;
          setTimeout(type, speed);

        }
      },waitTime)
      canType = false;
    }
  }
  
  type();
  function optionClicked(){
    if((!story1.ended()) && canClick){
      let UserClicked = $(this).attr("id");
      console.log(UserClicked)
      if(UserClicked === "choice_a"){
        story1.addChose("a");
      }else{
        story1.addChose("b");
      }
      
      dblClicked = false;
      canClick = false;
      typeNext = story1.getStory();
    }
    canType = true;
    type();
    JamiePutThatAway();
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
  buttons.click(function(){
    skip = false;
    optionClicked()
  })
}
$(document).ready(onDocReady);