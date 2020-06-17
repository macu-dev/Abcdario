window.addEventListener('click', onKeyDown);
window.addEventListener('keydown',onKeyDown );

const audio = document.querySelector('audio');


function onKeyDown(e){
  let keyCode = (e.keyCode)
    ? e.keyCode
    : Number(e.target.parentNode.getAttribute('data-key')) ;
  let char = String.fromCharCode(keyCode).toLocaleLowerCase();
  if(keyCode == 192){
    char = 'enie';
  }
  audio.src= `sounds/${char}.mp3`;
  
  let btn = document.querySelector(`.key[data-key='${keyCode}']`);
  let btns = document.querySelectorAll('.key');
  for(let boton  of btns){
    boton.classList.remove('playing');
  }
  btn.classList.add('playing');
    // audio.onended = () => {
    //   btn.classList.remove('playing');
    // }
  audio.play();

}




