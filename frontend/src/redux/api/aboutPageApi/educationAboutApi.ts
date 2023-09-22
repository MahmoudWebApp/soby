import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const educationAboutApi = createApi({
    reducerPath: "educationAboutApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['education-about'],
    endpoints: (builder) => ({
        getEducationAbout: builder.query({
            query: () => {
                return {
                    url: endPoints.getEducationAbout,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['education-about']
        }),

        AddUpdateEducationAbout: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateEducationAbout,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['education-about'],
        }),

    })
})
export const {
    useGetEducationAboutQuery,
    useAddUpdateEducationAboutMutation
} = educationAboutApi