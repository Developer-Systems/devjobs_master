import { Schema, model } from "mongoose";

export const ROLES = ["user", "administrador", "company"];

const rolesSchema = new Schema(
  {
    name: String,
  },
  {
    versionKey: false,
  }
);

export default model("Roles", rolesSchema);
