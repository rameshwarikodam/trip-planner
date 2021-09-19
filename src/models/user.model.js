module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        // username: {
        //     type: Sequelize.STRING
        // },
        // email: {
        //     type: Sequelize.STRING
        // },
        // password: {
        //     type: Sequelize.STRING
        // }



        fname: {
            type: Sequelize.STRING
        },
        lname: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        mobno: {
            type: Sequelize.STRING
        },
        dob: {
            type: Sequelize.DATE
        },
        emailID: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },

    });

    return User;
};