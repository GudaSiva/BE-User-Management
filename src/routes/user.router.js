const { userController } = require("../controllers")
const { validation } = require("../middlewares")
const { userValidation } = require("../validations")

module.exports = (router)=>{
    router.get("/get-users", userController.getAllUser)
    router.post("/create-user",
    validation(userValidation.userCreateValidation), 
    userController.createUser)
    return router
}