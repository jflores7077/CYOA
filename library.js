/*
JAVIER F.
3/15/19
*/
//Story
const choices = abc123;
const back = ["Welcome. You are playing John Johnstone. Johnstone is a very intelligent person. Your mother, however, is dead. You live in new york, Johnstone seeked a job in Archeology. Johnstone found it.This is the story of how Johnstone found out about his past."];
let textReady = false;
//Story class
class Story {
  constructor(chose) {
    //Choices that the user has made.
    this.chose = chose;
    //Deep clone of choices(story)
    this.x = JSON.parse(JSON.stringify(choices));
    //First choice is at 0
    this.i = -1;
  }
  ended(){
    console.log((this.x.options?false:true)+"LMAO")
    return this.x.options?false:true;
  }
  //Return part of story you're on
  getStory(){
    textReady = false;
    if(this.chose.length > 0){
      this.x = this.x.options[this.chose[this.i]];
    }else{
      this.x = this.x;
    }
    return this.x.msg;
  }

  //Return available choice.
  getChoiceInfo(choiceInfo){
    textReady = true;
    return this.x.options[choiceInfo].info;
  }
  //Add user choice
  addChose(a){
    this.chose[this.chose.length] = a;
    this.i+=1;
  }
}
let typeScreen = true;
function swipeTop(){
  if(!typeScreen){
    $("#head").animate({
      "top":"0vh"
    },500)

    typeScreen = true;

  }
};

function swipeBottom(storyEnded){
  if(typeScreen && textReady && !storyEnded){
    $("#head").animate({
      "top":"-100vh"
    },500)
    typeScreen = false;

  }
};
