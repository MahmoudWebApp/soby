import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const networkPlayListsApi = createApi({
    reducerPath: "networkPlayListsApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['playlists'],
    endpoints: (builder) => ({
        getAllNetworkPlayLists: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllNetworkPlayLists,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['playlists']
        }),
        addNetworkPlayList: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addNetworkPlayList,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['playlists']
        }),
        updateNetworkPlayList: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updateNetworkPlayList,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['playlists']
        }),
        deleteNetworkPlayList: builder.mutation({
            query: ({ playlist_id }) => {
                return {
                    url: `${endPoints.deleteNetworkPlayList}${playlist_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['playlists']
        }),
    })
})
export const {
    useGetAllNetworkPlayListsQuery,
    useAddNetworkPlayListMutation,
    useUpdateNetworkPlayListMutation,
    useDeleteNetworkPlayListMutation } = networkPlayListsApi