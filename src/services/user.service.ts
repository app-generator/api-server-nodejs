import jwt from "jsonwebtoken";
import User from "../models/user";
import Role from '../models/role'
import ActiveSession from "../models/activeSession";
import { connection } from "../server/database";
import {DEFAULT_ROLE} from '../constants'

export const createUserWithToken = async (userData: any) => {
  const userRole = DEFAULT_ROLE
  const userRepository = connection!.getRepository(User);
  const activeSessionRepository = connection!.getRepository(ActiveSession);
  const roleRepository = connection!.getRepository(Role)

  const { login: username, email } = userData;
  let requiredUser: any = null;

  const user = await userRepository.findOne({ username });
  const role = await roleRepository.findOne({name: userRole})
  if(!role) {
    throw new Error(`no role exists for ${userRole} in db`)
  }

  if (user) {
    requiredUser = user;
  } else {
    const query = {
      username,
      email,
      user_role: role.id
    };
    const u = await userRepository.save(query)
    requiredUser = u;
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
    activeSessionRepository.save(query);
    requiredUser.token = token;
  }
  return requiredUser;
};
