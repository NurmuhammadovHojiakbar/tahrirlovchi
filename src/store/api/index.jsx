import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const translatorApi = createApi({
  reducerPath: "translatorApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    // Words
    getAllDictionary: builder.query({
      query: ({ letter, page, type }) =>
        `/dictionary/by-letter/?q=${letter || "a"}&offset=${
          ((page || 1) - 1) * 100
        }&limit=100&type=${type || 1}`,
    }),
    getWord: builder.query({
      query: (word) => `/dictionary/word/?q=${word}`,
    }),
    getWordsOnSearch: builder.query({
      query: (word) => `/dictionary/search/?q=${word}`,
    }),
    getWordTypes: builder.query({
      query: () => "/dictionary/types/",
    }),
    // Files
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
    // Translator
    checkContent: builder.mutation({
      query: (content) => ({
        url: "/spell-check/",
        method: "POST",
        body: content,
      }),
    }),
    // Feedback
    sendFeedback: builder.mutation({
      query: (data) => ({
        url: "/contact/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllDictionaryQuery,
  useGetWordQuery,
  useGetWordsOnSearchQuery,
  useGetWordTypesQuery,
  usePostFileMutation,
  usePostImageMutation,
  useCheckContentMutation,
  useSendFeedbackMutation,
} = translatorApi;
