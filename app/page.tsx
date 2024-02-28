import MoviesBanner from "@/components/MoviesBanner";
import Navbar from "../components/Navbar";
import Featured from "@/components/Featured";

export default function () {
	return (
		<div>
			<Navbar />
			<MoviesBanner />
			<Featured />
		</div>
	);
}
