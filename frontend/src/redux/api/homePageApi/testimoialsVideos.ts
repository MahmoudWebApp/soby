import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const testimonialsVideosHomeApi = createApi({
    reducerPath: "testimonialsVideosHomeApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['testimonialsVideos'],
    endpoints: (builder) => ({
        getAllTestimonialsVideos: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllTestimonialsVideos,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['testimonialsVideos']
        }),
        addTestimonialVideo: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addTestimonialVideo,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['testimonialsVideos'],
        }),

        deleteTestimonialVideo: builder.mutation({
            query: ({ testimonialVideo_id }) => {
                return {
                    url: `${endPoints.deleteTestimonialVideo}${testimonialVideo_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['testimonialsVideos'],
        }),
    })
})
export const { useGetAllTestimonialsVideosQuery, useAddTestimonialVideoMutation, useDeleteTestimonialVideoMutation } = testimonialsVideosHomeApi