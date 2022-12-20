import sequelize from 'sequelize';
import street from '../config/config.js';
const {DataTypes} = sequelize;

 const lights = street.define('lightDistribution',{
    Name: {
        type: DataTypes.STRING
    },
    Street: {
        type: DataTypes.STRING
    },
    Address: {
        type: DataTypes.INTEGER
    },
    },{
    freezeTableName: true
 });

 export default lights;