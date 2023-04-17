import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IImageResponseResult } from "../../api/imageSearchApi";
const baseURL = "https://pixabay.com/api/";
const APIKey = "24848647-9c50e0191dab5764d68291abd";
type queryType = {
  query: string;
  page: number;
};
// Define a service using a base URL and expected endpoints
export const getImages = createApi({
  reducerPath: "pixabayApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseURL}?key=${APIKey}` }),
  endpoints: (builder) => ({
    getImagesByName: builder.query<IImageResponseResult, queryType>({
      query: (queryParams) =>
        `&q=${queryParams.query}&per_page=10&page=${queryParams.page}`,
    }),
  }),
});

export const { useGetImagesByNameQuery } = getImages;

export default getImages.reducer;
