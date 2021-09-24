const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const postsRoute = require("./routes/posts");
const userRoute = require("./routes/user");
const vendorRoute = require("./routes/vendor");
const commentsRoute = require("./routes/comments");
const imageRoute = require("./routes/images");
const destinationRoute = require("./routes/destination");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

app.use("/posts", postsRoute);
app.use("/user", userRoute);
app.use("/vendor", vendorRoute);
app.use("/comments", commentsRoute);
app.use("/images", imageRoute);
app.use("/destinations", destinationRoute);
module.exports = app;
