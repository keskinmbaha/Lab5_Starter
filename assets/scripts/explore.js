// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var synth = window.speechSynthesis;
  setTimeout(() => {
    var voices = voiceLoad(synth);
    buttonClick(synth, voices);
  }, 50);
}

function voiceLoad (synth){
  var voiceSelect = document.getElementById("voice-select");
  var voices = synth.getVoices()
  
  for(var i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }

  return voices;
}

function buttonClick (synth, voices){
  var button = document.querySelector("button");

  button.addEventListener("click", function(){
    var img = document.querySelector("img");
    var text = document.getElementById("text-to-speak");
    var speakThis = new SpeechSynthesisUtterance(text.value);
    var voiceSelect = document.getElementById("voice-select");
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');

    if(text.value.length === 0 || selectedOption == null){
      return;
    }
    
    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        speakThis.voice = voices[i];
      }
    }

    console.log(text.value);
    synth.speak(speakThis);
    img.src = "assets/images/smiling-open.png";
    speakThis.onend = function (){img.src = "assets/images/smiling.png";};
  })
}