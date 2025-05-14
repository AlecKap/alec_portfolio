// https://redux-toolkit.js.org/rtk-query/overview
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// Config
import { githubUsername } from "../config";
import { get } from "react-scroll/modules/mixins/scroller";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    // https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user
    getUsers: builder.query({
      query: () => `/users/${githubUsername}`,
    }),
    // https://docs.github.com/en/rest/users/social-accounts?apiVersion=2022-11-28#list-social-accounts-for-a-user
    getSocials: builder.query({
      query: () => `/users/${githubUsername}/social_accounts`,
    }),
    // https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
    getProjects: builder.query({
      query: () => `/users/${githubUsername}/repos`,
    }),

    getProject1: builder.query({
      query: () => `/repos/${githubUsername}/hang-in-there-posters`,
    }),

    getProject2: builder.query({
      query: () => `/repos/${githubUsername}/social_media_clone`,
    }),

    getProject3: builder.query({
      query: () => `/repos/turingschool/present`,
    }),
  }),
});

export const { useGetUsersQuery, useGetSocialsQuery, useGetProjectsQuery, useGetProject1Query, useGetProject2Query, useGetProject3Query } =
  apiSlice;
