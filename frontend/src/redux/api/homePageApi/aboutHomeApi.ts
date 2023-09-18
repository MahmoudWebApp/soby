import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const aboutHomeApi = createApi({
    reducerPath: "aboutHomeApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['about-home'],
    endpoints: (builder) => ({
        getAboutHomeData: builder.query({
            query: () => {
                return {
                    url: endPoints.getAboutHome,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['about-home']
        }),

        AddUpdateAboutHomeData: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateAboutHome,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['about-home'],
        }),

    })
})
export const { useGetAboutHomeDataQuery,
    useAddUpdateAboutHomeDataMutation } = aboutHomeApi