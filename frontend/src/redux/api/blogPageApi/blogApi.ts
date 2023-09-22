import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['posts'],
    endpoints: (builder) => ({
        getAllPosts: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllPosts,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['posts']
        }),
        addPost: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addPost,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['posts'],
        }),
        updatePost: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updatePost,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['posts'],
        }),
        deletePost: builder.mutation({
            query: ({ post_id }) => {
                return {
                    url: `${endPoints.deletePost}${post_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['posts'],
        }),
    })
})
export const {
    useGetAllPostsQuery,
    useAddPostMutation,
    useUpdatePostMutation,
    useDeletePostMutation } = postsApi