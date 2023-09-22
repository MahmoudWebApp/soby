import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const experiencesVideosHomeApi = createApi({
    reducerPath: "experiencesVideosHomeApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['experiencesVideos'],
    endpoints: (builder) => ({
        getAllExperiencesVideos: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllExperiencesVideos,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['experiencesVideos']
        }),
        addExperienceVideo: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addExperienceVideo,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['experiencesVideos'],
        }),

        deleteExperienceVideo: builder.mutation({
            query: ({ experienceVideo_id }) => {
                return {
                    url: `${endPoints.deleteExperienceVideo}${experienceVideo_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['experiencesVideos'],
        }),
    })
})
export const {
    useGetAllExperiencesVideosQuery,
    useAddExperienceVideoMutation,
    useDeleteExperienceVideoMutation } =
     experiencesVideosHomeApi