const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/user", (req, res) =>
  User.findById(req.session.userId).exec((err, { name, favoriteBook }) =>
    err
      ? res.send({ status: 400, message: "Could not find user", error: true })
      : res.send({ name, favoriteBook, error: false, status: 200 })
  )
);

router.get("/verifySession", (req, res) =>
  req.session && req.session.userId
    ? res.send({ status: 200, message: "Successfully verified", error: false })
    : res.send({ status: 401, message: "You must be logged in to view this page1", error: true })
);

router.post("/login", (req, res) => {
  const { body: { email, password } = {} } = req;
  if (email && password) {
    User.authenticate(email, password, ({ error, user }) => {
      if (error || !user) res.send({ message: "Wrong email or password", status: 401, error: true });
      req.session.userId = user._id;
      return res.send({ session: req.session, error: false });
    });
  }
});

router.post("/register", (req, res) => {
  const { body: { email, name, favoriteBook, password, confirmPassword } = {} } = req;
  if (email && name && favoriteBook && password && confirmPassword) {
    if (password !== confirmPassword) return res.send({ message: "Password does not match", status: 400, error: true });
    const userData = { email, name, favoriteBook, password };
    return User.create(userData, error =>
      error
        ? res.send({ error, message: "Error creating user", error: true })
        : res.send({ status: 200, route: "/profile", error: false })
    );
  }
  return res.send({ message: "All fields required", status: 400, error: true });
});

module.exports = router;
