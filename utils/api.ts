export class APIManager {
	BASE_URL: string;
	TMDB_TOKEN: string;
	private static instance: APIManager;

	private constructor() {
		this.BASE_URL = process.env.BASE_URL as string;
		this.TMDB_TOKEN = process.env.TMDB_TOKEN as string;
	}

	public static getInstance(): APIManager {
		if (!APIManager.instance) {
			APIManager.instance = new APIManager();
		}
		return APIManager.instance;
	}

	private validateUrl(url: string) {
		if (!url.startsWith("/")) {
			throw new Error("URL segment must be prefixed with a `/`");
		}
	}

	// private generateQuery(query: { [key: string]: string }) {
	// 	let queryString = "";
	// 	for (const key in query) {
	// 		queryString += `&${key}=${query[key]}`;
	// 	}
	// 	return queryString;
	// }

	public async get(url: string) {
		try {
			this.validateUrl(url);
			const fullUrl = `${this.BASE_URL}${url}`;
			const headers = {
				"accept": "application/json",
				Authorization: `Bearer ${this.TMDB_TOKEN}`
			};
	
			const response = await fetch(fullUrl, {
				headers,
			});
	
			if (!response.ok) {
				throw new Error(`Failed to fetch data. Status: ${response.status}`);
			}
	
			return await response.json();
		} catch (error) {
			console.error("Error during API request:", error);
			throw error; // Re-throw the error for handling at the higher level if needed
		}
	}
	
}
