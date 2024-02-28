"use client";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import CastCard from "./CastCard";

export default function () {
	const [casts, setCasts] = useState<any>([]);
	const swiperRef = useRef<any>(null);

	useEffect(() => {
		fetch("https://api.themoviedb.org/3/person/popular?language=en-US&page=1", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
			},
		})
			.then((res) => res.json())
			.then((res) => {
				setCasts(res?.results);
			})
			.catch((error) => {
				console.log("error", error);
			});
	}, []);

	return (
		<div className="w-11/12 lg:py-20 md:py-16 py-12 mx-auto max-w-7xl">
			<div className="mb-8 flex sm:items-center max-sm:flex-col justify-between">
				<div className="text-black md:text-3xl text-2xl lg:text-4xl font-bold">
					Featured Casts
				</div>
				<Link href={"#"} className="text-[#dd315c] text-lg font-normal">
					See more {">"}
				</Link>
			</div>
			<div className="flex">
				<button
					className="shrink-0"
					onClick={() => {
						swiperRef?.current?.swiper?.slidePrev();
					}}
				>
					<img src="/images/Chevron right.svg" alt=">" />
				</button>
				<Swiper
					ref={swiperRef}
					breakpoints={{
						1280: {
							slidesPerView: 4,
						},
						1024: {
							slidesPerView: 3,
						},
						640: {
							slidesPerView: 2,
						},
						0: {
							slidesPerView: 1,
						},
					}}
					className="mySwiper [&_.swiper-button-next]:text-black [&_.swiper-button-prev]:text-black"
				>
					{casts?.map((item: any, index: number) => (
						<SwiperSlide>
							<CastCard item={item} index={index} />
						</SwiperSlide>
					))}
				</Swiper>
				<button
					className="shrink-0"
					onClick={() => {
						swiperRef?.current?.swiper?.slideNext();
					}}
				>
					<img src="/images/Chevron left.svg" alt=">" />
				</button>
			</div>
		</div>
	);
}
