
const fire = 'f';
const water = 'w';
const grass = 'g';
const dark = 'd';
const light = 'l';
const heal = 'h';
const droplist = [fire,water,grass,dark,light,heal]
const IDS = [
['b01','b02','b03','b04','b05','b06'],
['b07','b08','b09','b10','b11','b12'],
['b13','b14','b15','b16','b17','b18'],
['b19','b20','b21','b22','b23','b24'],
['b25','b26','b27','b28','b29','b30'],
['b31','b32','b33','b34','b35','b36']
]

let isRun = true;
let isRunning = false;
let Rnumber = 1;

function $(id){
  return document.getElementById(id);
}

function randomNumber(){　
    Rnumber = Rnumber + 1;
    return Rnumber % 6;    
}

function suujihenkan(suuji){
  for(let aunt = 1;aunt < 37;aunt++){
    if(suuji == 'b0' + aunt ||suuji == 'b' + aunt){
      return aunt;
    }
  }
}

function clickAction(event){
  if(!isRun){
    return;
  }
  event.preventDefault();
  let id = event.target.id;
  let object = $(id).value;
  let lastPoint = [id,object];
  let isDissaper = false;
  let sentaku = 0;
  let sentakuList = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  isRun = false;
  isRunning = true;
  $(id).value = 'x';
  console.log(lastPoint[0])
  console.log(lastPoint[1])
  console.log(window.event.buttons)
    window.addEventListener('touchend',function(event){
      if(isDissaper){
        
      }else{
        $(lastPoint[0]).value = lastPoint[1];
        isRun = true;
        isRunning = false;
      }
    })
  
}

function untilClick(event){
  if(!isRunning){
    return;
  }
  let idid = event.target.id;
  let suujihenkanidid = suujihenkan(idid)
  console.log(suujihenkanidid)
  if(suujihenkan(idid) == suujihenkan(lastPoint[0]) - 7 ||suujihenkan(idid) == suujihenkan(lastPoint[0]) - 6 ||suujihenkan(idid) == suujihenkan(lastPoint[0]) - 5 ||
  suujihenkan(idid) == suujihenkan(lastPoint[0]) - 1 ||suujihenkan(idid) == suujihenkan(lastPoint[0]) + 1 ||suujihenkan(idid) == suujihenkan(lastPoint[0]) + 5 ||
  suujihenkan(idid) == suujihenkan(lastPoint[0]) + 6 ||suujihenkan(idid) == suujihenkan(lastPoint[0]) + 7){
    if($(idid).value == $(lastPoint[1]).value){
      lastPoint[0] = idid;
      isDissaper = true;
      $(idid).value = 'x'
      sentakuList[sentaku] = idid;
      sentaku++;
    }else{
      return;}
  }else{
    return;}
}

function onloadAction(){
  for(let row=0;row < 6;row++){
    for(let col=0;col < 6;col++){
      let randoma = randomNumber();
      $(IDS[row][col]).value = droplist[randoma];
      $(IDS[row][col]).addEventListener('touchstart',clickAction);
      $(IDS[row][col]).mouseEntered = untilClick;
    }}
    }


window.onload = onloadAction();
