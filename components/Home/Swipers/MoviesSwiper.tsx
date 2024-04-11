'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useRef, useCallback } from 'react'
import { Navigation } from 'swiper/modules'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import { FaHeart } from 'react-icons/fa'
import Image from 'next/image'

interface movie {
	title: string
	poster_path: string
	release_date: string
	vote_average: number
	genre_ids: number[]
}

interface genre {
	id: number
	name: string
}

interface Props {
	movies: { results: movie[] }
	genres: { genres: genre[] }
}

const MoviesSwiper: React.FC<Props> = ({ movies, genres }) => {
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
				{movies.results.map((movie, _i) => {
					return (
						<SwiperSlide key={_i} className="flex justify-center space-y-3">
							<div className="relative">
								<Image
									src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
									alt={movie.title}
									width={235}
									height={235}
									loading="lazy"
									className="h-auto w-full"
								/>
								<div className="absolute right-3 top-3 rounded-full bg-[#F3F4F6]/40 p-2">
									<FaHeart className="text-gray-300" />
								</div>
							</div>
							<div className="space-y-2.5">
								<p className="text-xs font-bold text-gray-400">
									{new Date(movie.release_date).getFullYear()}
								</p>
								<p className="text-lg font-bold">{movie.title}</p>
								<div className="flex justify-between">
									<div className="inline-flex items-center space-x-2.5">
										<Image
											src={'/imdb.png'}
											alt="imdb"
											width={35}
											height={17}
											loading="lazy"
										/>
										<p className="text-xs text-gray-900">
											{movie.vote_average === 0
												? 'N/A'
												: (movie.vote_average * 10).toFixed(2)}{' '}
											/ 100
										</p>
									</div>
									<div className="inline-flex items-center space-x-2.5">
										<Image
											src={'/tomato.png'}
											alt="rating"
											width={16}
											height={17}
											loading="lazy"
										/>
										<p className="text-xs text-gray-900">97%</p>
									</div>
								</div>
								<p className="text-xs font-bold text-gray-400">
									{genres.genres
										.filter((genre) => movie.genre_ids.includes(genre.id))
										.map((genre) => genre.name)
										.join(', ')}
								</p>
							</div>
						</SwiperSlide>
					)
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

export default MoviesSwiper
