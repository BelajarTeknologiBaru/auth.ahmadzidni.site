import axios from "axios";

export const getUser = async (email) => {
  const response = await axios.post("/api/user", email);
  const data = response.data;
  return data;
};
