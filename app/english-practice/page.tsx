"use client";

import { meetingSentences } from "../data/practice/meetingSentences";

export default function EnglishPractice() {

    const current = meetingSentences[0];

    return (

        <div className="p-10">

            <h1 className="text-4xl font-bold text-purple-400 mb-8">

                English Practice

            </h1>

            <div className="bg-slate-900 rounded-3xl p-8">

                <h2 className="text-sm text-gray-400">

                    🇬🇧 English

                </h2>

                <p className="text-4xl font-bold text-white mt-4">

                    {current.english}

                </p>

                <h2 className="text-sm text-gray-400 mt-10">

                    🇬🇪 ქართული

                </h2>

                <p className="text-3xl text-purple-300 mt-4">

                    {current.georgian}

                </p>

            </div>

        </div>

    );

}