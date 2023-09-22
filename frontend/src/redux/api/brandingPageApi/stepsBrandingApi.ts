import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const stepsBrandingApi = createApi({
    reducerPath: "stepsBrandingApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['steps'],
    endpoints: (builder) => ({
        getAllSteps: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllSteps,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['steps']
        }),
        addStep: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addStep,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['steps'],
        }),
        updateStep: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updateStep,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['steps'],
        }),
        deleteStep: builder.mutation({
            query: ({ step_id }) => {
                return {
                    url: `${endPoints.deleteStep}${step_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['steps'],
        }),
    })
})
export const {
    useGetAllStepsQuery,
    useAddStepMutation,
    useUpdateStepMutation,
    useDeleteStepMutation } = stepsBrandingApi