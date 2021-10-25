// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  var selection = document.getElementById("horn-select");
  imageChange(selection);
  audioChange(selection);
  sliderChange();

  const jsConfetti = new JSConfetti();
  buttonClick(jsConfetti);
}

function imageChange (selection){
  var element = document.querySelector("#expose img");

  selection.addEventListener('change', function() {
    if(selection.value == "air-horn"){
      element.src = "assets/images/air-horn.svg";
    }

    else if(selection.value == "car-horn"){
      element.src = "assets/images/car-horn.svg";
    }

    else if(selection.value == "party-horn"){
      element.src = "assets/images/party-horn.svg";
    }
  })
}

function audioChange (selection){
  var element = document.getElementsByClassName("hidden")[0];

  selection.addEventListener('change', function() {
    if(selection.value == "air-horn"){
      element.src = "assets/audio/air-horn.mp3";
    }

    else if(selection.value == "car-horn"){
      element.src = "assets/audio/car-horn.mp3";
    }

    else if(selection.value == "party-horn"){
      element.src = "assets/audio/party-horn.mp3";
    }
  })
}

function sliderChange (){
  var slider = document.getElementById("volume");
  var element = document.querySelector("div > img");

  slider.addEventListener('input', function(){
    var audio = document.getElementsByClassName("hidden")[0];
    var volume = slider.value / 100.0;
    audio.volume = volume;

    if(slider.value == 0){
      element.src = "assets/icons/volume-level-0.svg"
    }

    else if(slider.value >= 1 && slider.value < 33){
      element.src = "assets/icons/volume-level-1.svg"
    }

    else if(slider.value >= 33 && slider.value < 67){
      element.src = "assets/icons/volume-level-2.svg"
    }

    else if(slider.value >= 67){
      element.src = "assets/icons/volume-level-3.svg"
    }
  })

  return slider.value;
}

function buttonClick (jsConfetti){
  var button = document.querySelector("button");
  var slider = document.getElementById("volume");

  button.addEventListener('click', function() {
    var selection = document.getElementById("horn-select");
    var audio = document.getElementsByClassName("hidden")[0];

    if(selection.value == "select"){
      return;
    }

    if(slider.value != 0){
      audio.play();
    }

    if(selection.value == "party-horn" && slider.value != 0){
      jsConfetti.addConfetti({});
    }
  })
}