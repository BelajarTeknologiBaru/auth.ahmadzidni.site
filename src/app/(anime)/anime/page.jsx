import NavbarChat from "@/app/(site)/chat/components/NavbarChat";
import CardListAnimePopular from "@/app/components/AnimeComponents/AnimePopular";
import KarakterPopular from "@/app/components/AnimeComponents/KarakterPopular";
import Link from "next/link";

export const metadata = {
  title: "Anime",
};

const AnimePage = async () => {
  return (
    <>
      <div className="">
        <NavbarChat />
      </div>
      <div className="hero min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url(https://rare-gallery.com/uploads/posts/342367-Jujutsu-Kaisen-Anime-Sorcery-Fight-Satoru-Gojo.jpg)" }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
          <h1 className="mb-5 text-4xl lg:text-5xl font-bold text-white">Cari Informasi Tentang Anime</h1>
          <div className="flex items-center justify-center">
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-primary ml-2 mt-0  md:ml-2">Cari</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-between">
          <h1 className="text-xl font-bold my-5 ml-3 md:ml-0">Anime Paling Populer</h1>
          <Link href="#" className="text-xl font-bold my-5 underline text-primary">
            Lihat semua
          </Link>
        </div>
        <div>
          <CardListAnimePopular />
        </div>
        <div>
          <h1 className="text-xl font-bold my-5 ml-3 md:ml-0">Karakter Paling Populer</h1>
        </div>
        <div className="mt-5">
          <KarakterPopular />
        </div>
      </div>
    </>
  );
};

export default AnimePage;
