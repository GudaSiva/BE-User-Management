"use strict";

const httpResponses = Object.freeze({
    SUCCESS : "OK",
    CREATED : "CREATED",
    NOT_FOUND : "NOT_FOUND",
    BAD_REQUEST : "BAD_REQUEST",
    UNAUTHORIZED_ENTITY: "UNAUTHORIZED_ENTITY",
    INTERNAL_SERVER_ERROR : "INTERNAL_SERVER_ERROR",
    ACCESS_DENIED: "ACCESS_DENIED",
    ERROR: "ERROR"
})

module.exports = { httpResponses };
