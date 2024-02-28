/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";

export default function ({ item, index }: any) {
	const genreMap = [
		{
			id: 28,
			name: "Action",
		},
		{
			id: 12,
			name: "Adventure",
		},
		{
			id: 16,
			name: "Animation",
		},
		{
			id: 35,
			name: "Comedy",
		},
		{
			id: 80,
			name: "Crime",
		},
		{
			id: 99,
			name: "Documentary",
		},
		{
			id: 18,
			name: "Drama",
		},
		{
			id: 10751,
			name: "Family",
		},
		{
			id: 14,
			name: "Fantasy",
		},
		{
			id: 36,
			name: "History",
		},
		{
			id: 27,
			name: "Horror",
		},
		{
			id: 10402,
			name: "Music",
		},
		{
			id: 9648,
			name: "Mystery",
		},
		{
			id: 10749,
			name: "Romance",
		},
		{
			id: 878,
			name: "Science Fiction",
		},
		{
			id: 10770,
			name: "TV Movie",
		},
		{
			id: 53,
			name: "Thriller",
		},
		{
			id: 10752,
			name: "War",
		},
		{
			id: 37,
			name: "Western",
		},
	];

	return (
		<div className="select-none relative">
			<img
				src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
				className="w-full select-none h-[370px] object-cover mb-3"
				draggable={false}
				alt="img"
			/>

			<div className="flex select-none items-center justify-between absolute top-4 w-full px-4">
				{index === 0 ? (
					<span className="py-1 px-2 text-xs font-bold bg-[#f6faffaf] rounded-xl">
						TV SERIES
					</span>
				) : <span></span>}
				<img src={"images/Favorite.svg"} alt="heart" width={20} height={20} />
			</div>
			<p className="mb-2 select-none md:text-sm text-xs font-semibold text-[#9CA3AF]">
				USA, {item.release_date.split("-")[0]} {index === 0 && "- Current"}
			</p>
			<p className="mb-2 select-none lg:text-lg text-base font-bold">
				{item.original_title}
			</p>

			<div className="flex select-none items-center gap-3 mb-3">
				<p className="bg-[#eeb12c] text-xs md:text-sm font-bold py-[2px] px-2 rounded">
					IMDb
				</p>
				<p className="text-xs md:text-sm">
					{(item.vote_average * 10).toFixed(2)} / 100
				</p>
				<div className="ml-4 flex items-center gap-2">
					<img src={"images/tomato.svg"} alt="tomato" />
					<p className="text-xs md:text-sm">
						{(item.popularity / 100).toFixed(2)}%
					</p>
				</div>
			</div>
			<span className="pb-2 text-xs font-semibold text-[#9CA3AF] line-clamp-1">
				{item.genre_ids.map(
					(id: number) =>
						`${genreMap.find((item) => item.id === id)?.name || ""}`
				).join(", ")}
			</span>
		</div>
	);
}
