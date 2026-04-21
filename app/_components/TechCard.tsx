import Image from "next/image";
import type { TechCardItem } from "../_lib/constants";

interface TechCardProps {
	cardInfo: TechCardItem;
}

const TechCard = ({ cardInfo }: TechCardProps) => {
	const { name, description, imageUrl, bgColor } = cardInfo;

	return (
		<div className="flex flex-1 gap-5 p-2.5 rounded-xl border border-[#FAFAFA] dark:border-dark-200 bg-[#FAFAFA] dark:bg-dark-200 hover:bg-[#F2F2F2] dark:hover:bg-dark-300 hover:border-[#E0E0E0] dark:hover:border-dark-700 transition-colors duration-200">
			<div className={`p-3 ${bgColor} rounded-lg w-fit`}>
				<Image
					src={imageUrl}
					width={32}
					height={32}
					alt={`${name} logo`}
					className={`size-8 ${name === "NextJS" ? "dark:invert" : ""}`}
					loading="lazy"
				/>
			</div>
			<div>
				<h3 className="text-lg font-medium">{name}</h3>
				<p className="text-dark-200/70 dark:text-white/70 text-sm">
					{description}
				</p>
			</div>
		</div>
	);
};

export default TechCard;
