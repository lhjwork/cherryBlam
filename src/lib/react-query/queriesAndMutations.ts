import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createUserAccount,
  getRecentPosts,
  getUsers,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";
import { INewUser } from "@/types";
import { QUERY_KEYS } from "./queryKeys";

// mutation 일반적 형식 (공식 문서)
// const mutation = useMutation({
//   mutationFn: (newTodo) => {
//     return axios.post('/todos', newTodo)
//   },
// })

// mutation은 data의 create,update,delete or 서버의 side 효과를 주기위해서 사용됨
export const useCreateUserAccount = () => {
  return useMutation({
    //createUserAccount 에서 api 통신 탐
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};

export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};

export const useGetUsers = (limit?: number) => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_USERS],
    queryFn: () => getUsers(limit),
  });
};

// POST QUERIES
// ============================================================
export const useGetRecentPosts = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.GET_RECENT_POSTS],
    queryFn: getRecentPosts,
  });
};
