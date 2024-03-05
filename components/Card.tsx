import { calculateScore } from "@/utils/calculateScore";
import Image from "next/image";

export type FinalProps = {
	image: string;
	release_year?: string;
	title: string;
	rating?: number;
	genre?: string;
	showFavourite?: boolean;
	index?: number;
};

export default function (props: FinalProps) {
	return (
		<article className="max-w-72 mx-auto">
			<div className="relative">
				{props.showFavourite && <><span className={`${props.index === 0 ? "inline" : "hidden"} font-bold text-xs absolute top-4 left-3 bg-[#F3F4F68a] text-gray-900 py-1 px-2 rounded-full`}>TV SERIES</span>
				<Image src="/Favourite.svg" alt="favourite" width={30} height={30} className="absolute right-3 top-4" /></>}
				<Image
					src={`${process.env.BASE_IMAGE_URL}${props.image}`}
					alt={"famous celebrity"}
					className="mb-3 w-full"
					width={200}
					height={120}
				/>
				{props.release_year && (
					<span className="text-xs text-gray-400 fobo mb-3">
						USA, {props.release_year}
					</span>
				)}
				<h5 className="font-bold md:text-lg text-base mb-3">{props.title}</h5>
				{props.rating && (
					<div className="flex justify-between mb-3">
						<div className="flex gap-3">
							<span>
								<Image src="/imdb.png" alt="imdb" width={35} height={17} />
							</span>
							{calculateScore(props.rating, 2)} / 100
						</div>
						<div className="flex gap-3">
							<span>
								<Image
									src="/tomato-card.png"
									alt="rotten tomatoes"
									width={16}
									height={16}
								/>
							</span>
							{calculateScore(props.rating)} / 100
						</div>
					</div>
				)}
				{props.genre !== "" && (
					<small className="text-gray-400 font-bold">{props.genre}</small>
				)}
			</div>
		</article>
	);
}
