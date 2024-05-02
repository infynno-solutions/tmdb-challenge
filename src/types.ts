type IMovieCard = {
  genres: string[];
  id: number;
  language: string;
  imageUrl: string;
  releaseYear: string;
  title: string;
  votePercent: string;
};

type ITopRatedMovie = {
  id: number;
  title: string;
  overview: string;
  imageUrl: string;
  votePercent: string;
};

type IPersonCard = {
  id: number;
  imageUrl: string;
  name: string;
};
