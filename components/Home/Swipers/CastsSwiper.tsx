'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useRef, useCallback } from 'react'
import { Navigation } from 'swiper/modules'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import 'swiper/css'
import Image from 'next/image'

interface Cast {
	name: string
	profile_path: string
}

interface Props {
	data: { results: Cast[] }
}

const CastsSwiper: React.FC<Props> = ({ data }) => {
	const sliderRef = useRef<any>(null)

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slidePrev()
	}, [])

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return
		sliderRef.current.swiper.slideNext()
	}, [])

	return (
		<>
			<Swiper
				ref={sliderRef}
				slidesPerView={4}
				spaceBetween={80}
				modules={[Navigation]}
				className="select-none">
				{data.results.map((cast, _i) => {
					if (cast.profile_path !== null) {
						return (
							<SwiperSlide
								key={_i}
								className="flex justify-center space-y-3">
								<Image
									src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
									alt={cast.name}
									width={235}
									height={235}
									loading="lazy"
									className="h-auto w-full"
								/>
								<p className="text-lg font-bold">{cast.name}</p>
							</SwiperSlide>
						)
					} else {
						return null
					}
				})}
			</Swiper>
			<button
				className="absolute -left-20 top-1/2 z-10 -translate-y-1/2 transform"
				onClick={handlePrev}>
				<SlArrowLeft className="size-8 text-gray-500" />
			</button>
			<button
				className="absolute -right-20 top-1/2 z-10 -translate-y-1/2 transform"
				onClick={handleNext}>
				<SlArrowRight className="size-8 text-gray-500" />
			</button>
		</>
	)
}

export default CastsSwiper
