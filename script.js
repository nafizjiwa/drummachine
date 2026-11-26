
const drumPad = document.querySelectorAll('.drum-pad');
  // console.log(drumPad);
const display = document.getElementById('display');
const getDisplay = document.querySelectorAll('audio');
const myaudio = document.getElementById('myAudio');
const slider = document.getElementById('volSlider');

const findDisplay = (id) => {
  let arr = Array.from(getDisplay).find(a=>a.id === id);
  const re = 'https://cdn.freecodecamp.org/curriculum/drum/';
  let clip = arr.src.replace(re, '');
  return clip.replace('.mp3','');
}

const playSound = (e) => {
  let audio;
  let dis;
  if(e.type === 'click'){
    const pad = e.currentTarget;
    audio = pad.querySelector('audio');
    dis = findDisplay(pad.id.toUpperCase());
  } else {
    const padId = e.key.toUpperCase();
    const pad = document.querySelector(`#${padId}`);
    if(!pad) return;
    audio = pad.querySelector('audio');
    dis = findDisplay(padId);
  }
  display.innerHTML = dis;
  audio.currentTime = 0;
  audio.play();
}

drumPad.forEach(pad => {
  pad.addEventListener('click', playSound);
});

document.addEventListener('keydown', playSound); 
slider.addEventListener('input', (e)=>{
  myaudio.volumne = e.target.value;
});
