import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const translatorApi = createApi({
  reducerPath: "translatorApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    getAllDictionary: builder.query({
      query: ({ letter, page }) =>
        `/dictionary/by-letter/?q=${letter || "a"}&offset=${
          ((page || 1) - 1) * 100
        }&limit=100`,
    }),
    getWord: builder.query({
      query: (word) => `/dictionary/word/?q=${word}`,
    }),
  }),
});

export const { useGetAllDictionaryQuery, useGetWordQuery } = translatorApi;
