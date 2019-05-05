const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/user", (req, res) =>
  User.findById(req.session.userId).exec((err, { name, favoriteBook }) =>
    err
      ? res.send({ status: 400, message: "Could not find user", error: true })
      : res.send({ name, favoriteBook, status: 200 })
  )
);

router.post("/login", (req, res) => {
  const { body: { email, password } = {} } = req;
  if (!(email && password)) return res.send({ message: "All fields required", status: 400, error: true });
  User.authenticate(email, password, ({ error, user }) => {
    if (error || !user) return res.send({ message: "Wrong email or password", status: 401, error: true });
    req.session.userId = user._id;
    return res.send({ session: req.session, status: 200 });
  });
});

router.post("/register", (req, res) => {
  const { body: { email, name, favoriteBook, password, confirmPassword } = {} } = req;
  if (!(email && name && favoriteBook && password && confirmPassword))
    return res.send({ message: "All fields required", status: 400, error: true });
  if (password !== confirmPassword) return res.send({ message: "Password does not match", status: 400, error: true });
  const userData = { email, name, favoriteBook, password };
  return User.create(userData, error =>
    error
      ? res.send({ message: "Error creating user", error: true })
      : res.send({ status: 200, message: "User successfully created" })
  );
});

module.exports = router;
