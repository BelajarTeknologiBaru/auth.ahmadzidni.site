import { getDetailAnimePopular } from "@/app/utils/getAnimePopular";

const DetailAnime = async ({ params }) => {
  const data = await getDetailAnimePopular(params.id);
  // console.log(data);
  return (
    <>
      <div>
        <img loading="lazy" src={data?.images.webp.image_url} alt="" />
        <div>{data?.title}</div>
      </div>
    </>
  );
};

export default DetailAnime;
