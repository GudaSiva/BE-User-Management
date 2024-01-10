const { httpStatusCodes } = require("../constants");
const { logger } = require("../utils/logger.util");

const validate = (schema) => {
  return (req, res, next) => {
    const payload = { ...req.body };
    const { error } = schema.validate(payload, { abortEarly: false });
    if (!error) {
      logger.info("Schema valid Successfully");
      next();
    } else {
      const { details } = error;
      const message = details.map((x) => x.message).join(",");
      logger.info(message);
      res.status(httpStatusCodes.UNPROCESSABLE_ENTITY).json({ error: message });
    }
  };
};

module.exports = validate ;
