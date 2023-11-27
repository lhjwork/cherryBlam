import { ID } from "appwrite";
import { INewUser } from "@/types";
import { account } from "./config";

export async function createUserAccount(user: INewUser) {
  try {
    const newAcount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newAcount;
  } catch (err) {
    console.log(err);
    return err;
  }
}
