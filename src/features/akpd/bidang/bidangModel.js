import { DataTypes } from "sequelize";
import { db } from "../../../config/db/index.js";
export const bidangModel = db.define(
  "akpd_bidang",
  {
    bidang: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    skkpd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pengenalan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    akomodasi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tindakan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    kelas: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "akpd_bidang",
  }
);
(async () => {
  await bidangModel.sync();
})();
