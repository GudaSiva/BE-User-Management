// routes/: This directory contains the route definitions for your application. Each route file should handle routes related to a specific resource (e.g., userRoutes.js, postRoutes.js).

module.exports = (router) => {
    router.use("/user",require("./user.router")(router))
    return router
};
