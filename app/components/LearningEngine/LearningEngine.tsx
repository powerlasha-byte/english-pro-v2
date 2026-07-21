"use client";

import { useState } from "react";

import LearningCard from "../LearningCard";
import ActionButtons from "./ActionButtons";
import CompletionScreen from "./CompletionScreen";

import {
  LearningEngineProps,
  LearningItem,
} from "./types";

export default function LearningEngine({
  items,
  titleKey,
  subtitleKey,
  hiddenText,
  revealButtonText,
  hideButtonText,
}: LearningEngineProps) {
  const [itemsToLearn, setItemsToLearn] =
  useState<LearningItem[]>(items ?? []);

  const [current, setCurrent] = useState(0);

  const [round, setRound] = useState(1);

  const [completed, setCompleted] = useState(false);

  const [showSubtitle, setShowSubtitle] = useState(false);

  const [unknownItems, setUnknownItems] =
    useState<LearningItem[]>([]);

    
console.log("items:", items);
console.log("itemsToLearn:", itemsToLearn);

if (itemsToLearn.length === 0) {
  return (
    <CompletionScreen
      title="No items"
      description="There are no items to learn."
    />
  );
}



  const currentItem = itemsToLearn[current];

  const goNext = () => {
    if (current < itemsToLearn.length - 1) {
      setCurrent((prev) => prev + 1);
      setShowSubtitle(false);
      return;
    }

    if (round === 1 && unknownItems.length > 0) {
      setItemsToLearn(unknownItems);
      setUnknownItems([]);
      setCurrent(0);
      setRound(2);
      setShowSubtitle(false);
      return;
    }

    setCompleted(true);
  };

  const knewItem = () => {
    goNext();
  };

  const didntKnowItem = () => {
    setUnknownItems((prev) => [...prev, currentItem]);
    goNext();
  };

  if (completed) {
    return (
      <CompletionScreen
        title="🎉 Lesson Completed"
        description="Great job! You have completed this lesson."
      />
    );
  }

  return (
    <>
      <div className="mb-6">
        <p className="text-slate-400">
          Round {round}
        </p>
      </div>

      <LearningCard
        title={String(currentItem[titleKey])}
        subtitle={String(currentItem[subtitleKey])}
        speakText={String(currentItem[titleKey])}
        showSubtitle={showSubtitle}
        onToggleSubtitle={() =>
          setShowSubtitle((prev) => !prev)
        }
        hiddenText={hiddenText}
        revealButtonText={revealButtonText}
        hideButtonText={hideButtonText}
        progress={current + 1}
        total={itemsToLearn.length}
      />

      <ActionButtons
        onKnow={knewItem}
        onDontKnow={didntKnowItem}
      />
    </>
  );
}