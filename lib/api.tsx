export const fetchFeaturedCasts = async () => {
	try {
		const res = await fetch(
			`${process.env.TMDB_API_BASE_URL}/trending/person/day?language=en-US`,
			{
				method: 'GET',
				cache: 'force-cache',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
				},
			}
		)
		if (!res.ok) {
			throw new Error('Something went wrong!')
		}
		const data = await res.json()
		return data
	} catch (error) {
		console.error('Error fetching featured casts', error)
		throw new Error('Something went wrong! Please try again later.')
	}
}

export const fetchFeaturedMovies = async () => {
	try {
		const res = await fetch(
			`${process.env.TMDB_API_BASE_URL}/trending/movie/day?language=en-US`,
			{
				method: 'GET',
				cache: 'force-cache',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
				},
			}
		)
		if (!res.ok) {
			throw new Error('Something went wrong!')
		}
		const data = await res.json()
		return data
	} catch (error) {
		console.error('Error fetching featured movies', error)
		throw new Error('Something went wrong! Please try again later.')
	}
}

export const fetchGenresList = async () => {
	try {
		const res = await fetch(
			`${process.env.TMDB_API_BASE_URL}/genre/movie/list?language=en`,
			{
				method: 'GET',
				cache: 'force-cache',
				headers: {
					accept: 'application/json',
					Authorization: `Bearer ${process.env.TMDB_READ_ACCESS_TOKEN}`,
				},
			}
		)
		if (!res.ok) {
			throw new Error('Something went wrong!')
		}
		const data = await res.json()
		return data
	} catch (error) {
		console.error('Error fetching genres list:', error)
		throw new Error('Something went wrong! Please try again later.')
	}
}
