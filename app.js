const {  app, express } = require("./src/Db/Config");
const { dbConnection } = require("./src/Db/MySqlConfig");
app.listen(9000);

dbConnection()

const userRouter=require("./src/Routes/UserRouter")

app.use(express.json())

app.use("/api/user",userRouter)