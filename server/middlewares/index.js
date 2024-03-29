var { expressjwt: jwt } = require("express-jwt");
import Course from "../models/course";
import User from "../models/user";

export const requireSignIn = jwt({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

export const isInstructor = async (req, res, next) => {
  try {
    const user = await User.findById(req.auth._id).exec();
    if (!user.role.includes("Instructor")) {
      return res.sendStatus(403);
    } else {
      next();
    }
  } catch (err) {
    console.log(err);
  }
};

export const isEnrolled = async (req, res, next) => {
  try {
    const user = await User.findById(req.auth._id).exec();
    const course = await Course.findOne({ slug: req.params.slug }).exec();

    let ids = [];
    for (let i = 0; i < user.courses.length; i++) {
      ids.push(user.courses[i].toString());
    }

    if (!ids.includes(course._id.toString())) {
      return res.sendStatus(403);
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};
