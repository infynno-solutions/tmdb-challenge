"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import Card from "../Card";
import Image from "next/image";
import { useRef } from "react";

export default function (props: {
	cardData: {
		image?: string;
		release_year?: string;
		title?: string;
		rating?: number;
		genre?: string;
	}[];
}) {
	const swiperRef = useRef<SwiperRef>(null);
	return (
		<>
			<button className="shrink-0" onClick={() => {swiperRef?.current?.swiper?.slidePrev()}}>
				<Image width={48} height={48} src="/Chevron right.png" alt="previous" />
			</button>
			<Swiper
				ref={swiperRef}
				breakpoints={{
					1280: { slidesPerView: 4 },
					1024: { slidesPerView: 3 },
					640: { slidesPerView: 2 },
					0: { slidesPerView: 1 },
				}}
				// slidesPerView={4}
				spaceBetween={30}
			>
				{props.cardData.map((data) => (
					<SwiperSlide>
						<Card {...data} />
					</SwiperSlide>
				))}
			</Swiper>
			<button className="shrink-0" onClick={() => {swiperRef?.current?.swiper?.slideNext()}}>
				<Image width={48} height={48} src="/Chevron left.png" alt="next" />
			</button>
		</>
	);
}
