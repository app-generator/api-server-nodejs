import "dotenv/config";
import User from "./models/user";
import { connection, connect } from "./server/database";
const userId = process.argv[2];
const updatedRole = process.argv[3] ?? "1";

const updateUser = async () => {
  await connect();
  const userRepository = connection!.getRepository(User);
  userRepository.find({ id: userId }).then((user: any) => {
    if (!user.length) {
      console.error( "No user exists with the given id" )
      return;
    }
    const query = { id: user[0].id };
    const newValues = { user_role: updatedRole };
    userRepository
      .update(query, newValues)
      .then(() => console.log(`User updated successfully with role ${newValues.user_role}`)
      )
      .catch((err) => console.error(`error in updating user: ${err.message}`)
      );
  })
  .catch((err) =>  console.log(`error: ${err.message}`)
  )
};

updateUser();
