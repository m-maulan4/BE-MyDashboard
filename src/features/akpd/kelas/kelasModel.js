import { DataTypes } from "sequelize";
import { db } from "../../../config/db/index.js";
export const kelasModel = db.define(
  "akpd_kelas",
  {
    guru_kelas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kelas: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    jenis_kelas: {
      type: DataTypes.TEXT("tiny"),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "akpd_kelas",
  }
);
(async () => {
  await kelasModel.sync();
})();
