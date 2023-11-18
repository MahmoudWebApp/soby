import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const formAppointmentsApi = createApi({
    reducerPath: "formAppointmentsApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getAllAppointments: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllAppointments,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },

        }),
        sendAppointment: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.sendFormAppointments,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
        }),
     

    })
})
export const {
    useGetAllAppointmentsQuery,
    useSendAppointmentMutation,
   } = formAppointmentsApi