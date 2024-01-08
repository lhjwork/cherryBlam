import { useMutation } from "@tanstack/react-query";
import {
  createUserAccount,
  signInAccount,
  signOutAccount,
} from "../appwrite/api";
import { INewUser } from "@/types";

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

// 13923
