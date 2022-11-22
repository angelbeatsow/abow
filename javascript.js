
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
let firstPoint = 0;
let lastPoint = [0,0];
let howManyDissaper = 0;
let saidaiDissaper = 0;
let totalCombsuu = 0;
let whatTimeDissaper = 0;
let whatTimeDissaperInThisTurn = 0;
let saidaiCombo = 0;
let totalDissaper = 0;
let spendedTurn = 0;
let timeCount = false;
let countzeroWorking = false;

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

//カウント処理
let sousajikan = 5;
let gaugewidth = 500;
function count(){
     if(gaugewidth >= 10){
	gaugewidth = gaugewidth - 10;
	$('timegauge').style.width = gaugewidth +'px';	
     }else{
	     gaugewidth = 0;
	     $('timegauge').style.width = '0px';	
     }
}

//カウントが0になったときの処理
function countzero(){
      console.log('カウントが0になった!');
      $('fadeLayer').style.visibility = "visible";
	spendedTurn　= spendedTurn + 1;
	console.log('ターン数:' + spendedTurn);
      if(isRun == false){
        $(firstPoint).removeEventListener('touchmove',untilClick);
	      clickendAction();
	      
	      //戦績の処理b
	      let un = totalDissaper / spendedTurn;
	      un = un * 100;
	      $('sensekiTotalHeikin').innerHTML = Math.round(un) / 100;
	      if(saidaiCombo < whatTimeDissaperInThisTurn){
		      saidaiCombo = whatTimeDissaperInThisTurn;
	              $('sensekiCombo').innerHTML = saidaiCombo;
              }
	      whatTimeDissaperInThisTurn = 0;
	      let chi = whatTimeDissaper / spendedTurn;
	      chi = chi * 100;
	      $('sensekiComboHeikin').innerHTML = Math.round(chi) / 100;
	      
	      setTimeout(function(){
		      fadeLayerFlash()
	         $(firstPoint).addEventListener('touchmove',untilClick,{ passive: false});
                    gaugewidth = 500;
		      $('timegauge').style.width = gaugewidth + 'px';
                    
		    whatTimeDissaperInThisTurn = 0;
                    timeCount = false;
		      countzeroWorking = false;
	            },1000);
      }else{
	      //戦績の処理b
	      let un = totalDissaper / spendedTurn;
	      un = un * 100;
	      $('sensekiTotalHeikin').innerHTML = Math.round(un) / 100;
	      if(saidaiCombo > whatTimeDissaperInThisTurn){
		      saidaiCombo = whatTimeDissaperInThisTurn;
	              $('sensekiCombo').innerHTML = saidaiCombo;
              }
	      whatTimeDissaperInThisTurn = 0;
	      let chi = whatTimeDissaper / spendedTurn;
	      chi = chi * 100;
	      $('sensekiComboHeikin').innerHTML = Math.round(chi) / 100;
	      
	      setTimeout(function(){
		      fadeLayerFlash()
	          gaugewidth = 500;
		      $('timegauge').style.width = gaugewidth + 'px';
                    
		    whatTimeDissaperInThisTurn = 0;
                    timeCount = false;
		      countzeroWorking = false;
		    },1000);
      }
}

function fadeLayerFlash(){
	$('fadeLayer').style.opacity = "0.4";
	$('fadeLayer').style.backgroundColor = "#ffffff";
        setTimeout(function(){
            $('fadeLayer').style.opacity = "0.7";
            setTimeout(function(){
		$('fadeLayer').style.opacity = "0.5";
		setTimeout(function(){
                        $('fadeLayer').style.opacity = "0.2";
			setTimeout(function(){
				   
				$('fadeLayer').style.visibility = "hidden";
				$('fadeLayer').style.backgroundColor = "#000000";
				$('fadeLayer').style.opacity = "0.5";
                                   
                        },50);
                },50);
            },100);
        },50);
}

function clickAction(event){
  if(isRun == false){
    return;
  }
 if(gaugewidth == 0){
     return;
 }
  event.preventDefault();
  senumber = 0;
  isDissaper = false;
  firstPoint = event.target.id;
  let object = $(firstPoint).value;
  lastPoint = [firstPoint,object];
  isRun = false;
  isRunning = true;
  $(firstPoint).value = 'x';
  console.log(lastPoint[0]);
  console.log(lastPoint[1]);
}

