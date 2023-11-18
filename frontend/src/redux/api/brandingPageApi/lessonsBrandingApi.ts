import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const lessonsBrandingApi = createApi({
    reducerPath: "lessonsBrandingApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['lessons'],
    endpoints: (builder) => ({
        getAllLessons: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllLessons,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['lessons']
        }),
        addUpdateLesson: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addUpdateLesson,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['lessons'],
        }),
        // updateLesson: builder.mutation<object, FormData>({
        //     query: (data) => {
        //         return {
        //             url: endPoints.updateLesson,
        //             method: "post",
        //             headers: {
        //                 Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        //             },
        //             body: data,
        //         };
        //     },
        //     invalidatesTags: ['lessons'],
        // }),
        // deleteLesson: builder.mutation({
        //     query: ({ lesson_id }) => {
        //         return {
        //             url: `${endPoints.deleteLesson}${lesson_id}`,
        //             method: "delete",
        //             headers: {
        //                 Authorization: `Bearer ${getTokenFromLocalStorage()}`,
        //             },
        //         };
        //     },
        //     invalidatesTags: ['lessons'],
        // }),
    })
})
export const {
    useGetAllLessonsQuery,
    useAddUpdateLessonMutation,
    // useUpdateLessonMutation,
    // useDeleteLessonMutation 
} = lessonsBrandingApi