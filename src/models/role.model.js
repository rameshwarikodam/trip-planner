module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("role", {
        roleId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    });

    return Role;
};