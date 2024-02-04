let count = 0;
let counttak = 0;
  function nieclick() {
      count++;
      if (count >= 1){
        document.body.classList.add('czarne-tlo');
        document.getElementById('walentynki-napis').innerText = 'ZOSTANIESZ MOJA WALENTYNKĄ?';
      }
      if (count === 2){
        document.getElementById('monster').style.display = 'block';
        document.getElementById('walentynki-napis').innerText = 'ZAPYTALEM CZY ZOSTANIESZ MOJA WALENTYNKĄ?';
      }
      if (count === 3){
        document.getElementById('monster').style.display = 'none';
        document.getElementById('monsterjumpscare').style.display = 'block';
        document.getElementById('walentynki-napis').style.display = 'none';
        playSound();
      }
  }
  function playSound() {
    var audio = document.getElementById("myAudio");
    audio.play();
}

function takclick() {
    counttak++;
    if (counttak >= 1){
        document.getElementById('film').style.display = 'block';
        playVideo();
        playHappy();
      }
}

function playHappy() {
    var audio = document.getElementById("Happy");
    video.play();
}

function playVideo() {
    var video = document.querySelector('video');
    video.play();
}