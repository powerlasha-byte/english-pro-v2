export function speak(text: string) {
  if (typeof window === "undefined") return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  const voices = window.speechSynthesis.getVoices();

  const edgeVoice =
    voices.find(v => v.name.includes("Microsoft")) ||
    voices.find(v => v.name.includes("Jenny")) ||
    voices.find(v => v.lang === "en-US") ||
    voices[0];

  if (edgeVoice) {
    utterance.voice = edgeVoice;
  }

  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  window.speechSynthesis.speak(utterance);
}