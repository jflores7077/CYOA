/*
JAVIER F.
3/15/19
*/
//Story
const choices = abc123;
const back = ["John Johnstone is a master\'s degree graduate in archeology from the University of New York. He was born on January 15th, of the year 1989. His parents were a normal New York family until he was brought to life. His mother had a harsh delivery and she bled to her death. The baby that she delivered was not any normal newborn, his eyes were wide open and had heterochromia eyes, his right, a hazel brown and his left, an emerald green. As he proceeded in his life he began to understand that he had a special ability or power of his own. Young like any other normal kid he began to go to school, however he was able to understand all the languages that were presented to him in school, he could interpret them and use it for his own advantage. Many teachers were astonished by the fact that he was able to understand Latin, Spanish, French, and even ancient languages that were that to be lost. As he continued to grow he aspired seek a job as an archaeologist, as his parents before him and put his multilingual skills to finding artifacts that were lost in time."];
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
