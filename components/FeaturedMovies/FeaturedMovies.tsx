import { APIManager } from "@/utils/api";
import { MoviePropsData } from "../Card";
import ResponsiveSwiper from "../Swiper/ResponsiveSwiper";
import genreListBackUp from "./genreList.json";
import styles from "../Swiper/Swiper.module.css";

async function getData() {
	const FEATURED_MOVIES_API = "/3/movie/now_playing?language=en-US&page=1";
	const apiManager = APIManager.getInstance();

	let data: {results: MoviePropsData[]} | undefined;
	try {
		data = await apiManager.get(FEATURED_MOVIES_API);
		return data?.results;
	} catch (error) {
		console.log("cannot fetch featured movies: ", error)
		data = undefined;
		return data
	}
}

async function getGenreList() {
	"use server";
	const apiManager = APIManager.getInstance();
	const GENRE_URL = "/3/genre/movie/list?language=en";

	let result: { genres: { id: number; name: string }[] } | undefined;
	try {
		result = await apiManager.get(GENRE_URL);
		return result?.genres;
	} catch (err) {
		result = undefined;
		return result;
	}
}

function calculateGenre(genre_ids: number[], genreList: { id: number; name: string }[]) {
	return genre_ids.map((id) => genreList.find((genre) => genre.id === id)?.name).join(", ");
}

export default async function () {
	const data = await getData();
	const genreList = await getGenreList() || genreListBackUp;
	if (!data) return <>Error Fetching - check .env</>;

	const cardData = data.map((item) => ({
		image: item.poster_path,
		release_year: new Date(item.release_date).getFullYear().toString(),
		title: item.original_title,
		rating: item.vote_average,
		genre: calculateGenre(item.genre_ids, genreList),
	}))
	return (
		<section className="full-w-container lg:mt-16 md:mt-12 mt-10">
			<div className=" flex justify-between items-center mb-8 w-11/12 mx-auto">
			<h3
				className={`${styles.swiper_heading}`}
			>
				Featured Movies
			</h3>
			</div>
			<div className="flex items-center">
				<ResponsiveSwiper cardData={cardData}  />
			</div>
		</section>
	)
}