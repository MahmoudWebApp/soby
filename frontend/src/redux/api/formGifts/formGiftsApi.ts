import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const formGiftsApi = createApi({
    reducerPath: "formGiftsApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getAllVisitors: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllVisitors,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },

        }),
        sendMessage: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.sendFormGifts,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
        }),
        getBookForGift: builder.query({
            query: () => {
                return {
                    url: endPoints.getBookGift,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },

        }),
        AddBookForGift: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addBookForGift,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
        }),

    })
})
export const { useGetAllVisitorsQuery, useSendMessageMutation, useGetBookForGiftQuery, useAddBookForGiftMutation } = formGiftsApi