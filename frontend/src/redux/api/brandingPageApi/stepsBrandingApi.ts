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
        addUpdateStep: builder.mutation<object, FormData>({
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
      
    })
})
export const {
    useGetAllStepsQuery,
    useAddUpdateStepMutation,
 } = stepsBrandingApi