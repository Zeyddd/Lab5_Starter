// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    const image = document.querySelector("[alt='No image selected']");
    image.src = `assets/images/${selectedHorn}.svg`;
    const audio = document.querySelector('.hidden');
    audio.src = `assets/audio/${selectedHorn}.mp3`;
  });

  const volume = document.getElementById('volume');
  volume.addEventListener('change', function() {
    const volumeValue = volume.value;
    const audio = document.querySelector('.hidden');
    const volumeIcon = document.getElementById('volume-controls').querySelector('img');
    if (volumeValue == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volumeValue < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volumeValue < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    audio.volume = volumeValue / 100;
  });

  const playButton = document.querySelector('button');
  playButton.addEventListener('click', function() {
    const sound = document.querySelector('.hidden');
    const audio = new Audio(sound.src);
    console.log(audio);
    audio.play();
    
    const selectedHorn = document.getElementById('horn-select').value;
    if (selectedHorn === 'party-horn') {
      const jsConfetti = new JSConfetti();
      console.log(jsConfetti)
      jsConfetti.addConfetti();
    }
  });
}