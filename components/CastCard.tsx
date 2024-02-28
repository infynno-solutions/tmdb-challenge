/* eslint-disable @next/next/no-img-element */
"use client";

export default function ({ item }: any) {
	return (
		<div className="select-none relative">
			<img
				src={`https://image.tmdb.org/t/p/w500${item?.profile_path}`}
				className="select-none h-[370px] object-cover mb-3"
				draggable={false}
				alt="celebrity"
			/>
			<p className="pb-2 select-none text-base font-bold line-clamp-1">
				{item?.original_name}
			</p>
		</div>
	);
}
