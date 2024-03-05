import { APIManager } from "@/utils/api";
import BannerSwiper from "./BannerSwiper";

export type BannerData = {
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	vote_average: number;
	vote_count: number;
};

type TopRated = {
	results: BannerData[];
};

async function getData() {
	const apiManager = APIManager.getInstance();
	const result: TopRated | undefined = await apiManager.get(
		"/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200"
	);

	return result?.results && result.results.length > 5 && result.results.slice(0, 5) || result?.results;
}

export default async function () {
	const data = await getData();
	if (!data) return <span>Error Fetching - check .env</span>;
	return (
		<BannerSwiper data={data} />
	);
}
