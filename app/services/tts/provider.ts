import { VoiceProvider, SpeakOptions } from "./types";
import { player } from "./player";

class WebSpeechProvider implements VoiceProvider {
  async speak(text: string, options?: SpeakOptions) {
    player.stop();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.rate = options?.rate ?? 1;
    utterance.pitch = options?.pitch ?? 1;
    utterance.volume = options?.volume ?? 1;
    utterance.lang = options?.lang ?? "en-US";

    const voices = window.speechSynthesis.getVoices();

    if (options?.voiceName) {
      const selected = voices.find(
        (v) => v.name === options.voiceName
      );

      if (selected) {
        utterance.voice = selected;
      }
    }

    return new Promise<void>((resolve) => {
      utterance.onend = () => resolve();

      window.speechSynthesis.speak(utterance);
    });
  }

  stop() {
    player.stop();
  }

  pause() {
    player.pause();
  }

  resume() {
    player.resume();
  }
}

export const provider = new WebSpeechProvider();