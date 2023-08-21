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
    postFile: builder.mutation({
      query: (file) => ({
        url: "/file/convert-file/",
        method: "POST",
        body: file,
        responseHandler: (res) => res.blob(),
      }),
    }),
    postImage: builder.mutation({
      query: (file) => ({
        url: "/file/convert-image/",
        body: file,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetAllDictionaryQuery,
  useGetWordQuery,
  usePostFileMutation,
  usePostImageMutation,
} = translatorApi;
