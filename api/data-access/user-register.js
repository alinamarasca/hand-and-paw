/* eslint-disable no-underscore-dangle */

const Users = require("../models/user-register");

const databaseAccess = {
  create: async (newUser) => {
    const user = new Users(newUser);
    const savedUser = await user.save();

    const returnUser = {
      _id: savedUser._id,
      name: savedUser.name,
      email: savedUser.email,
    };
    return returnUser;
  },

  update: async (newData, userAvatar) => {
    const user = await Users.find({ _id: newData.id });

    if (user.length === 0) {
      throw new Error(`Cannot update user, id doesn't exist`);
    }
    const userUpdated = Users.updateOne(
      { _id: newData.id },
      {
        $set: {
          name: newData.name,
          password: newData.password,
          location: newData.location,
          phone: newData.phone,
          email: newData.email,
          avatar: userAvatar,
          updateDate: Date.now(),
          publicAccess: {
            monday: {
              access: newData["monday-access"],
              hours: newData["monday-hours"],
            },
            tuesday: {
              access: newData["tuesday-access"],
              hours: newData["tuesday-hours"],
            },
            wednesday: {
              access: newData["wednesday-access"],
              hours: newData["wednesday-hours"],
            },
            thursday: {
              access: newData["thursday-access"],
              hours: newData["thursday.hours"],
            },
            friday: {
              access: newData["friday-access"],
              hours: newData["friday-hours"],
            },
            saturday: {
              access: newData["saturday-access"],
              hours: newData["saturday-hours"],
            },
            sunday: {
              access: newData["sunday-access"],
              hours: newData["sunday-hours"],
            },
          },
        },
      }
    );
    return userUpdated;
  },

  remove: async (id) => {
    let removeUser = await Users.deleteOne({ _id: id });
    if (removeUser.deletedCount === 0) {
      throw new Error(`Cannot delete user, id doesn't exist`);
    }

    if (removeUser.deletedCount === 1) {
      removeUser = `User, with the id: '${id}' removed successfully`;
    }
    return removeUser;
  },

  read: async (id = "") => {
    const user = await Users.find({ _id: id });
    console.log(user);
    if (user.length === 0) {
      throw Error(`Cannot find user, id doesn't exist`);
    }
    return user;
  },

  all: async () => {
    let users = await Users.find();
    if (users.length === 0) {
      users = `there are not users in users collection`;
    }
    return users;
  },
  updateUserPublication: async (animalId, userId) => {
    const publishedAnimals = Users.updateOne(
      { _id: userId },
      { $push: { publishedAnimals: animalId } }
    );
    return publishedAnimals;
  },
  deleteUserPublication: async (userId, animalId) => {
    const publishedAnimals = Users.updateOne(
      { _id: userId },
      { $pull: { publishedAnimals: animalId } }
    );
    return publishedAnimals;
  },

  findUserByEmail: async (userEmail) => {
    const user = await Users.find({ email: userEmail }, "email");
    return user;
  },
  findUserLog: async (userEmail, userPassword) => {
    const user = await Users.find({
      email: userEmail,
      password: userPassword,
    });
    return user;
  },
};

module.exports = databaseAccess;
