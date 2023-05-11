import apiSlice from "../apiSlice";

const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `/user`,
        method: "POST",
        body: data,
      }),
    }),

    getUsers: builder.query({
      query: () => `/user`,
    }),

    getSingleUser: builder.query({
      query: (id) => `/user/${id}`,
    }),

    editUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/user/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useGetSingleUserQuery,
  useCreateUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = userApi;
