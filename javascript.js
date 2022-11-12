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

function $(id){
  return document.getElementById(id);
}

function onloadAction(){
  for(let row=0;row < 6;row++){
    for(let col=0;col < 6;col++){
      let randoma = (int)(Math.random()*6);
      $(IDS[row][col]).value = droplist[randoma];
      $('reset').value = droplist[randoma];
    }}
}

window.onload = onloadAction();