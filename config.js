require("dotenv").config()
module.exports = {
    port:process.env.PORT||3000,
    defaultLimit:process.env.DEFAULT_LIMIT||100
}