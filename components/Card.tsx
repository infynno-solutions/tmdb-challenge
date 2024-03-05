import { calculateScore } from "@/utils/calculateScore";
import Image from "next/image";

export type MoviePropsData = {
	genre_ids: number[];
	id: number;
	original_title: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	vote_average: number;
	vote_count: number;
};

export type MovieProps = {
	category: "movie";
	data: MoviePropsData;
	genre: string;
};

export type CastPropsData = {
	id: number;
	name: string;
	original_name: string;
	profile_path: "/lldeQ91GwIVff43JBrpdbAAeYWj.jpg";
};

export type CastProps = {
	category: "cast";
	data: CastPropsData;
};

export type FinalProps = {
	image?: string;
	release_year?: string;
	title?: string;
	rating?: number;
	genre?: string;
};

export default function (props: FinalProps) {
	return (
		<article className="max-w-72 mx-auto">
			<div>
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
					<small className="text-gray-400">{props.genre}</small>
				)}
			</div>
		</article>
	);
}
