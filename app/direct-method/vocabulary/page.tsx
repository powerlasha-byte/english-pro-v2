"use client";

import Layout from "@/app/components/Layout";
import LearningEngine from "@/app/components/LearningEngine/LearningEngine";
import { useParams } from "next/navigation";
import { getUnitData } from "@/app/lib/directMethod";

export default function VocabularyPage() {
  const { id } = useParams();

  const { vocabulary } = getUnitData(id as string);

  return (
    <Layout>
      <LearningEngine
        items={vocabulary}
        titleKey="english"
        subtitleKey="georgian"
        hiddenText="Translation Hidden"
        revealButtonText="👁 Show Translation"
        hideButtonText="🙈 Hide Translation"
      />
    </Layout>
  );
}