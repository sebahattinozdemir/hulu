import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Results({ results }) {
  return (
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
      {results.map((res) => (
        <ThumbNail thumb={res} key={res.id} />
      ))}
    </div>
  );
}

export default Results;

const ThumbNail = ({ thumb }) => {
  console.log(thumb);

  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="p-2 group cursor-pointer sm:hover:scale-105 transition duration-100 ease-in hover:z-50 ">
      <Image
        width={1920}
        height={1080}
        layout="responsive"
        src={
          `${baseUrl}${thumb.poster_path || thumb.backdrop_path} ` ||
          `${baseUrl}${thumb.backdrop_path}`
        }
      />
      <div className="p-2">
        <p className="truncate max-w-md">{thumb.overview}</p>
        <h2 className=" group-hover:font-bold group-hover:text-2xl text-white">
          {thumb.title || thumb.original_name}
        </h2>
        <p className="flex items-center opacity-0  group-hover:opacity-100">
          {thumb.media_type && `${thumb.media_type}`}
          {thumb.release_date || thumb.first_air_date}
          {"."}
          <ThumbUpIcon className="h-5 mx-2" /> {thumb.vote_count}
        </p>
      </div>
    </div>
  );
};
