import { FaAngleRight } from 'react-icons/fa6'
import MoviesSwiper from '@/components/Home/Swipers/MoviesSwiper'
import { fetchFeaturedMovies, fetchGenresList } from '@/lib/api'

interface Movie {
	results: any[]
}

interface Genre {
	genres: any[]
}

export default async function FeaturedMovies() {
	const [movies, genres] = await Promise.all([
		fetchFeaturedMovies(),
		fetchGenresList(),
	])
	const moviesData: Movie = movies as Movie
	const genresData: Genre = genres as Genre

	return (
		<div className="bg-white">
			<div className="mx-auto max-w-screen-xl space-y-5 px-5 py-16 md:space-y-11">
				<div className="flex flex-col items-center md:flex-row md:justify-between">
					<h2 className="text-2xl font-bold text-black md:text-4xl">
						Featured Movies
					</h2>
					<div className="inline-flex items-center space-x-2 text-rose-700">
						<span className="text-lg font-normal">See more</span>
						<FaAngleRight className="size-5" />
					</div>
				</div>
				<div className="relative">
					<MoviesSwiper movies={moviesData} genres={genresData} />
				</div>
			</div>
		</div>
	)
}
