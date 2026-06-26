const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    role: { type: String, enum: ["workspace_admin", "workspace_member"], default: "workspace_member" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);