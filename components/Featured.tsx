"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FeaturedCard from "./FeaturedCard";

import "swiper/css";
import "swiper/css/navigation";

export default function() {
	const swiperRef = useRef<any>(null);

	const [list, setList] = useState<any>([]);

	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
			{
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
				},
			}
		)
			.then((res) => res.json())
			.then((res) => {
				setList(res?.results);
			})
			.catch((error) => {
				console.log("error", error);
			});
	}, []);

	return (
		<div className="w-11/12 mx-auto max-w-7xl lg:py-20 md:py-16 py-12">
			<div className="mb-8 flex sm:items-center max-sm:flex-col sm:justify-between">
				<div className="md:text-3xl text-2xl lg:text-4xl font-bold">
					Featured Movie
				</div>
				<Link
					href={"#"}
					className="text-[#ff3f6f] text-lg font-normal cursor-pointer"
				>
					See more {">"}
				</Link>
			</div>

			<div className="flex w-full">
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
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						0: {
							slidesPerView: 1,
						},
					}}
					className="mySwiper grow [&_.swiper-button-next]:text-black [&_.swiper-button-prev]:text-black"
				>
					{list?.map((item: any, index: number) => {
						return (
							<SwiperSlide key={index}>
								<FeaturedCard item={item} index={index} />
							</SwiperSlide>
						);
					})}
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