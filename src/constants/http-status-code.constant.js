"use strict";
const httpStatusCodes = Object.freeze({
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  UNPROCESSABLE_ENTITY: 422,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  ERROR: 500,
  ACCESS_DENIED: 403,
});

module.exports = { httpStatusCodes };
