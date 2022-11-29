import jwt from "jsonwebtoken";
import User from "../models/user";
import ActiveSession from "../models/activeSession";
import { connection } from "../server/database";

export const createUserWithToken = async (userData: any) => {
  const userRepository = connection!.getRepository(User);
  const activeSessionRepository = connection!.getRepository(ActiveSession);

  const { login: username, email } = userData;
  let requiredUser: any = null;

  const user = await userRepository.findOne({ username });

  if (user) {
    requiredUser = user;
  } else {
    const query = {
      username,
      email: email ? email : "fullstackdev@gmail.com",
      password: "123",
    };
    userRepository.save(query).then((u) => {
      console.log("u", u);
      requiredUser = u;
    });
  }

  if (!process.env.SECRET) {
    throw new Error("SECRET not provided");
  }

  if (requiredUser) {
    const token: any = jwt.sign(
      {
        id: requiredUser.id,
        username: requiredUser.username,
      },
      process.env.SECRET,
      {
        expiresIn: 86400, // 1 week
      }
    );

    const query = { userId: requiredUser.id, token };

    console.log("query", query);
    activeSessionRepository.save(query);
    requiredUser.token = token;
  }
  return requiredUser;
};
