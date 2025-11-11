import { DataTypes } from "sequelize";
import { db } from "../../../config/db/index.js";
export const transaksiModel = db.define(
  "transaksi",
  {
    id_dompet: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_kategori: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ket: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "transaksi",
  }
);
(async () => {
  await transaksiModel.sync();
})();
