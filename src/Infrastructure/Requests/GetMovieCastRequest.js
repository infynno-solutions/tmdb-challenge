const baseUrl = process.env.NEXT_PUBLIC_APP_API_URL;

const url = `${baseUrl}/3/person/popular?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_APP_API_KEY}`;

export const GetMovieCastRequest = async (setMovieCast, setLoading) => {
  try {
    setLoading(true);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    const data = await response.json();

    setLoading(false);

    if (response.status === 200) {
      if (data?.results && Array.isArray(data.results)) {
        setMovieCast(data.results);
      }
    }
  } catch (error) {
    console.log(error);
  }
};
