"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/backgroundBeams";
import { motion } from "motion/react";
import { FeaturesSection } from "@/components/ui/featureSection";
import Image from "next/image";


export default function homePage() {
	return (
		<div className="px-4 py-10 md:py-20">
			<Image style={{maskImage: "linear-gradient(rgba(0,0,0,1) 0%, rgba(0, 0, 0, 0.564) 87%, transparent 100%);", margin: "auto"}} src="https://arcafin.fr/content/arca-white.png" alt="Arca Logo" width={400} height={400} />
			<h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
				{"Lorem ipsum dolor sit amet"
					.split(" ")
					.map((word, index) => (
						<motion.span
							key={index}
							initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
							animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
							transition={{
								duration: 0.3,
								delay: index * 0.1,
								ease: "easeInOut",
							}}
							className="mr-2 inline-block"
						>
							{word}
						</motion.span>
					))}
			</h1>
			<motion.p
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.3,
					delay: 0.8,
				}}
				className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
			>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, numquam velit perspiciatis eum quidem quas ullam quasi? Deleniti aspernatur nobis
			</motion.p>
			<motion.div
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				transition={{
					duration: 0.3,
					delay: 1,
				}}
				className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
			>
				<button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
					Explore Now
				</button>
				<button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
					Contact Support
				</button>
			</motion.div>
			<motion.div
				initial={{
					opacity: 0,
					y: 10,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.3,
					delay: 1.2,
				}}
				className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
			>
				<div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
					<Image
						src={"/img/filler.png"}
						alt="Landing page preview"
						className="aspect-[16/9] h-auto w-full object-cover"
						height={1000}
						width={1000}
					/>
				</div>
			</motion.div>
			<div className="max-w-2xl mx-auto p-4">
				<h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
					↑ This is filler lol ↑
				</h1>
				<p></p>
			</div>
			<BackgroundBeams />
			<FeaturesSection/>
		</div>
		
	);
}
