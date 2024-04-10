import { FaAngleRight } from 'react-icons/fa6'
import CastsSwiper from '@/components/Home/Swipers/CastsSwiper'
import { fetchFeaturedCasts } from '@/lib/api'

interface CastData {
	results: any[]
}

export default async function FeaturedCasts() {
	const fetchedData: unknown = await fetchFeaturedCasts()
	const data: CastData = fetchedData as CastData
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-screen-xl space-y-5 px-5 py-16 md:space-y-11">
				<div className="flex flex-col items-center md:flex-row md:justify-between">
					<h2 className="text-2xl font-bold text-black md:text-4xl">
						Featured Casts
					</h2>
					<div className="inline-flex items-center space-x-2 text-rose-700">
						<span className="text-lg font-normal">See more</span>
						<FaAngleRight className="size-5" />
					</div>
				</div>
				<div className="relative">
					<CastsSwiper data={data} />
				</div>
			</div>
		</div>
	)
}
