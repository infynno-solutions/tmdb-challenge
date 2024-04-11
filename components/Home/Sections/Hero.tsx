import Header from '@/components/Structure/Header'
import HeroSwiper from '@/components/Home/Swipers/HeroSwiper'
import { fetchTopRatedMovies } from '@/lib/api'

interface Movie {
	results: any[]
}

export default async function Hero() {
	const movies = await fetchTopRatedMovies()
	const moviesData: Movie = movies as Movie
	return (
		<div className="relative bg-white">
			<Header />
			<div className="max-h-[calc(100vh-5rem)]">
				<HeroSwiper movies={moviesData} />
			</div>
		</div>
	)
}
