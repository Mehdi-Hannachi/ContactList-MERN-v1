const { check, validationResult } = require("express-validator");

exports.registerRules = () => [
  check("fullName", "This field is required").notEmpty(),
  check("email", "This field is required").notEmpty(),
  check("email", "This is not a valid email").isEmail(),
  check("tel", "This field is required").notEmpty(),
  check("tel", "This is not a valid phone number").isLength({
    min: 8,
    max: 12,
  }),
];

exports.validator = (req, res, next) => {
  const errors = validationResult(req);

  errors.isEmpty() ? next() : res.status(400).json({ errors: errors.array() });
};
