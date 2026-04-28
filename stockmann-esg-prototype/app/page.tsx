"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: 2020, emissions: 100 },
  { year: 2021, emissions: 90 },
  { year: 2022, emissions: 80 },
  { year: 2023, emissions: 70 },
  { year: 2030, emissions: 58 }
];

export default function Home() {
  return (
    <main className="p-10 space-y-10">
      <h1 className="text-4xl font-bold">
        Stockmann ESG Dashboard
      </h1>

      <section className="grid grid-cols-3 gap-6">
        <div className="p-6 bg-green-100 rounded-2xl">
          <h2>Emissions Target</h2>
          <p className="text-2xl">-42% by 2030</p>
        </div>

        <div className="p-6 bg-blue-100 rounded-2xl">
          <h2>Sustainable Materials</h2>
          <p className="text-2xl">65%</p>
        </div>

        <div className="p-6 bg-purple-100 rounded-2xl">
          <h2>Supplier Compliance</h2>
          <p className="text-2xl">92%</p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">
          Emissions Trend
        </h2>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="emissions" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">AI Insights</h2>
        <div className="p-6 bg-gray-100 rounded-xl">
          <p>
            Supply chain emissions are the largest ESG factor.
            Circular economy offers the biggest improvement potential.
          </p>
        </div>
      </section>
    </main>
  );
}