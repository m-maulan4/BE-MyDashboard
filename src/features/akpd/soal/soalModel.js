import { DataTypes } from "sequelize";
import { db } from "../../../config/db/index.js";
export const soalModel = db.define(
  "akpd_soal",
  {
    id_bidang: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    soal: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    kelas: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "akpd_soal",
  }
);
(async () => {
  await soalModel.sync();
})();
