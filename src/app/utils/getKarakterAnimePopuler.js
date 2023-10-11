import axios from "axios";

export async function getKarakterAnimePopular() {
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/top/characters?limit=8`);
    const data = response.data.data;

    return data;
  } catch (error) {
    console.log(error);
  }
}
