import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl, endPoints } from "../../endPoints";
import { getTokenFromLocalStorage } from "../../../utils/helpFunctions";


export const networksHomeApi = createApi({
    reducerPath: "networksHomeApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    tagTypes: ['networks'],
    endpoints: (builder) => ({
        getAllNetworks: builder.query({
            query: () => {
                return {
                    url: endPoints.getAllNetworks,
                    method: "get",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                }

            },
            providesTags: ['networks']
        }),
        addNetwork: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.addNetwork,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['networks'],
        }),
        updateNetwork: builder.mutation<object, FormData>({
            query: (data) => {
                return {
                    url: endPoints.updateNetwork,
                    method: "post",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                    body: data,
                };
            },
            invalidatesTags: ['networks'],
        }),
        deleteNetwork: builder.mutation({
            query: ({ network_id }) => {
                return {
                    url: `${endPoints.deleteNetwork}${network_id}`,
                    method: "delete",
                    headers: {
                        Authorization: `Bearer ${getTokenFromLocalStorage()}`,
                    },
                };
            },
            invalidatesTags: ['networks'],
        }),
    })
})
export const { useGetAllNetworksQuery, useAddNetworkMutation, useUpdateNetworkMutation, useDeleteNetworkMutation } = networksHomeApi