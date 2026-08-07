"use client";

import { useCallback, useState } from "react";
import { VoiceService } from "@/app/services/tts";

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speak = useCallback(
    async (
      text: string,
      options?: {
        rate?: number;
        pitch?: number;
        volume?: number;
        lang?: string;
        voiceName?: string;
      }
    ) => {
      if (!text) return;

      try {
        setIsSpeaking(true);

        await VoiceService.speak(text, options);
      } finally {
        setIsSpeaking(false);
      }
    },
    []
  );

  const stop = useCallback(() => {
    VoiceService.stop();
    setIsSpeaking(false);
  }, []);

  const pause = useCallback(() => {
    VoiceService.pause();
  }, []);

  const resume = useCallback(() => {
    VoiceService.resume();
  }, []);

  return {
    speak,
    stop,
    pause,
    resume,
    isSpeaking,
  };
}