import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const testimonialsHomeApi = createApi({
    reducerPath: "testimonialsHomeApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['testimonials'],
    endpoints: (builder) => ({
        getAllTestimonials: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllTestimonials,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['testimonials']
        }),
        addTestimonial: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addTestimonial,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['testimonials'],
        }),
        updateTestimonial: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updateTestimonial,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['testimonials'],
        }),
        deleteTestimonial: builder.mutation({
            query: ({ testimonial_id }) => {
                return {
                    url: `${endPoints.deleteTestimonial}${testimonial_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['testimonials'],
        }),
    })
})
export const { useGetAllTestimonialsQuery,
    useAddTestimonialMutation,
    useUpdateTestimonialMutation,
    useDeleteTestimonialMutation } = testimonialsHomeApi