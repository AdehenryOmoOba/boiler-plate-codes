import { createError } from "../customErrors.js";
import YoutubeUsersModel from "../models/YoutubeUsers.js";

export const usersController = async (req, res, next) => {
  try {
    const users = await YoutubeUsersModel.find({});
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export const updateUserController = async (req, res, next) => {
  if (req.userInfo.id !== req.params.id) {
    return next(createError(401, "You do not have permission to update"));
  }
  try {
    const updatedUser = await YoutubeUsersModel.findOneAndUpdate(
      req.userInfo.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({ userUpdateSuccess: updatedUser });
  } catch (error) {
    next(error);
  }
};

export const deleteUserController = async (req, res, next) => {
  if (req.userInfo.id !== req.params.id) {
    return next(
      createError(
        401,
        `You do not have permission to delete user ${req.userInfo.username}`
      )
    );
  }
  try {
    await YoutubeUsersModel.findOneAndDelete(req.userInfo.id);
    res.status(200).json({
      userDeleteSuccess: `User ${req.userInfo.username} deleted successfully`,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserController = async (req, res, next) => {
  try {
    // Remove password as part of response to client
    const {
      _doc: { password, ...others },
    } = await YoutubeUsersModel.findById(req.params.id);

    res.status(200).json(others);
  } catch (error) {
    next(error);
  }
};

export const subscribeController = async (req, res, next) => {
  try {
    await YoutubeUsersModel.findByIdAndUpdate(req.userInfo.id, {
      $addToSet: { subscribedUsers: req.params.id },
    });
    await YoutubeUsersModel.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json({ subscribeSuccess: "Subscription successful!" });
  } catch (error) {
    next(error);
  }
};

export const unsubscribeController = async (req, res, next) => {
  try {
    await YoutubeUsersModel.findByIdAndUpdate(req.userInfo.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    await YoutubeUsersModel.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json({ subscribeSuccess: "Unsubscribe successful!" });
  } catch (error) {
    next(error);
  }
};

export const likeVideoController = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

export const dislikeVideoController = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
