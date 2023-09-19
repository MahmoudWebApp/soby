import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const slidesHomeApi = createApi({
    reducerPath: "slidesHomeApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['slides'],
    endpoints: (builder) => ({
        getAllSlides: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllSlidesHero,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['slides']
        }),
        addSlide: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addSlideHero,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['slides'],
        }),
        updateSlide: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updateSlideHero,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['slides'],
        }),
        deleteSlide: builder.mutation({
            query: ({ slide_id }) => {
                return {
                    url: `${endPoints.deleteSlideHero}${slide_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['slides'],
        }),
    })
})
export const { useGetAllSlidesQuery,
    useAddSlideMutation,
    useUpdateSlideMutation,
    useDeleteSlideMutation } = slidesHomeApi