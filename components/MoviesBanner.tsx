"use client";
import { useEffect, useState } from "react";

export default function () {
	const [list, setList] = useState<any>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(0);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
				},
			}
		)
			.then((res) => res.json())
			.then((res) => {
				const data = res?.results?.slice(0, 5);
				setList(data.slice(0, 5));
			})
			.catch((err) => {
				console.log("error", err);
			});
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex: any) => (prevIndex + 1) % 5);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<div className="h-[80svh] text-white min-h-[450px] overflow-hidden flex flex-col">
				{list?.slice(0, 5).map((item: any) => (
					<div
						style={{
							transform: `translateY(-${currentIndex * 100}%)`,
						}}
						className="relative shrink-0 transition-all duration-300 h-full w-full"
					>
						<img
							src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
							alt="Slider Image"
							className="h-full w-full brightness-75 object-cover"
						/>
						<div className="absolute h-full w-full inset-0">
							<div className="w-11/12 mx-auto max-w-7xl">
								<div className="sm:w-1/2 h-full py-20 lg:py-24">
									<p className="text-white font-bold lg:text-5xl md:text-4xl sm:text-2xl text-xl mb-3">
										{item.original_title}
									</p>
									<div className="flex items-center gap-3 mb-6">
										<p className="bg-[#eeb12c] text-black py-1 px-2 rounded">
											IMDB
										</p>
										<p className="text-white">{item.vote_average * 10} / 100</p>
										<div className="ml-4 flex items-center gap-2">
											<img
												src={"images/tomato.svg"}
												alt="heart"
												width={15}
												height={15}
											/>
											<p className="text-white text-xs">{item.popularity}</p>
										</div>
									</div>
									<p className="text-white font-medium text-sm mb-5 line-clamp-6">
										{item.overview}
									</p>
									<button className="bg-[#BE123C] py-[6px] px-4 rounded-md text-white font-semibold text-base flex gap-2 items-center">
										<img src={"images/play.svg"} alt="play" />
										Watch Trailer
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
				<div className="absolute max-md:hidden right-0 top-1/3 grid grid-cols-2 gap-3">
					{[1, 2, 3, 4, 5].map((_, index) => (
						<>
							<div
								className={`${
									currentIndex === index ? "text-white" : "text-[#b4b7bd]"
								}`}
							>
								{currentIndex === index && (
									<div className="w-5 mt-4 h-1 bg-white rounded-full self-center"></div>
								)}
							</div>
							<div className={`${currentIndex === index ? "text-2xl" : ""}`} onClick={() => setCurrentIndex(index)}>{index + 1}</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
}
