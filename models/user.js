const mongoose = require("mongoose"),
      passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username: String,
    points: {type: Number, default: 0}
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);