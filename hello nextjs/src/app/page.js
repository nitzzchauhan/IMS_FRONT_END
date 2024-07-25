'use client'
import Image from "next/image";
import Learnlink from "@/components/learnlink";
import LearnUseRouter from "@/components/LearnUseRouter";
import LearnDataFetching from "@/components/LearnDataFetching";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Learnlink/>
      <LearnUseRouter/> */}
      <LearnDataFetching/>
    </main>
  );
}
