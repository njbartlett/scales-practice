var utter = new SpeechSynthesisUtterance();
utter.rate = 1;
utter.pitch = 1.0;

function speak(selectedCombo) {
    var text = selectedCombo.section + ", " + selectedCombo.playing + ", " + selectedCombo.detail
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

