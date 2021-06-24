// get all voices that browser offers
var available_voices = window.speechSynthesis.getVoices();
// this will hold an english voice
var english_voice = '';

// find voice by language locale "en-US"
// if not then select the first voice
for(var i=0; i<available_voices.length; i++) {
    if(available_voices[i].lang === 'en-GBgi') {
        english_voice = available_voices[i];
        break;
    }
}
if(english_voice === '') {
    english_voice = available_voices[0];
}
var utter = new SpeechSynthesisUtterance();
utter.rate = 1;
utter.pitch = 1.0;
// utter.voice = english_voice;

function speak(selectedCombo) {
    var text = selectedCombo.section + " " + selectedCombo.playing + ", " + selectedCombo.detail
    var replaced = text
        .replace(/♭/, " flat")
        .replace(/♯/, " sharp");
    utter.text = replaced;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
}

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateAllCombos(sections) {
  var combos = [];
  for (var sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
      var section = sections[sectionIndex];
      var sectionName = section.section;
      for (var playingIndex = 0; playingIndex < section.playing.length; playingIndex++) {
          var playing = section.playing[playingIndex];
          for (var listIndex = 0; listIndex < section.list.length; listIndex++) {
              var entry = section.list[listIndex];
              combos.push({
                  section: sectionName,
                  playing: playing,
                  detail: entry
              });
          }
      }
  }
  return combos;
}

