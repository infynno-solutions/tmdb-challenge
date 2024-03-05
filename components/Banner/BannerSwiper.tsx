"use client";
import React, { useEffect, useRef, useState } from "react";
import { BannerData } from "./Banner";
import Image from "next/image";
import styles from "./Banner.module.css";
import { calculateScore } from "@/utils/calculateScore";

export default function (props: { data: BannerData[] }) {
	const [currentIndex, setCurrentIndex] = useState(0);

	const timeoutRef = useRef<NodeJS.Timeout>();

	useEffect(() => {
		timeoutRef.current = setTimeout(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % props.data.length);
		}, 3500);

		return () => clearTimeout(timeoutRef.current);
	}, [currentIndex]);

	return (
		<section className="h-[80svh] relative text-white xl:h-screen min-h-[450px] overflow-hidden flex flex-col [&>div]:shrink-0">
			{props.data.map((movie) => (
				<div
					key={movie.id}
					className="h-full transition-transform duration-300 relative"
					style={{ transform: `translateY(-${currentIndex * 100}%)` }}
				>
					<Image
						src={`${process.env.BASE_IMAGE_URL}${movie.backdrop_path}`}
						alt="popular movie"
						className="w-full h-full object-cover"
						width={1920}
						height={1080}
					/>
					<div className="absolute inset-0 h-full w-full">
						<div className="full-w-container lg:py-28 md:py-20 py-16">
							<div className="md:w-5/12">
								<h2 className={`${styles.banner_heading} mb-6`}>
									{movie.original_title}
								</h2>
								<div className="flex gap-5 mb-6">
									<div className="flex gap-2">
										<span>
											<Image
												src="/imdb.png"
												alt="IMDb"
												width={35}
												height={17}
											/>
										</span>
										<div className="text-xs">
											{calculateScore(movie.vote_average, 2)} / 100
										</div>
									</div>
									<div className="flex gap-2">
										<span>
											<Image
												src="/tomato.svg"
												alt="IMDb"
												width={16}
												height={16}
											/>
										</span>
										<div className="text-xs">
											{calculateScore(movie.vote_average)}%
										</div>
									</div>
								</div>
								<p className="text-sm font-medium mb-6">{movie.overview}</p>
								<button className="bg-rose-700 flex md:px-4 px-3 py-3 gap-2 items-center rounded-md">
									<Image src="/Play.png" height={20} width={20} alt="play button" />
									WATCH TRAILER
								</button>
							</div>
						</div>
					</div>
				</div>
			))}
			<div className="absolute max-md:hidden right-5 top-1/3 grid grid-cols-2 gap-3">
				{Array(props.data.length)
					.fill(0)
					.map((_, i) => (
						<React.Fragment key={i}>
							<div>
								{i === currentIndex && (
									<div className="w-5 h-1 mt-3 rounded bg-white"></div>
								)}
							</div>
							<div
								className={`${
									i === currentIndex ? "text-base" : "text-sm"
								} font-bold outline-none border-none cursor-pointer bg-transparent`}
								onClick={() => {clearTimeout(timeoutRef.current);setCurrentIndex(i)}}
							>
								{i + 1}
							</div>
						</React.Fragment>
					))}
			</div>
		</section>
	);
}
