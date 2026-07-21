export type LearningItem = {
  id: number;
  [key: string]: string | number;
};

export type LearningEngineProps = {
  items: LearningItem[];

  titleKey: string;
  subtitleKey: string;

  hiddenText: string;

  revealButtonText: string;
  hideButtonText: string;
};