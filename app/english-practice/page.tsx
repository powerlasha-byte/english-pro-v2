"use client";

import { useState } from "react";

import Layout from "../components/Layout";
import PracticeCard from "./PracticeCard";

import { allSentences } from "../data/practice";

export default function EnglishPractice() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const current = allSentences[currentIndex];

  return (
    <Layout>

      <div className="space-y-8">

        <div>

          <h1 className="text-4xl font-bold">
            English Practice
          </h1>

          <p className="mt-2 text-slate-400">
            Practice real business conversations.
          </p>

        </div>

        <PracticeCard
          english={current.english}
          georgian={current.georgian}
        />

      </div>

    </Layout>
  );
}