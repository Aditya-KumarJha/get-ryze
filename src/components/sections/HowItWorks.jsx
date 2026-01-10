import React from "react";
import { motion } from "framer-motion";
import { Zap, BarChart2, CheckCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: <Zap className="text-[#FF4801] w-10 h-10" />,
    title: "Connect Your Ad Accounts",
    desc: "Securely link Google, Meta, LinkedIn, and more in seconds.",
  },
  {
    icon: <BarChart2 className="text-[#FF4801] w-10 h-10" />,
    title: "AI Analyzes & Optimizes",
    desc: "Our AI scans your campaigns, finds wasted spend, and reallocates budget for max ROI.",
  },
  {
    icon: <CheckCircle className="text-[#FF4801] w-10 h-10" />,
    title: "Approve Smart Suggestions",
    desc: "Get clear, actionable recommendations. Approve with one click.",
  },
  {
    icon: <TrendingUp className="text-[#FF4801] w-10 h-10" />,
    title: "Watch Results Grow",
    desc: "See your performance improve—more leads, lower costs, less manual work.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-20 tracking-tight">
          How <span className="text-[#FF4801]">Ryze</span> Works
        </h2>

        {/* Connector line (tablet + desktop only) */}
        <div className="hidden md:block absolute top-[58%] left-0 w-full border-t-2 border-dashed border-zinc-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative bg-white border border-zinc-100 rounded-2xl shadow-md p-8
                         flex flex-col items-center text-center
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Step dot */}
              <div className="hidden md:flex absolute -top-6 w-12 h-12 rounded-full bg-white border-2 border-[#FF4801]
                              items-center justify-center font-bold text-[#FF4801]">
                {idx + 1}
              </div>

              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-zinc-500">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
