import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TaskResponse = Task[];

export const taskApi = createApi({
  reducerPath: "tasksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6555b81084b36e3a431e301e.mockapi.io/api/v1/",
  }),
  tagTypes: ["Tasks"],
  endpoints: (build) => ({
    getTasks: build.query<TaskResponse, void>({
      query: () => "tasks",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Tasks", id } as const)),
              { type: "Tasks", id: "LIST" },
            ]
          : [{ type: "Tasks", id: "LIST" }],
    }),
    addTask: build.mutation<TaskResponse, Partial<Task>>({
      query(body) {
        return {
          url: "tasks",
          method: "POST",
          body,
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
    updateTask: build.mutation<TaskResponse, Partial<Task>>({
      query(data) {
        const { id, ...body } = data;
        return {
          url: `tasks/${id}`,
          method: "PUT",
          body,
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
    deleteTask: build.mutation<void, string>({
      query(id) {
        return {
          url: `tasks/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Tasks", id: "LIST" }],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = taskApi;
