let onDocReady = ()=>{
  const buttons = $(".option");
  const headText = document.getElementById('head_text');
  const headDiv = $("#head");
  const headCont = $("#head_cont");
  
  let JamiePullThatUp = ()=>{
    $("#head_background").css("top","0vh")
    //typeNext = story1.getStory()
    headCont.css("top","-27.5vh")
    headDiv.toggleClass("user story")
    headDiv.css("animation-name","head-min");
    $("#head_background").css("top","-55vh")
    $(buttons[0]).html(story1.getChoiceInfo("a"))
    $(buttons[1]).html(story1.getChoiceInfo("b"))
  }
  let JamiePutThatAway = ()=>{
    headCont.css("top","0vh")
    headDiv.toggleClass("user story")
    headDiv.css("animation-name","head-max");
    $("#head_background").css("top","0vh")
  }
  let chose = [];
  let story1 = new Story(chose);
  let dblClicked = false;
  let typeNext = story1.getStory();
  let typewriterConfig = {
    strings: back,
    autoStart:true,
    loop:false,
    delay: "natural"
  }
  const typewriter = new Typewriter(headText, typewriterConfig)
  typewriter.deleteAll()
    .typeString(typeNext)
    .callFunction(JamiePullThatUp)
    .start();
  let type = ()=>{
    typeNext = story1.getStory();
    if(dblClicked){
      typewriter.pause()
        .callFunction(JamiePullThatUp)
        .start();
      console.log(2)
      //console.log($(".Typewriter__wrapper").html(typeNext));
    }else{
      dblClicked = true;
      typewriter.deleteAll()
        .typeString(typeNext)
        .callFunction(JamiePullThatUp)
        .start();
    }
    
  }
  function optionClicked(){
    let UserClicked = $(this).attr("id");
    if(UserClicked === "choice_a"){
      story1.addChose("a");
    }else{
      story1.addChose("b");
    }
    dblClicked = false;
    JamiePutThatAway();
    type();
  }
  $("#head").click(type);
  buttons.click(optionClicked)
}
$(document).ready(onDocReady);