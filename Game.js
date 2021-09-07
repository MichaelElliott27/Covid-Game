class Game {
    constructor(){
      this.saved = 0;
      this.notsaved = 0;
      this.positionX = 0;
    }
  
    start(){
        doctor1 = createSprite(300,200);
        doctor1.addImage("doctor1",doctorImg);
        doctor1.scale = 0.3;
        restart = createSprite(displayWidth/2,displayHeight/2);
        restart.addImage("restart",restartImg);
        restart.visible = false;
        }
    
patientdisplay(){
  if(frameCount%300 ===0 ){

    patient1 = createSprite(0,400,50,50);
           first = Math.round(random(1,4));
       switch(first){
         case 1: patient1.addImage("patient1",patientImg);
         patient1.scale = 0.4;
         break;
         case 2: patient1.addImage("patient2",patientImg1);
         patient1.scale = 0.4;
         break;
         case 3: patient1.addImage("patient3",patientImg2);
         patient1.scale = 0.4;
         break;
         case 4: patient1.addImage("patient4",patientImg3);
         patient1.scale = 0.4;
         break;
         default: break;

        

       }
       patient1.velocityX = 10;
       patient1.lifetime = 400;

     
      }
}
needledisplay(){
   if(frameCount%400 === 0){
     needle = createSprite(0,250,50,50);
     needle.addImage("needle",needleImg);
     needle.scale=0.2;
     needle.velocityX = 30;
     needle.lifetime = 400;
   }
   
  
  
}
covidisplay(){
  if(frameCount%350 === 0){
    covid = createSprite(0,300,50,50);
    covid.addImage("covid",covidImg);
    covid.scale=0.4;
    covid.velocityX = 30;
    covid.lifetime = 300;
  }
}

      play (){
      game.patientdisplay();
      game.needledisplay();
      game.covidisplay();
      textSize(30);
      stroke(20);
      fill("red");
      text(game.saved,100,100);  
      text("Patients Saved ",20,50);  
      textSize(30);
      stroke(20);
      fill("orange");
      text(game.notsaved,1150,100);  
      text("People you did not save ",1000,50);  
      if(keyDown("left")){
        doctor1.x = doctor1.x-10;
      }
      if(keyDown("right")){
        doctor1.x = doctor1.x+10;
      }
        if(keyDown("up")){
            doctor1.y = doctor1.y- 10;
           }
          if(keyDown("down")){
            doctor1.y = doctor1.y+ 10;
          }
          if(keyDown("g")&& doctor1.isTouching(covid)){
            game.saved= game.saved+3;
            covid.destroy();
          }
          if(keyDown("g")&& doctor1.isTouching(needle)){
            game.saved= game.saved+2;
            needle.destroy();
          }
          if(keyDown("g")&& doctor1.isTouching(patient1)){
            game.saved= game.saved+1;
            patient1.destroy();
          }
          else{
            game.notsaved = game.notsaved+1;
          }
      
    if(game.saved>30){
      gameState = 2;
    }
    if(game.notsaved>5000){
      gameState = 2;
    }
      drawSprites();
    }
    end(){
      textSize(30);
      stroke(20);
      fill("blue");
      text("Please continue to stop the spread. ",displayWidth/3,displayWidth/2-500);  
      restart.visible = true;
      patient1.lifetime = -1;
      patient1.velocityX = 0;
      covid.lifetime = -1;
      covid.velocityX = 0;
      needle.lifetime = -1;
      needle.velocityX = 0;
      if(mousePressedOver(restart)){
        game.reset();
      }
    }
     reset(){
      gameState = 1;
      restart.visible = false;
      patient1.lifetime = -1;
      patient1.velocityX = 0;
      covid.lifetime = -1;
      covid.velocityX = 0;
      needle.lifetime = -1;
      needle.velocityX = 0;
      patient1.destroy();
      needle.destroy();
      covid.destroy();
      game.saved = 0;
      game.notsaved = 0;
    }
    
}