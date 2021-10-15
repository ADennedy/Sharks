let back1, back2, back3, back4, back5, back6, back7, back8, back9, back10, back11, back12, back13, back14, back15, back16, back17, back18, back19, back20, back21, back22, back23, back24, back25, key1, key2, map, menu;
var page, menuOn, mapOn;
var locX1, locX2, locX3, locY1, locY2, locY3, locX4, locY4, mapX, mapY;

function preload() {
  back1=loadImage('https://i.imgur.com/zbniJl7.png');
  back2=loadImage('https://i.imgur.com/6kcAfbe.png');
  back3=loadImage('https://i.imgur.com/KnUY4dV.png');
  back4=loadImage('https://i.imgur.com/cM1c8AO.png');
  back5=loadImage('https://i.imgur.com/FOd52On.png');
  back6=loadImage('https://i.imgur.com/9I1hTkZ.png');
  back7=loadImage('https://i.imgur.com/KssRYwg.png');
  back8=loadImage('https://i.imgur.com/b6B8MeW.png');
  back9=loadImage('https://i.imgur.com/eCveC4E.png');
  back10=loadImage('https://i.imgur.com/8PDixdR.png');
  back11=loadImage('https://i.imgur.com/TNOHSbM.png');
  back12=loadImage('https://i.imgur.com/Cv1Psuk.png');
  back13=loadImage('https://i.imgur.com/g9CpSlJ.png');
  back14=loadImage('https://i.imgur.com/mqtk1B1.png');
  back15=loadImage('https://i.imgur.com/W7vEyO5.png');
  back16=loadImage('https://i.imgur.com/Icbu8jl.png');
  back17=loadImage('https://i.imgur.com/zIHR121.png');
  back18=loadImage('https://i.imgur.com/PeRvTRH.png');
  back19=loadImage('https://i.imgur.com/53FtQXI.png');
  back20=loadImage('https://i.imgur.com/YmOsxSU.png');
  back21=loadImage('https://i.imgur.com/IUGlmo0.png');
  back22=loadImage('https://i.imgur.com/dvkIYdm.png');
  back23=loadImage('https://i.imgur.com/LOCgaTi.png');
  back24=loadImage('https://i.imgur.com/oC3FEOs.png');
  key=loadImage('https://i.imgur.com/FBh4Hh9.png');
  map=loadImage('https://i.imgur.com/g8jXJAp.png');
  menu=loadImage('https://i.imgur.com/5UkyWsK.png');
}

function setup() {
  // put setup code here
  createCanvas(390,844);
  background(0);
  page=1;
  menuOn=false;
  mapOn=false;
  if(page==17){
    mapOn=true;
  }
  locX1=0;
  locY1=844;
  locX2= -390;
  locY2=0;
  locX3 = -640;
  locY3 = 0;
  locX4=0;
  locY4=0;
  dragX=-100;
  dragY=-100;
  mapX = locX3;
  mapY = locY3;
}

