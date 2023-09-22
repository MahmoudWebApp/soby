import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const coursesApi = createApi({
    reducerPath: "coursesApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['courses'],
    endpoints: (builder) => ({
        getAllCourses: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllCourses,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['courses']
        }),
        addCourse: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addCourse,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['courses'],
        }),
        updateCourse: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updateCourse,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['courses'],
        }),
        deleteCourse: builder.mutation({
            query: ({ course_id }) => {
                return {
                    url: `${endPoints.deleteCourse}${course_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['courses'],
        }),
    })
})
export const {
    useGetAllCoursesQuery,
    useAddCourseMutation,
    useUpdateCourseMutation,
    useDeleteCourseMutation } = coursesApi