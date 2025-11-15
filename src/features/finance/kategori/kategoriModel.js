import { DataTypes } from "sequelize";
import { db } from "../../../config/db/index.js";
export const kategoriModel = db.define(
  "kategori",
  {
    nama_kategori: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "kategori",
  }
);
(async () => {
  await kategoriModel.sync();
})();
