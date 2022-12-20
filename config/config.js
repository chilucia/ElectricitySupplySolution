import sequelize from "sequelize";

const street = new sequelize ('electricity','root','root',{
    host: "localhost",
    dialect: "mysql"
})

export default street;