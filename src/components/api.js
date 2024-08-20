import axios from "axios";

export const fetchVisionGallery = async (query, pageNumber = 1) => {
  const API_KEY = "9kvSPr3cipTM7TgBi9S2uaYrAR_dw3vICaSyR4jAWh8";
  const BASE_URL = "https://api.unsplash.com/search/photos/";

  const params = new URLSearchParams({
    client_id: API_KEY,
    query: query,
    page: pageNumber,
    orientation: "landscape",
    per_page: 12,
  });
  const response = await axios.get(`${BASE_URL}?${params.toString()}`);
  return response.data;
};
