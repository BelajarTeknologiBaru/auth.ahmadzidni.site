import { getAnimePopular } from "@/app/utils/getAnimePopular";
import Link from "next/link";

const CardListAnimePopular = async () => {
  const animePopular = await getAnimePopular();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {animePopular &&
        animePopular.map((data) => {
          return (
            <div key={data.mal_id} className="card card-compact w-full bg-base-100 shadow-lg">
              <figure>
                <img className="h-[300px]" src={data.images.webp.image_url} loading="lazy" alt="anime" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>Jumlah Episode : {data.episodes}</p>
                <p>Score : {data.score}</p>
                <div className="card-actions">
                  <Link href={`/anime/detail/${data.mal_id}`} className="btn btn-primary btn-sm w-full">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CardListAnimePopular;
