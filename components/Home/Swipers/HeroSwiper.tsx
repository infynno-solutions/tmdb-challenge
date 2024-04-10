'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { FaPlayCircle } from 'react-icons/fa'
import Image from 'next/image'

interface movie {
	title: string
	backdrop_path: string
	vote_average: number
	overview: string
}

interface Props {
	movies: { results: movie[] }
}

const HeroSwiper: React.FC<Props> = ({ movies }) => {
	return (
		<>
			<Swiper
				direction={'vertical'}
				pagination={{
					clickable: true,
					renderBullet: function (index, className) {
						return `<span class="${className}">${index + 1}</span>`
					},
				}}
				modules={[Pagination]}
				className="heroSwiper max-h-[inherit] w-full select-none">
				{movies.results.map((movie, _i) => {
                    {
                        if (_i > 10) return null
                        return (
                            <SwiperSlide key={_i} className="relative">
                                <Image
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    alt={movie.title}
                                    width={1080}
                                    height={800}
                                    loading="lazy"
                                    className="h-full w-full object-cover brightness-50"
                                />
                                <div className="mx-auto max-w-screen-xl px-5">
                                    <div className="absolute top-1/4 z-10">
                                        <div className="flex h-full max-w-[404px] flex-col justify-center gap-y-4 text-white">
                                            <h1 className="text-5xl font-bold">
                                                {movie.title}
                                            </h1>
                                            <div className="flex max-w-44 justify-between">
                                                <div className="inline-flex items-center space-x-2.5">
                                                    <Image
                                                        src={'/imdb.png'}
                                                        alt="imdb"
                                                        width={35}
                                                        height={17}
                                                        loading="lazy"
                                                    />
                                                    <p className="text-xs">
                                                        {movie.vote_average === 0
                                                            ? 'N/A'
                                                            : (
                                                                    movie.vote_average *
                                                                    10
                                                                ).toFixed(2)}{' '}
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
                                                    <p className="text-xs">97%</p>
                                                </div>
                                            </div>
                                            <p className="line-clamp-6 text-sm">
                                                {movie.overview}
                                            </p>
                                            <button className="inline-flex w-fit items-center gap-2 rounded-md bg-rose-700 px-4 py-2 text-sm font-bold uppercase text-white">
                                                <FaPlayCircle className="size-4" />
                                                <span>Watch Trailer</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }
					
				})}
			</Swiper>
		</>
	)
}

export default HeroSwiper
