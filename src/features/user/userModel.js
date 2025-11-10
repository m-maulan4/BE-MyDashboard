import bcrypt from "bcrypt";
import { db } from "../../config/db/index.js";
import { DataTypes } from "sequelize";
export const userModel = db.define(
  "users",
  {
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // token_crf: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
  },
  {
    timestamps: true, // otomatis buat createdAt & updatedAt
    hooks: {
      beforeCreate: async (user) => {
        const slat = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, slat);
      },
    },
  }
);
(async () => {
  await userModel.sync();
})();
