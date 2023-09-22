import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const storyAboutApi = createApi({
    reducerPath: "storyAboutApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['story-about'],
    endpoints: (builder) => ({
        getStoryAbout: builder.query({
            query: () => {
                return {
                    url: endPoints.getStoryAbout,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['story-about']
        }),

        AddUpdateStoryAbout: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateStoryAbout,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['story-about'],
        }),

    })
})
export const {
    useGetStoryAboutQuery,
    useAddUpdateStoryAboutMutation
} = storyAboutApi