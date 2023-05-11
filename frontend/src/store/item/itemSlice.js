import apiSlice from "../apiSlice";

const itemApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createItem: builder.mutation({
      query: (data) => ({
        url: `/item`,
        method: "POST",
        body: data,
      }),
    }),

    getItems: builder.query({
      query: () => `/item`,
    }),

    getSingleItem: builder.query({
      query: (id) => `/item/${id}`,
    }),

    editItem: builder.mutation({
      query: ({ id, data }) => ({
        url: `/item/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteItem: builder.mutation({
      query: (id) => ({
        url: `/item/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetItemsQuery,
  useLazyGetItemsQuery,
  useGetSingleItemQuery,
  useCreateItemMutation,
  useEditItemMutation,
  useDeleteItemMutation,
} = itemApi;
