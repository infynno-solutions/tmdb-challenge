interface ImdbRatingProps {
  rating: number;
}
function ImdbRating({ rating }: ImdbRatingProps) {
  return (
    <div className="flex items-center gap-3">
      <img className="h-[25px]" src="/imdb.png" alt="imdb logo" />
      <p className="text-white">{rating * 10} / 100</p>
    </div>
  );
}
export default ImdbRating;
