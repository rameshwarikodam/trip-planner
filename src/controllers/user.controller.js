exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

exports.vendorBoard = (req, res) => {
    res.status(200).send("Vendor Content.");
};

// exports.createComment = (roleId, user) => {
//     return Comment.create({
//         fname: user.fname,
//         lname: user.lname,
//         address: user.address,
//         mobno: user.mobno,
//         dob: user.dob,
//         emailID: user.emailID,
//         password: user.password,
//         //  roleId: roleId,
//     })
//         .then((user) => {
//             console.log(">> Created user: " + JSON.stringify(user, null, 4));
//             return user;
//         })
//         .catch((err) => {
//             console.log(">> Error while creating user: ", err);
//         });
// };

/*
There are 4 functions:
– /api/test/all for public access
– /api/test/user for loggedin users (role: user/moderator/admin)
– /api/test/mod for users having moderator role
– /api/test/admin for users having admin role
*/