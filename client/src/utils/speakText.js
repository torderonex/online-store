export function speakText(text) {
    window.speechSynthesis.cancel();
  
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  }