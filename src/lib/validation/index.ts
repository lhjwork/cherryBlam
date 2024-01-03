import * as z from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "너무 짧아요!2글자 이상 부탁드립니다.  " }),
  username: z
    .string()
    .min(2, { message: "너무 짧아요! 2글자 이상 부탁드립니다. " }),
  email: z
    .string()
    .email({ message: "@를 포함한 정확한 이메일 주소를 입력해주세요. " }),
  password: z.string().min(8, { message: "최소 8글자 입니다. " }),
});

export const SigninValidation = z.object({
  email: z
    .string()
    .email({ message: "@를 포함한 정확한 이메일 주소를 입력해주세요. " }),
  password: z.string().min(8, { message: "최소 8글자 입니다. " }),
});
