
const fire = 'f';
const water = 'w';
const grass = 'g';
const dark = 'd';
const light = 'l';
const heal = 'h';
const droplist = [fire,water,grass,dark,light,heal]
const dropcolor = ['rgb(237, 106, 106)','rgb(86, 167, 255)','rgb(133, 241, 131)','rgb(166, 84, 225)','rgb(255, 232, 75)','rgb(255, 85, 163)']
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
const startbyou = ['10','261','500','760','1048','1306','1607','2231','2512','2804','3041','3336','3561','3885','4221','4572','4891','5249','5535','5774','6024','6314','6675','7041']
let douganumber = 0;

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
    Rnumber = Math.random()*6;
    return Math.trunc( Rnumber );    
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
               
		     audio.volume = 0.5;
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

//youtube noseigyo
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('umekomidouga', {
		playerVars: {
                controls: 0},
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
        });
      }

function onPlayerReady(event) {
        player.cueVideoById({'videoId':'JMzDWbqROT4',
       'startSeconds': startbyou[douganumber],
       'endSeconds': startbyou[douganumber + 1] - 1,
   });
      }

function onPlayerStateChange(event) {
   if (event.data == 0) {
       player.seekTo(startbyou[douganumber]);
       event.target.playVideo();
   }
}

//select botan wo oshitatoki no syori
function bgmChange(){
  let select = $('bgmSelect').value
  for(let aunt = 1;aunt < 24;aunt++){
    if(select == 'm0' + aunt ||select == 'm' + aunt){
      douganumber = aunt - 1;
	    player.seekTo(startbyou[douganumber])
	    player.cueVideoById({'videoId':'JMzDWbqROT4',
       'startSeconds': startbyou[douganumber],
       'endSeconds': startbyou[douganumber + 1] - 8,
   });
        }
	    
}}

