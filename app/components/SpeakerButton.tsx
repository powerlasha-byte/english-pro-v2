"use client";

import { Volume2 } from "lucide-react";
import { useSpeech } from "@/app/hooks/useSpeech";

interface SpeakerButtonProps {
  text: string;
  lang?: string;
  className?: string;
}

export default function SpeakerButton({
  text,
  lang = "en-US",
  className = "",
}: SpeakerButtonProps) {
  const { speak, isSpeaking } = useSpeech();

  const handleClick = async () => {
    if (!text || isSpeaking) return;

    await speak(text, {
      lang,
      rate: 0.9,
      pitch: 1,
      volume: 1,
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isSpeaking}
      title={isSpeaking ? "Speaking..." : "Listen"}
      className={`
        relative
        flex items-center justify-center
        w-12 h-12
        rounded-full
        transition-all
        duration-300

        ${
          isSpeaking
            ? "bg-emerald-500 shadow-2xl shadow-emerald-500/60 scale-110"
            : "bg-violet-600 hover:bg-violet-500 hover:scale-105 shadow-lg shadow-violet-500/40"
        }

        ${className}
      `}
    >
      {isSpeaking ? (
        <div className="flex items-end gap-[3px] h-6">
          <span className="w-[3px] h-2 bg-white rounded animate-[pulse_0.8s_infinite]" />
          <span className="w-[3px] h-5 bg-white rounded animate-[pulse_1s_infinite]" />
          <span className="w-[3px] h-3 bg-white rounded animate-[pulse_0.7s_infinite]" />
          <span className="w-[3px] h-6 bg-white rounded animate-[pulse_1.1s_infinite]" />
        </div>
      ) : (
        <Volume2
          size={22}
          className="text-white"
        />
      )}
    </button>
  );
}