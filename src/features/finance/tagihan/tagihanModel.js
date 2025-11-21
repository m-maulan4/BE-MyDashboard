import { DataTypes } from "sequelize";
import { db } from "../../../config/db/index.js";
export const tagihanModel = db.define(
  "tagihan",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: { type: DataTypes.INTEGER, allowNull: false },
    desc: { type: DataTypes.TEXT, defaultValue: "-" },
    done: {
      type: DataTypes.TINYINT,
      defaultValue: false,
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    updatedAt: false,
    tableName: "tagihan",
  }
);
(async () => {
  await tagihanModel.sync();
})();
