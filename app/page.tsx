"use client";

import BenchmarkContainer from "@/components/Benchmark";

export default function Home() {
  return (
    <main>
      <a
        href="https://fernandohiroshi.vercel.app/"
        className="text-white hover:text-purple-400 ease-in-out duration-300 font-bold fixed right-8 md:right-16 top-8 underline"
        title="Hiroshi portfolio"
      >
        Contact me.
      </a>
      <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] flex justify-center items-center">
        <BenchmarkContainer />
      </div>
    </main>
  );
}
