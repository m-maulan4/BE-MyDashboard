import { DataTypes } from "sequelize";
import { db } from "../../config/db/index.js";
export const todoModel = db.define(
  "todos",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    priority: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    due_date: { type: DataTypes.DATE, allowNull: false },
  },
  {
    timestamps: true, // otomatis buat createdAt & updatedAt
    updatedAt: false,
  }
);
(async () => {
  await todoModel.sync();
})();
