/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */
const Sequelize = require('sequelize');

const path = 'mysql://root:@localhost:3306/nodejsdb1';
const sequelize = new Sequelize(path, {
    operatorsAliases: false
});

let Dummy = sequelize.define('students13', {
    description: Sequelize.STRING
});

Dummy.sync().then(() => {
    console.log('New table created');
}).finally(() => {
    sequelize.close();
});
