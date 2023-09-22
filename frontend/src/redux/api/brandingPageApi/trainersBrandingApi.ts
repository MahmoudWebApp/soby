import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const trainersApi = createApi({
    reducerPath: "trainersApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['trainers'],
    endpoints: (builder) => ({
        getAllTrainers: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllTrainers,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['trainers']
        }),
        addTrainer: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addTrainer,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['trainers'],
        }),
        updateTrainer: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updateTrainer,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['trainers'],
        }),
        deleteTrainer: builder.mutation({
            query: ({ trainer_id }) => {
                return {
                    url: `${endPoints.deleteTrainer}${trainer_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['trainers'],
        }),
    })
})
export const {
    useGetAllTrainersQuery,
    useAddTrainerMutation,
    useUpdateTrainerMutation,
    useDeleteTrainerMutation } = trainersApi