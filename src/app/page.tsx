"use client";
import React from "react";
import { BackgroundBeams } from "./components/ui/backgroundBeams";
import { ContainerTextFlip } from "./components/ui/containerTextFlip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const words = ["better", "modern", "beautiful", "awesome"];

export default function homePage() {
	
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Header
        </h1>
        <p></p>
       <div className="inline-block">
        Lorem ipsum <ContainerTextFlip words={words} />
        {/* <Blips /> */}
      </div>
        <input
          type="text"
          placeholder="hi@test.test"
          className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}
