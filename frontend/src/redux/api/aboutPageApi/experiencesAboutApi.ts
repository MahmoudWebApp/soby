import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const experiencesAboutApi = createApi({
    reducerPath: "experiencesAboutApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['experiences', 'experiences-images'],
    endpoints: (builder) => ({
        getAllExperiencesTexts: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllExperiencesContents,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['experiences']
        }),
        addUpdateExperienceText: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateExperienceContents,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['experiences'],
        }),

        getAllExperiencesImage: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllExperiencesImages,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['experiences-images']
        }),
        addExperiencesImage: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addExperienceImage,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['experiences'],
        }),

        deleteExperiencesImage: builder.mutation({
            query: ({ image_id }) => {
                return {
                    url: `${endPoints.deleteExperienceImage}${image_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['experiences'],
        }),
    })
})
export const {
    useGetAllExperiencesTextsQuery,
    useAddUpdateExperienceTextMutation,
    useGetAllExperiencesImageQuery,
    useAddExperiencesImageMutation,
    useDeleteExperiencesImageMutation
} =
    experiencesAboutApi