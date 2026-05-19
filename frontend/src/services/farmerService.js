import api from "./api";

export const getFarmerLands = async () => {
  const response = await api.get("/farmers/lands");

  return response.data;
};

export const createLand = async (data) => {
  const response = await api.post("/farmers/lands", data);

  return response.data;
};