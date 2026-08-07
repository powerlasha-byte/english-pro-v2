export class AudioPlayer {
  stop() {
    window.speechSynthesis.cancel();
  }

  pause() {
    window.speechSynthesis.pause();
  }

  resume() {
    window.speechSynthesis.resume();
  }

  isSpeaking() {
    return window.speechSynthesis.speaking;
  }
}

export const player = new AudioPlayer();