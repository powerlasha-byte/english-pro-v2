import Layout from "@/app/components/Layout";
import DirectMethodCard from "@/app/components/DirectMethodCard";

type Props = {
  params: {
    id: string;
  };
};

export default function UnitPage({ params }: Props) {
  const unitId = params.id;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            📘 Unit {unitId}
          </h1>

          <p className="mt-2 text-slate-400">
            Everyday English, Business, Travel and Transport
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <DirectMethodCard
            title="Vocabulary"
            description="Learn all words from this unit."
            icon="📖"
            href={`/direct-method-3/unit/${unitId}/vocabulary`}
          />

          <DirectMethodCard
            title="Questions"
            description="Practice speaking with questions."
            icon="💬"
            href={`/direct-method-3/unit/${unitId}/questions`}
          />

          <DirectMethodCard
            title="Grammar"
            description="Study grammar explanations."
            icon="📚"
            href={`/direct-method-3/unit/${unitId}/grammar`}
          />

          <DirectMethodCard
            title="Exercises"
            description="Complete exercises and earn XP."
            icon="✍️"
            href={`/direct-method-3/unit/${unitId}/exercises`}
          />

        </div>

      </div>
    </Layout>
  );
}