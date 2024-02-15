import {Sequelize} from "sequelize"

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host:'localhost',
    port:5432,
    database: 'websterflix_development',
    username: 'postgres',
    password: 'webster12',
    define: {
        underscored:true
    }

})
