
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
const sesource = [
        'https://raw.githubusercontent.com/angelbeatsow/abow/main/_1do.wav',
	'https://raw.githubusercontent.com/angelbeatsow/abow/main/_2re.wav',
	'https://raw.githubusercontent.com/angelbeatsow/abow/main/_3mi.wav',
	'https://raw.githubusercontent.com/angelbeatsow/abow/main/_4fa.wav',
	'https://raw.githubusercontent.com/angelbeatsow/abow/main/_5so.wav',
	'https://raw.githubusercontent.com/angelbeatsow/abow/main/_6ra.wav',
	'https://raw.githubusercontent.com/angelbeatsow/abow/main/_7si.wav',
	'https://raw.githubusercontent.com/angelbeatsow/abow/main/_8do.wav',
]
const umekomiTime = ['https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=10&end=260',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=261&end=499',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=500&end=759',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=760&end=1047',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=1048&end=1305',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=1306&end=1606',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=1607&end=2230',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=2231&end=2511',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=2512&end=2803',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=2804&end=3040',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=3041&end=3335',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=3336&end=3560',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=3561&end=3884',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=3885&end=4220',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=4221&end=4571',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=4572&end=4890',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=4891&end=5248',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=5249&end=5534',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=5535&end=5773',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=5774&end=6023',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=6024&end=6313',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=6314&end=6674',
'https://www.youtube.com/embed/JMzDWbqROT4?rel=0&start=6675',
]

let isRun = true;
let isRunning = false;
let isDissaper = false;
let Rnumber = 1;
let senumber = 0;
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
  senumber = 0;
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
  var lastxy = $(lastPoint[0]).getBoundingClientRect();
  let lastx = lastxy.left;
  let lasty = lastxy.top;
  let lnumber = suujihenkan(lastPoint[0]);
  
  let nnumber = 0;
  
  if(x > lastx - 80 && x < lastx + 130){
    if(y > lasty - 80 && y < lasty +130){
      
      //hantei suru
      
      if(x < lastx - 30){
        if(y < lasty - 30){
          nnumber = lnumber - 7;
        }else if(y > lasty && y < lasty + 50){
          nnumber = lnumber - 1;
        }else if(y > lasty + 80){
          nnumber = lnumber + 5;
        }
      }else if(x > lastx && x < lastx + 50){
        if(y < lasty - 30){
          nnumber = lnumber - 6;
        }else if(y > lasty + 80){
          nnumber = lnumber + 6;
        }
      }else if(x > lastx + 80){
        if(y < lasty - 30){
          nnumber = lnumber - 5;
        }else if(y > lasty && y < lasty + 50){
          nnumber = lnumber + 1;
        }else if(y > lasty + 80){
          nnumber = lnumber + 7;
        }
      }
  }else{
    return;
  }}else{
    return;
  }
    
        let nowbotton = IDS[nnumber - 1];
        
        //rinsetsu suru onaji zokusei ka douka
        if(nnumber == lnumber - 7 ||nnumber == lnumber - 6 ||nnumber == lnumber - 5 ||
           nnumber == lnumber - 1 ||nnumber == lnumber + 1 ||nnumber == lnumber + 5 ||
           nnumber == lnumber + 6 ||nnumber == lnumber + 7){
             console.log('rinsetsu');
             if($(nowbotton).value == lastPoint[1]){
               console.log('dousyoku');
               
		     //sentaku sareta
               lastPoint[0] = nowbotton;
               $(nowbotton).value = 'x';
               isDissaper = true;
               
               //se no syori
               console.log('se effect!')
               	var audio = new Audio;
               	audio.src = sesource[senumber % 8];
               senumber++;
               console.log('senuber is' + senumber);
               
               audio.autoplay = true;
               audio.load();
               
                 //se no syori owari
               }
                 
             }
      }


function resetAction(){
  Rnumber = 1;
  for(let row=0;row < 36;row++){
      let randoma = randomNumber();
      $(IDS[row]).value = droplist[randoma];
      $(IDS[row]).style.backgroundColor = dropcolor[randoma];
}}
function bgmChange(){
  let select = $('bgmSelect').value
  for(let aunt = 1;aunt < 24;aunt++){
    if(select == 'm0' + aunt ||select == 'm' + aunt){
      let selectNumber = aunt - 1;
      $('umekomidouga').src = umekomiTime[selectNumber];
}}}


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
  $('bgmSelectButton').onclick = bgmChange;
  }
  
window.onload = onloadAction();
