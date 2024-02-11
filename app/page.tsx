import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-5">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Compose </h1>
				<h1 className={title({ color: "green" })}>invoices </h1>
				<h1 className={title()}>
          			with elaborate simplicity.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
          Fast and modern approach to managing your startup.
				</h2>
			</div>
		</section>
	);
}
