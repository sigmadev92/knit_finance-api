import UserModel from "./user.model";

const addUserRepo = async ({ fullName, email, password, role }) => {
  const newUser = await UserModel.insertOne({
    fullName,
    email,
    password,
    role,
  });
  return newUser;
};

const findUserByIdRepo = async (userId) => {
  return await UserModel.findById(userId);
};

const findUserByEmailRepo = async (email) => {
  return await UserModel.findOne({ email });
};
const removeUserRepo = async (userId) => {
  await UserModel.deleteOne({ _id: userId });
};

export { addUserRepo, findUserByIdRepo, findUserByEmailRepo, removeUserRepo };
