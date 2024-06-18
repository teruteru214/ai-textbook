import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div>
			<h1>Hello, world!</h1>
			<h1 className="text-4xl font-bold">Hello, world!</h1>
			<h1 className="text-4xl font-bold">Hello, world!</h1>
			<h1 className="text-4xl font-bold">Hello, world!</h1>
		</div>
	);
}
