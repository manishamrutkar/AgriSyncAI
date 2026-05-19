import api from "./api";

export const predictCrop = async (data) => {
  const response = await api.post(
    "/ai/predict",
    data
  );

  return response.data;
};