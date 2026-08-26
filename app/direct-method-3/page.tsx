"use client";

import Layout from "@/app/components/Layout";
import UnitCard from "@/app/components/UnitCard";
import { units } from "@/app/data/directMethod3/units";

export default function DirectMethod3Page() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto p-6">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            📘 Direct Method 3
          </h1>

          <p className="mt-2 text-slate-400">
            Improve your English step by step with the Direct Method 3 course.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {units.map((unit) => (
            <UnitCard
              key={unit.id}
              unit={unit}
              basePath="/direct-method-3"
            />
          ))}
        </div>

      </div>
    </Layout>
  );
}