import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const faqBrandingApi = createApi({
    reducerPath: "faqBrandingApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['questions'],
    endpoints: (builder) => ({
        getAllQuestions: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllQuestions,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['questions']
        }),
        addQuestion: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addQuestion,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['questions'],
        }),
        updateQuestion: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updateQuestion,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['questions'],
        }),
        deleteQuestion: builder.mutation({
            query: ({ question_id }) => {
                return {
                    url: `${endPoints.deleteQuestion}${question_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['questions'],
        }),
    })
})
export const {
    useGetAllQuestionsQuery,
    useAddQuestionMutation,
    useUpdateQuestionMutation,
    useDeleteQuestionMutation } = faqBrandingApi