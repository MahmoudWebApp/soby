import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const trainingApi = createApi({
    reducerPath: "trainingsApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['trainings'],
    endpoints: (builder) => ({
        getAllTrainings: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllTrainings,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['trainings']
        }),
        addTraining: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addTraining,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['trainings'],
        }),
        updateTraining: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updateTraining,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['trainings'],
        }),
        deleteTraining: builder.mutation({
            query: ({ training_id }) => {
                return {
                    url: `${endPoints.deleteTraining}${training_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['trainings'],
        }),
    })
})
export const {
    useGetAllTrainingsQuery,
    useAddTrainingMutation,
    useUpdateTrainingMutation,
    useDeleteTrainingMutation } = trainingApi