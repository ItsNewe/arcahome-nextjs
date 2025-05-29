"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

//UI Components
import { BackgroundBeams } from "@/components/ui/background-beams";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";

//Block components
import { FeaturesSection } from "@/components/ui/featureSection";
import { ContactForm } from "@/components/contactForm";
import { useTheme } from "next-themes";


export default function homePage() {

	const logo = useTheme().theme==="dark"? "https://arcafin.fr/content/arca-white.png": "https://arcafin.fr/content/arca.png"
	return (
		<div className="px-4 py-10 md:py-20">
			<Image style={{maskImage: "linear-gradient(rgba(0,0,0,1) 0%, rgba(0, 0, 0, 0.564) 87%, transparent 100%);", margin: "auto"}} src={logo} alt="Arca Logo" width={400} height={400} />
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
					CTA
				</button>
				<Modal>
						<ModalTrigger className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900 group/modal-btn">
						  <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
							Reach Out
						  </span>
						  <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
							📧
						  </div>
						</ModalTrigger>
						<ModalBody>
						  <ModalContent>
							<h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
							  Contact Form
							</h4>
							<div className="flex justify-center items-center">
								<ContactForm />
							</div>
						  </ModalContent>
						  <ModalFooter className="gap-4">
							<button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
							  Cancel
							</button>
							<button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
							  Send
							</button>
						  </ModalFooter>
						</ModalBody>
					  </Modal>
			</motion.div>
			<BackgroundBeams />
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
				className="relative z-2 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
			>
				<div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
					<Image
						src="/img/filler.png"
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
			
			<FeaturesSection/>
		</div>
		
	);
}
