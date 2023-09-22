import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const booksAboutApi = createApi({
    reducerPath: "booksAboutApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['books'],
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllBooks,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['books']
        }),
        addBook: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addBook,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['books'],
        }),
        updateBook: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updateBook,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['books'],
        }),
        deleteBook: builder.mutation({
            query: ({ book_id }) => {
                return {
                    url: `${endPoints.deleteBook}${book_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['books'],
        }),
    })
})
export const { useGetAllBooksQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation } = booksAboutApi