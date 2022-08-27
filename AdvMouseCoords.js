let hexc1987 = "#000000";
let fps1987 = "off";
let fpsm1987 = "off";
let pmp1987 = "off"
let cdot1987 = "off"
var pf1987 = 0;
let frames1987 = 0;
let r1987 = 66;
let g1987 = 135;
let b1987 = 245;
var run1987 = 1;
var keyPress1987;
let key1987 = "\\";
var helpInfo1987 = true;

function debugColor(r1987, g1987, b1987) {
  fill(r1987, g1987, b1987);
}

function frameDelay() {
  if (frameCount - pf1987 > 20) {
    frames1987 = round(frameRate());
    pf1987 = frameCount;
  }
}

function coordsKey(keyPress1987) {
  key1987 = keyPress1987;
}

function mouseCoords(fps1987, fpsm1987, cdot1987, pmp1987) {
  if (helpInfo1987) {
    print("Thank you for using mouseCoords! If you need help, please type \n\"help();\" for more information. the key you have chosen is \"" + key1987 + "\".");
    helpInfo1987 = false;
  }
  
  frameDelay();
  noStroke();
      if (run1987 == 0) {
        if (fps1987 == "on") {
        if (frameCount - pf1987 > 20) {
          text("FPS: " + frames1987, 20, 20);
          pf1987 = frameCount;
        }
        
      }
        if (fpsm1987 == "on") {
          if (mouseX > width - 200 && mouseY < 20) {
            text("mouseX: " + mouseX + ", mouseY: " + mouseY + ", FPS: " + frames1987, mouseX - 205, mouseY + 30);
          
          } else if (mouseY < 20) {
            
            text("mouseX: " + mouseX + ", mouseY: " + mouseY + ", FPS: " + frames1987, mouseX + 10, mouseY + 30);
        
          } else if (mouseX > width - 200) {
            text("mouseX: " + mouseX + ", mouseY: " + mouseY + ", FPS: " + frames1987, mouseX - 205, mouseY + -10);
        
          } else {
            text("mouseX: " + mouseX + ", mouseY: " + mouseY + ", FPS: " + frames1987, mouseX + 10, mouseY - 10);
          }
        } else {
          if (mouseX > width - 200 && mouseY < 20) {
            text("mouseX: " + mouseX + ", mouseY: " + mouseY + ", FPS: " + frames1987, mouseX - 205, mouseY + 30);
            
          } else if (mouseY < 20) {
            
            text("mouseX: " + mouseX + ", mouseY: " + mouseY, mouseX + 10, mouseY + 30);
        
          } else if (mouseX > width - 150) {
            text("mouseX: " + mouseX + ", mouseY: " + mouseY, mouseX - 150, mouseY + -10);
        
          } else {
        
            text("mouseX: " + mouseX + ", mouseY: " + mouseY, mouseX + 10, mouseY - 10);
        
          }
      }
     //pmouse ellipse
     
      if (pmp1987 == "on") {
         fill(255, 0, 0);
        noStroke();
        ellipse(pmouseX, pmouseY, 4);
        
        fill(0);
      }
      
      if (cdot1987 == "on") {
        ellipse(mouseX, mouseY, 4);
      }
    
      
      
      } else if (run1987 == 1) {
        
      }
  fill(255);
  stroke(1);
  
}

function keyTyped(){
    if (key == key1987 && run1987 == 0){
      run1987 = 1;
    } else if (key == key1987 && run1987 == 1){
        run1987 = 0;
    }
}

function help() {
  print("mouseCoords: \nBasic syntax: mouseCoords(fpsCounter: “on / off”, fpsCounterMouse: “on / off”, cursorDot: “on / off”, preMousePos: “on / off”); \n\nColor: DebugColor(r, g, b); \n\nKey for press (AS STRING): coordsKey(“key”); \n\nIf you want to use backslash (which is the default key) make it 2 backslashes, not just 1.");
}