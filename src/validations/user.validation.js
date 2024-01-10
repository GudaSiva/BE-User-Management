const joi = require("joi");

const userCreateValidation = joi.object({
  first_name: joi.string().required(),
  middle_name: joi.string().required(),
  last_name: joi.string().required(),
  phone_no: joi.string().required(),
  email: joi.string().required(),
});

module.exports = { userCreateValidation };
