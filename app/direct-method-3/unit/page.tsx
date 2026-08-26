import Layout from "@/app/components/Layout";
import DirectMethodCard from "@/app/components/DirectMethodCard";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UnitPage({ params }: Props) {
  const { id } = await params;

  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            📘 Unit {id}
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
            href={`/direct-method-3/unit/${id}/vocabulary`}
          />

          <DirectMethodCard
            title="Questions"
            description="Practice speaking with questions."
            icon="💬"
            href={`/direct-method-3/unit/${id}/questions`}
          />

          <DirectMethodCard
            title="Grammar"
            description="Study grammar explanations."
            icon="📚"
            href={`/direct-method-3/unit/${id}/grammar`}
          />

          <DirectMethodCard
            title="Exercises"
            description="Complete exercises and earn XP."
            icon="✍️"
            href={`/direct-method-3/unit/${id}/exercises`}
          />

        </div>
      </div>
    </Layout>
  );
}