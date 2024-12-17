const mysql = require("mysql");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Readings",
});

const dbConnection = () => {
  con.connect((err) => {
    if (err) {
      console.log("Not connected", err);
    } else {
      console.log("Connected");
    }
  });
//   con.query("select * from  users",(err,result)=>{
//     console.log("result",result)


//   })
};
module.exports = {
  dbConnection,
  con,
};
