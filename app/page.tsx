import MoviesBanner from "@/components/MoviesBanner";
import Navbar from "../components/Navbar";
import Featured from "@/components/Featured";
import Cast from "@/components/Cast";
import Footer from "@/components/Footer";

export default function () {
	return (
		<div>
			<Navbar />
			<MoviesBanner />
			<Featured />
			<Cast />
			<Footer />
		</div>
	);
}