function clickendAction(event){
      if(isDissaper == true){
        isRun = false;
        isRunning = false;
	      isDissaper = false;
        
        //drop wo otosu
        for(let n = 0;n < 5;n++){
          for(let row=6;row < 36;row++){
            if($(IDS[row]).value == 'x'){
              $(IDS[row]).value = $(IDS[row - 6]).value
              $(IDS[row]).style.backgroundColor = $(IDS[row - 6]).style.backgroundColor;
		    if($(IDS[row]).value == heal){
                   $(IDS[row]).classList.add('marukusuru');
                }else{
                   $(IDS[row]).classList.remove('marukusuru');
                }
              $(IDS[row - 6]).value = 'x'
              $(IDS[row - 6]).style.backgroundColor = 'black';
		     $(IDS[row - 6]).classList.remove('marukusuru');
            }
          }
        }
        //x ni drop wo ireru
        for(let row=0;row < 36;row++){
            if($(IDS[row]).value == 'x'){
              let randoma = randomNumber();
              $(IDS[row]).value = droplist[randoma];
              $(IDS[row]).style.backgroundColor = dropcolor[randoma];
	      if($(IDS[row]).value == heal){
                   $(IDS[row]).classList.add('marukusuru');
                }else{
                   $(IDS[row]).classList.remove('marukusuru');
                }
            }}
	      
	      //カウントの処理
	      if(timeCount == false){
	         timeCount = true;
              }else if($('timegauge').style.width != '0px'){
	      //消したブロックに応じてカウントを増やす
		     gaugewidth = gaugewidth + howManyDissaper * 10 * 5 / sousajikan ;
		    $('timegauge').style.width = gaugewidth + 'px';
	      }
   
		      
	      //戦績の処理a
	      totalDissaper = totalDissaper + howManyDissaper;
	      $('sensekiTotal').innerHTML = totalDissaper;
	      if(saidaiDissaper < howManyDissaper){
		      saidaiDissaper = howManyDissaper;
		      $('sensekiRensa').innerHTML = saidaiDissaper;
		      }
	      howManyDissaper = 0;
	      whatTimeDissaper = whatTimeDissaper + 1;
	      whatTimeDissaperInThisTurn　= whatTimeDissaperInThisTurn + 1;
	      let unchi = totalDissaper / whatTimeDissaper;
	      unchi = unchi * 100;
	      $('sensekiRensaHeikin').innerHTML = Math.round(unchi) / 100;
	      
              isRun = true;
        }else if(isRun == false){
          $(lastPoint[0]).value = lastPoint[1];
          isRun = true;
          isRunning = false;
          isDissaper = false;
      }
}
    
        

