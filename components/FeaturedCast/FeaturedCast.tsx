import { APIManager } from "@/utils/api";
import { CastPropsData } from "../Card";
import ResponsiveSwiper from "../Swiper/ResponsiveSwiper";
import styles from "../Swiper/Swiper.module.css";

async function getData() {
	const FEATURED_MOVIES_API = "/3/person/popular?language=en-US&page=1";
	const apiManager = APIManager.getInstance();

	let data: {results: CastPropsData[]} | undefined;
	try {
		data = await apiManager.get(FEATURED_MOVIES_API);
		return data?.results;
	} catch (error) {
		console.log("cannot fetch featured movies: ", error)
		data = undefined;
		return data
	}
}

export default async function () {
	const data = await getData();
	if (!data) return <>Error Fetching - check .env</>;

	const cardData = data.map((item) => ({
		image: item.profile_path,
		title: item.name,
	}))
	return (
		<section className="full-w-container lg:my-16 md:my-12 my-10">
			<div className=" flex justify-between items-center mb-8 w-11/12 mx-auto">
			<h3
				className={`${styles.swiper_heading}`}
			>
				Featured Casts
			</h3>
			</div>
			<div className="flex items-center">
				<ResponsiveSwiper cardData={cardData}  />
			</div>
		</section>
	)
}