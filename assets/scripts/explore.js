// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const img = document.querySelector('img');
  const text = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talk = document.querySelector('button');  

  let voices = [];

  // Get list of voices
  function getVoices() {
    voices = synth.getVoices();
    voiceSelect.innerHTML = '';  
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      if (voice.default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);  
    });
  }

  // Load voices
  getVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoices;
  }

  // Speech to text
  talk.addEventListener('click', () => {
    if (synth.speaking) {
        console.error('SpeechSynthesis is already speaking.');
        return;
    }

    // Check if the text is not empty
    if (text.value !== '') {
      const utterance = new SpeechSynthesisUtterance(text.value);
      const selectedVoiceName = voiceSelect.selectedOptions[0].getAttribute('data-name');
      utterance.voice = voices.find(voice => voice.name === selectedVoiceName);
      
      // Image change on start and end of speech
      utterance.onstart = () => {
        img.src = 'assets/images/smiling-open.png';
      };
      utterance.onend = () => {
        img.src = 'assets/images/smiling.png';
      };
      utterance.onerror = () => {
        img.src = 'assets/images/smiling.png';
      };
      synth.speak(utterance);
    }
  });
}
