
const fire = 'f';
const water = 'w';
const grass = 'g';
const dark = 'd';
const light = 'l';
const heal = 'h';
const droplist = [fire,water,grass,dark,light,heal]
const dropcolor = ['red','blue','green','purple','yellow','pink']
const IDS = [
'b01','b02','b03','b04','b05','b06',
'b07','b08','b09','b10','b11','b12',
'b13','b14','b15','b16','b17','b18',
'b19','b20','b21','b22','b23','b24',
'b25','b26','b27','b28','b29','b30',
'b31','b32','b33','b34','b35','b36'
]

let isRun = true;
let isRunning = false;
let isDissaper = false;
let Rnumber = 1;
let lastPoint = [0,0];

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
  if(isRun == false){
    return;
  }
  event.preventDefault();
  isDissaper = false;
  let id = event.target.id;
  let object = $(id).value;
  lastPoint = [id,object];
  isRun = false;
  isRunning = true;
  $(id).value = 'x';
  console.log(lastPoint[0]);
  console.log(lastPoint[1]);
}

function clickendAction(event){
      if(isDissaper == true){
        isRun = false;
        isRunning = false;
        isPissaper = false;
        
        //drop wo otosu
        for(let n = 0;n < 5;n++){
          for(let row=6;row < 36;row++){
            if($(IDS[row]).value == 'x'){
              $(IDS[row]).value = $(IDS[row - 6]).value
              $(IDS[row]).style.backgroundColor = $(IDS[row - 6]).style.backgroundColor;
              $(IDS[row - 6]).value = 'x'
              $(IDS[row - 6]).style.backgroundColor = 'black';
            }
          }
        }
        //x ni drop wo ireru
        for(let row=0;row < 36;row++){
            if($(IDS[row]).value == 'x'){
              let randoma = randomNumber();
              $(IDS[row]).value = droplist[randoma];
              $(IDS[row]).style.backgroundColor = dropcolor[randoma];
            }}
        isRun = true;
        }else{
        $(lastPoint[0]).value = lastPoint[1];
        isRun = true;
          isRunning = false;
          isPissaper = false;
      }
}
    
        

function untilClick(event){
  if(!isRunning){
    return;
  }
  //zahyou no syutoku
  let x = event.clientX;
  let y = event.clientY;
  if (event.touches && event.touches[0]) {
		   x = event.touches[0].clientX;
		   y = event.touches[0].clientY;
  } else if (event.originalEvent && event.originalEvent.changedTouches[0]) {
	   	x = event.originalEvent.changedTouches[0].clientX;
		   y = event.originalEvent.changedTouches[0].clientY;
  	} else if (event.clientX && event.clientY) {
   		x = event.clientX;
   		y = event.clientY;
	}

	console.log('x:' + x + 'y:' + y);
  
  //zahyou ni aru botan no hantei
  for(let i = 0;i < 35;i++){
    let xx = i % 6;
    xx = xx * 80 + 40;
    let yy =parseInt( i / 6 );
    yy = yy * 80 + 30;
    if(x > xx && x < xx + 50){
      if(y > yy && y < yy + 50){
        let nowbotton = IDS[i];
        let nnumber = i + 1;
        let lnumber = suujihenkan(lastPoint[0]);
        
        //rinsetsu suru onaji zokusei ka douka
        if(nnumber == lnumber - 7 ||nnumber == lnumber - 6 ||nnumber == lnumber - 5 ||
           nnumber == lnumber - 1 ||nnumber == lnumber + 1 ||nnumber == lnumber + 5 ||
           nnumber == lnumber + 6 ||nnumber == lnumber + 7){
             console.log('rinsetsu');
             if($(nowbotton).value == lastPoint[1]){
               console.log('dousyoku');
               lastPoint[0] = nowbotton;
               $(nowbotton).value = 'x';
               isDissaper = true;
             }
           }
      }
    }
  }
}

function resetAction(){
  let Rnumber = 1;
  for(let row=0;row < 36;row++){
      let randoma = randomNumber();
      $(IDS[row]).value = droplist[randoma];
      $(IDS[row]).style.backgroundColor = dropcolor[randoma];
}}

function onloadAction(){
  for(let row=0;row < 36;row++){
      let randoma = randomNumber();
      $(IDS[row]).value = droplist[randoma];
      $(IDS[row]).style.backgroundColor = dropcolor[randoma];
      $(IDS[row]).addEventListener('touchstart',clickAction);
      $(IDS[row]).addEventListener('touchend',clickendAction);
      $(IDS[row]).addEventListener('touchmove',untilClick);
      
    }
  $('reset').onclick = resetAction;
    }
  
window.onload = onloadAction();
