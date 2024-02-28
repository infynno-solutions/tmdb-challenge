import ImdbRating from "./ImdbRating";

interface InfoSectionProps {
  title: string;
  details: string;
  imdbRating: number;
}
function InfoSection({ title, details, imdbRating }: InfoSectionProps) {
  return (
    <section className="flex flex-col gap-3 text-white">
      <h1 className="font-bold text-5xl">{title}</h1>
      <ImdbRating rating={imdbRating} />
      <p className="font-medium text-sm">{details}</p>
      <button className="bg-[#BE123C] py-[6px] px-4 w-max rounded-md text-white font-semibold text-base flex gap-2 items-center">
        <img src={"/play.svg"} alt="play button" />
        WATCH TRAILER
      </button>
    </section>
  );
}
export default InfoSection;
