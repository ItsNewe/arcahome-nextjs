"use client";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";

export function Navbar() {
	const { theme, setTheme } = useTheme();
	const toggleTheme = () => {
		console.log("Toggling theme from", theme);
		setTheme(theme === "light" ? "dark" : "light");
	};
	return (

		<nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
			<GlowingEffect
				blur={0}
				borderWidth={3}
				spread={80}
				glow={true}
				disabled={false}
				proximity={64}
				inactiveZone={0.01}
			/>
			<div className="flex items-center gap-2">
				<Image src="https://arcafin.fr/content/arca.png" width={50} height={50} alt="Arca Logo" />
			</div>
			<button
				onClick={toggleTheme}
				className={cn(
					"flex h-10 w-10 items-center justify-center rounded-full transition-colors",
					"bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
					"dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
				)}
				aria-label="Toggle theme"
			>
				{theme === "light" ? (
					<Moon className="h-5 w-5" />
				) : (
					<Sun className="h-5 w-5" />
				)}
			</button>
			<button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
				Login
			</button>
		</nav>
	);
};