function draw() {
  // put drawing code here
  image(map,mapX, mapY);
  if (page==1){
    image(back1, 0, 0);
  }
  else if (page==2){
    image(back2, 0, 0);
  }
  else if (page==3){
    image(back3, 0, 0);
  }
  else if (page==4){
    image(back4, 0, 0);
  }
  else if (page==5){
    image(back5, 0, 0);
  }
  else if (page==6){
    image(back6, 0, 0);
  }
  else if (page==7){
    image(back7, 0, 0);
  }
  else if (page==8){
    image(back8, 0, 0);
  }
  else if (page==9){
    image(back9, 0, 0);
  }
  else if (page==10){
    image(back10, 0, 0);
  }
  else if (page==11){
    image(back11, 0, 0);
  }
  else if (page==12){
    image(back12, 0, 0);
  }
  else if (page==13){
    image(back13, 0, 0);
  }
  else if (page==14){
    image(back14, 0, 0);
  }
  else if (page==15){
    image(back15, 0, 0);
  }
  else if (page==16){
    image(back16, locX4, locY4);
  }
  else if (page==17){
    image(back17, 0, 0);
    mapOn=!mapOn;
  }
  else if (page==18){
    image(back18, 0, 0);
  }
  else if (page==19){
    image(back19, 0, 0);
  }
  else if (page==20){
    image(back20, 0, 0);
  }
  else if (page==21){
    image(back21, 0, 0);
  }
  else if (page==22){
    image(back22, 0, 0);
  }
  else if (page==23){
    image(back23, 0, 0);
  }
  else if (page==24){
    image(back24, 0, 0);
  }
  image(key, locX1, locY1);
  image(menu, locX2, locY2);
  if (menuOn==true){
    locX2=0;
  }
  if (menuOn==false){
    locX2= -390;
  }
  if (mapOn==true){
    mapX = locX3;
    mapY = locY3;
  }
  if (mapOn==false){
    mapX= 340;
    mapY= 844;
  }
}

  function mouseClicked (){
    if (page==1){
      if (mouseX<125 && mouseX>45 && mouseY<772 && mouseY>745){
        page=2;
      }
      if (mouseX<340 && mouseX>135 && mouseY<772 && mouseY>745){
        page=4;
      }
    }
    else if (page==2){
      if (mouseX<55 && mouseX>15 && mouseY<55 && mouseY>15){
        page=1;
      }
      if (mouseX<360 && mouseX>30 && mouseY<780 && mouseY>732){
        page=4;
      }
      if (mouseX<289 && mouseX>107 && mouseY<282 && mouseY>260){
        page=3;
      }
      if (mouseX<335 && mouseX>55 && mouseY<545 && mouseY>300){
        locY1=0;
      }
      else if (locY1==0 && mouseX<390 && mouseX>0 && mouseY<540 && mouseY>0){
        locY1=844;
      }
    }
    else if (page==3) {
      if (mouseX<55 && mouseX>15 && mouseY<55 && mouseY>15){
        page=1;
      }
      if (mouseX<360 && mouseX>30 && mouseY<780 && mouseY>732){
        page=4;
      }
      if (mouseX<283 && mouseX>115 && mouseY<325 && mouseY>304){
        page=2;
      }
      if (mouseX<335 && mouseX>55 && mouseY<487 && mouseY>340){
        locY1=0;
      }
      else if (locY1==0 && mouseX<390 && mouseX>0 && mouseY<540 && mouseY>0){
        locY1=844;
      }
    }
    else if (page==4) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
    }
    else if (page==5) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
      if (mouseX<386 && mouseX>322 && mouseY<545 && mouseY>485){
        page=6;
      }
      if (mouseX<345 && mouseX>265 && mouseY<603 && mouseY>525){
        page=7;
      }
      if (mouseX<315 && mouseX>210 && mouseY<560 && mouseY>360){
        page=8;
      }
      if (mouseX<264 && mouseX>132 && mouseY<805 && mouseY>680){
        page=9;
      }
      if (mouseX<375 && mouseX>280 && mouseY<795 && mouseY>705){
        page=10;
      }
      if (mouseX<132 && mouseX>15 && mouseY<490 && mouseY>375){
        page=11;
      }
      if (mouseX<160 && mouseX>37 && mouseY<650 && mouseY>540){
        page=12;
      }
      if (mouseX<205 && mouseX>145 && mouseY<522 && mouseY>465){
        page=13;
      }
    }
    else if (page==6 || page==7 || page==8 || page==9 || page==10 || page==11 || page==12 || page==13){
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
      if (mouseX<120 && mouseX>0 && mouseY<832 && mouseY>75){
        page=5;
      }
      if (mouseX<386 && mouseX>120 && mouseY<832 && mouseY>695){
        page=5;
      }
      if (mouseX<386 && mouseX>360 && mouseY<695 && mouseY>75){
        page=5;
      }
      if (mouseX<360 && mouseX>120 && mouseY<225 && mouseY>75){
        page=5;
      }
    }
    else if (page==14) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
    }
    else if (page==15) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
    }
    else if (page==16) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
    }
    else if (page==17) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
    }
    else if (page==18) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
      if (mouseX<380 && mouseX>350 && mouseY<580 && mouseY>550){
        page=19;
      }
      if (mouseX<45 && mouseX>3 && mouseY<580 && mouseY>550){
        page=21;
      }
      if (mouseX<263 && mouseX>125 && mouseY<820 && mouseY>790){
        page=22;
      }
    }
    else if (page==19) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
      if (mouseX<380 && mouseX>350 && mouseY<580 && mouseY>550){
        page=20;
      }
      if (mouseX<45 && mouseX>3 && mouseY<580 && mouseY>550){
        page=18;
      }
      if (mouseX<263 && mouseX>125 && mouseY<820 && mouseY>790){
        page=22;
      }
    }
    else if (page==20) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
      if (mouseX<380 && mouseX>350 && mouseY<580 && mouseY>550){
        page=21;
      }
      if (mouseX<45 && mouseX>3 && mouseY<580 && mouseY>550){
        page=19;
      }
      if (mouseX<263 && mouseX>125 && mouseY<820 && mouseY>790){
        page=22;
      }
    }
    else if (page==21) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
      if (mouseX<380 && mouseX>350 && mouseY<580 && mouseY>550){
        page=18;
      }
      if (mouseX<45 && mouseX>3 && mouseY<580 && mouseY>550){
        page=20;
      }
      if (mouseX<263 && mouseX>125 && mouseY<820 && mouseY>790){
        page=22;
      }
    }
    else if (page==22) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
      if (mouseX<262 && mouseX>128 && mouseY<777 && mouseY>745){
        page=23;
      }
    }
    else if (page==23) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
      if (mouseX<277 && mouseX>112 && mouseY<812 && mouseY>762){
        page=18;
      }
    }
    else if (page==24) {
      if (mouseX<105 && mouseX>0 && mouseY<75 && mouseY>0){
        menuOn= !menuOn;
      }
      if (mouseX<390 && mouseX>0 && mouseY<844 && mouseY>800){
        page=4;
      }
    }
  //below is code for the navigation menu bar
    if (menuOn==true) {
      if (mouseX<280 && mouseX>19 && mouseY<155 && mouseY>85){
        page=4;
        menuOn= !menuOn;
      }
      if (mouseX<270 && mouseX>0 && mouseY<260 && mouseY>180){
        page=5;
        menuOn= !menuOn;
      }
      if (mouseX<280 && mouseX>19 && mouseY<365 && mouseY>265){
        page=14;
        menuOn= !menuOn;
      }
      if (mouseX<270 && mouseX>0 && mouseY<460 && mouseY>365){
        page=15;
        menuOn= !menuOn;
      }
      if (mouseX<280 && mouseX>19 && mouseY<555 && mouseY>460){
        page=16;
        menuOn= !menuOn;
      }
      if (mouseX<270 && mouseX>0 && mouseY<655 && mouseY>555){
        page=17;
        menuOn= !menuOn;
      }
      if (mouseX<280 && mouseX>19 && mouseY<742 && mouseY>655){
        page=18;
        menuOn= !menuOn;
      }
      if (mouseX<230 && mouseX>90 && mouseY<844 && mouseY>742){
        page=24;
        menuOn= !menuOn;
      }
    }
  }

//below is the code to make Questions Page scroll

  function mouseWheel(event) {
    if (page==16){
      locY4 += event.delta;
      if (locY4 < -339) {
        locY4 = -339;
      }
      if (locY4 > 0) {
        locY4 = 0;
      }
    }
  }

//below is the code to make map image dragable
function mouseDragged() {
      locX3 = mouseX-836;
      locY3 = mouseY-426;
}
