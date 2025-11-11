import { DataTypes } from "sequelize";
import { db } from "../../../config/db/index.js";
export const siswaModel = db.define(
  "akpd_siswa",
  {
    id_kelas: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nim: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    jk: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "akpd_siswa",
  }
);
(async () => {
  await siswaModel.sync();
})();
