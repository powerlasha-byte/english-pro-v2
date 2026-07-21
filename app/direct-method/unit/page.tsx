import Layout from "@/app/components/Layout";
import DirectMethodCard from "@/app/components/DirectMethodCard";

export default function UnitPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            📘 Unit 1
          </h1>

          <p className="mt-2 text-slate-400">
            Past Perfect
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <DirectMethodCard
            title="Vocabulary"
            description="Learn all words from this unit."
            icon="📖"
            href="/direct-method/1/vocabulary"
          />

          <DirectMethodCard
            title="Questions"
            description="Practice speaking with questions."
            icon="💬"
            href="/direct-method/1/questions"
          />

          <DirectMethodCard
            title="Grammar"
            description="Study grammar explanations."
            icon="📚"
            href="/direct-method/1/grammar"
          />

          <DirectMethodCard
            title="Exercises"
            description="Complete exercises and earn XP."
            icon="✍️"
            href="/direct-method/1/exercises"
          />

        </div>
      </div>
    </Layout>
  );
}