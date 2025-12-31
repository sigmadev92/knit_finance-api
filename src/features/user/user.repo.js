import UserModel from "./user.model.js";

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

const updateUserRoleRepo = async (email, newRole) => {
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new Error("Invalid Email");
  }
  user.role = newRole;
  user.save();
};

export {
  addUserRepo,
  findUserByIdRepo,
  findUserByEmailRepo,
  removeUserRepo,
  updateUserRoleRepo,
};