function untilClick(event){
  if(!isRunning){
    return;
  }
 if(gaugewidth == 0){
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
  
  let nnumber = 100;
  
  if(x > lastx - 80 && x < lastx + 130){
    if(y > lasty - 80 && y < lasty +130){
      
      //hantei suru
      
      if(x < lastx - 30 && lnumber % 6 != 1){
                 if(y < lasty - 30 && lnumber > 6){
                      nnumber = lnumber - 7;
                 }else if(y > lasty && y < lasty + 50){
                      nnumber = lnumber - 1;
                }else if(y > lasty + 80 && lnumber < 31){
                      nnumber = lnumber + 5;
                }else{
                      return;
                }
       }else if(x > lastx && x < lastx + 50){
            if(y < lasty - 30 && lnumber > 6){
                nnumber = lnumber - 6;
            }else if(y > lasty + 80 && lnumber < 31){
                nnumber = lnumber + 6;
            }else{
                return;
            }
      }else if(x > lastx + 80 && lnumber % 6 != 0){
            if(y < lasty - 30 && lnumber > 6){
                 nnumber = lnumber - 5;
            }else if(y > lasty && y < lasty + 50){
                 nnumber = lnumber + 1;
            }else if(y > lasty + 80 && lnumber < 31){
                 nnumber = lnumber + 7;
            }
      }else{
            return;
      }
    }else{
    return;
    }
  }else{
    return;
  }
      
                      
        
        //rinsetsu suru onaji zokusei ka douka
        if(nnumber < 37 && nnumber > 0){
             console.log('rinsetsu');
		let nowbotton = IDS[nnumber - 1];
             if($(nowbotton).value == lastPoint[1]){
               console.log('dousyoku');
               
		     //sentaku sareta
               lastPoint[0] = nowbotton;
               $(nowbotton).value = 'x';
               isDissaper = true;
		     if(howManyDissaper == 0){
		        howManyDissaper = 2;
		     }else{
			howManyDissaper = howManyDissaper + 1;
		     }
               
               //se no syori
               console.log('se effect!')
               	var audio = new Audio;
               	audio.src = sesource[senumber % 8];
               senumber++;
               console.log('senuber is' + senumber);
               
		     audio.volume = $('volrange').value / 10;
               audio.autoplay = true;
               audio.load();
               
                 //se no syori owari
               }
                 
             }
      }


function resetAction(){
  for(let row=0;row < 36;row++){
      let randoma = randomNumber();
      $(IDS[row]).value = droplist[randoma];
      $(IDS[row]).style.backgroundColor = dropcolor[randoma];
      if($(IDS[row]).value == heal){
          $(IDS[row]).classList.add('marukusuru');
        }else{
          $(IDS[row]).classList.remove('marukusuru');
        }
}}


function onloadAction(){
  for(let row=0;row < 36;row++){
      let randoma = randomNumber();
      $(IDS[row]).value = droplist[randoma];
      $(IDS[row]).style.backgroundColor = dropcolor[randoma];
      if($(IDS[row]).value == heal){
           $(IDS[row]).classList.add('marukusuru');
         }else{
           $(IDS[row]).classList.remove('marukusuru');
         }
      $(IDS[row]).addEventListener('touchstart',clickAction,{ passive: false });
      $(IDS[row]).addEventListener('touchend',clickendAction);
      $(IDS[row]).addEventListener('touchmove',untilClick,{ passive: false });
    }
  $('reset').onclick = resetAction;
  $('bgmSelectButton').onclick = bgmChange;
  }
	
	
  // スクロールを禁止にする関数
  function disableScroll(event) {
    event.preventDefault();
  }
	// スクロール禁止
  document.getElementById('on').onclick = function() {
    // イベントと関数を紐付け
	  if(document.getElementById('on').value == 'スクロール禁止をonにする'){
    document.addEventListener('touchmove', disableScroll, { passive: false });
    document.body.classList.add('overflow-hidden');
		  document.getElementById('on').value = 'スクロール禁止をoffにする';
          }else{
	document.removeEventListener('touchmove', disableScroll, { passive: false });
        document.body.classList.remove('overflow-hidden');
		  document.getElementById('on').value = 'スクロール禁止をonにする';
  }
}

//操作時間+3秒ボタン
$('sanbyouOn').onclick = function() {
   if($('sanbyouOn').value == 'onにする'){
	   sousajikan = 8;
	   $('sanbyouOn').value = 'offにする';
   }else{
	   sousajikan = 5;
	   $('sanbyouOn').value = 'onにする';
   }
}  


//windowアクションですよーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
window.onload = onloadAction();
//動画が指定時間になったらシークバーを戻すsetInterval
window.setInterval(function(){
    if(player.getCurrentTime() > startbyou[douganumber + 1] - 3){
         player.seekTo(startbyou[douganumber]);
     }
}, 1000);
//カウントsetInterval
var countinterval = function(){
    if(timeCount == true && gaugewidth != 0){
        count();
    }else if(gaugewidth == 0 && countzeroWorking == false){
	    countzeroWorking = true;
	countzero();
    }
    setTimeout(countinterval,sousajikan * 20);
}

setTimeout(countinterval,sousajikan * 20);



//youtube noseigyo
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('umekomidouga', {
		playerVars: {
                   controls: 0
		},
                events: {
                  'onReady': onPlayerReady,
                  'onStateChange': onPlayerStateChange
                }
        });
      }

function onPlayerReady(event) {
        player.cueVideoById({'videoId':'JMzDWbqROT4',
			     'startSeconds': 10
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
	    player.seekTo(startbyou[douganumber]);
	   }
}}
