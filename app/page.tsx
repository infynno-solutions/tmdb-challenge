import { Suspense } from 'react'
import Hero from '@/components/Home/Sections/Hero'
import FeaturedCasts from '@/components/Home/Sections/FeaturedCasts'
import FeaturedMovies from '@/components/Home/Sections/FeaturedMovies'
import Loading from '@/components/Loading/loading'

export default function Home() {
	return (
		<>
			<Hero />
			<Suspense fallback={<Loading />}>
				<FeaturedMovies />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<FeaturedCasts />
			</Suspense>
		</>
	)
}
