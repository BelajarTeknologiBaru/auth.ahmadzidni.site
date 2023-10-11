import axios from "axios";

export async function getAnimePopular() {
  const response = await axios.get("https://api.jikan.moe/v4/top/anime?limit=8");
  const data = response.data.data;

  return data;
}

export async function getDetailAnimePopular(id) {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}`);
    const data = response.data.data;

    return data;
  } catch (error) {
    console.log(error);
  }
}
