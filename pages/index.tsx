import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<h1>Welcome to AI Wordbook!</h1>
			<p>Start exploring the world of words with our AI-powered dictionary.</p>
		</div>
	);
}
