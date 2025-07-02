import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      "This summit opened my eyes to the future of AI and how it will shape industries.",
    author: "Mark Vandersteen",
    role: "CTO, NeuralTech",
    bgColor: "bg-gray-800 text-white",
  },
  {
    id: 2,
    quote:
      "Incredible speakers, top-tier networking, and cutting-edge discussions all in one place.",
    author: "Elena Rojas",
    role: "AI Researcher, DeepMind",
    bgColor: "bg-blue-600 text-white",
    highlight: "THE BEST AI EVENT!",
  },
  {
    id: 3,
    quote:
      "From hands-on workshops to visionary talks, this summit is a must-attend for AI professionals.",
    author: "David Laurent",
    role: "CEO, FutureAI Labs",
    bgColor: "bg-gray-200 text-gray-900",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 md:px-20 bg-black">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">    
            What People Are Saying
        </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className={`${t.bgColor} rounded-2xl p-6 shadow-lg flex flex-col justify-between`}
          >
            {t.highlight && (
              <h3 className="text-sm font-bold uppercase tracking-wide mb-2">
                {t.highlight}
              </h3>
            )}
            <p className="italic mb-4">"{t.quote}"</p>
            <div className="flex items-center space-x-3 mt-auto">
              <div className="w-8 h-8 rounded-full bg-white/20"></div> {/* Placeholder for avatar */}
              <div>
                <p className="text-sm font-medium">{t.author}</p>
                <p className="text-xs opacity-80">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
